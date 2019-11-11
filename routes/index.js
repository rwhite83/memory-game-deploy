'use strict';
var express = require('express');
var app = express.Router();
let path = require('path')
const fetch = require('node-fetch');
// const baseDir = __dirname;
var fs = require('fs')
// const html_dom = require('htmldom')

// app.use(express.static(path.join(__dirname, 'public')))

/*
// my site template as string
var index_string_above = '<!DOCTYPE html><html><head>'
    + '<title>Ross White COMP 4711 Lab 5 Home Page</title>'
    + '<link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">'
    + '<link rel="stylesheet" type="text/css" href="/css/lab05_CSS.css">'
    + '<script src="/javascript/lab05_JS.js" defer></script></head>'
    + '<body onload="initial_hide()"></p>'
    + '<div id="artist_app_id" class="artist_app_class">'
    + '<div class="directory" id="directory">'
    + '<h1>Artist Directory</h1>'
    + '<form method="POST" action="/search"><input type="text" id="artist_input" name="artist_input_field">'
    + '<input type="submit" id="search_artist_btn" value="Search"></input></form>'
    + '<button id="add_artist_btn" onclick="hide_add_artist_div()">Add</button><br><br></div>'
    + '<form id="new_artist_div_id" class="new_artist_div_class" method="POST" action="/">'
    + '<input type="text" id="new_artist_name_field" name="new_artist_name_field" required="true" maxlength="40" placeholder="Artist Name" class="artist_lookup_fields">'
    + '<input type="text" id="new_artist_about_field" name="new_artist_about_field" required="true" maxlength="40" placeholder="About artist" class="artist_lookup_fields">'
    + '<input type="text" id="new_artist_img_field" name="new_artist_img_field" required="true" placeholder="Image url" class="artist_lookup_fields"><br>'
    + '<input type="submit" id="add_btn" value="Add"></input></form>'
    + '<div id="saved_artists_div"></div>'

var index_string_below = '</div></div>'
    + '<br><br><div><form method="POST" action="/delete_all"><input type="submit" id="add_btn" value="Delete All Artitsts"></input></form></div></body></html>'
    */

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// intend to put this in its own file once i figure out how
/////////////////////////////////////////////////////////////////////////////////////////////////////////




app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'views', '../../views/lab05_index.html'))
/*

    fs.readFile('artists.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.write(index_string_above)
            var parse_json = JSON.parse(data)
            for (var i = 0; i < parse_json.length; i++) {
                // creating a text html node
                var new_artist_string = '<div class="artist">'
                    + '<form method="POST" action="/delete_single"><input type="submit" name="jim" class="delete_btn" value="Delete"></input>'
                    // this is super ugly, must be a better way to do this
                    + '<input type="test" id="for_delete_reference" name="for_delete_reference" value="' + parse_json[i].name + '" style="display: none">'
                    + '<img alt="image not found" src="' + parse_json[i].img + '">'
                    + '<h2>' + parse_json[i].name + '</h2>'
                    + '<p name="' + parse_json[i].name + '">' + parse_json[i].about + '</p></div></form>'
                res.write(new_artist_string)
            }
            // here i want to write a scrit to load from backup json if json array empty
            res.write(index_string_below)
            */
            // res.end()
       // }
    //})
})


app.post('/delete_all', (req, res) => {

    fs.readFile('artists.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            // unhandled error, if file empty or doesn't exist, write fails and currently need the file with empty array notation
            fs.writeFile("artists.json", "[]", "utf8", (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("directory successfully cleared")
                }
            })
        }
    })
    res.writeHead(302, {
        'Location': '/'
    });
    res.end()
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// intend to put this in its own file once i figure out how
/////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/delete_single', (req, res) => {

    const retrieved_artist_name = req.body.for_delete_reference

    fs.readFile('artists.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var parse_json = JSON.parse(data)
            for (var i = 0; i < parse_json.length; i++) {
                // search and remove target JSON entry
                if (parse_json[i].name.toLowerCase() == retrieved_artist_name.toLowerCase()) {
                    console.log(parse_json)
                    console.log(retrieved_artist_name)
                    parse_json.splice(i, 1)
                    fs.writeFile("artists.json", JSON.stringify(parse_json), "utf8", (err) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log("file deleted successfully")
                        }
                    })
                }
            }
        }
    })
    res.writeHead(302, {
        'Location': '/'
    });
    res.end()
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// intend to put this in its own file once i figure out how
/////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/', (req, res) => {

    // getting input data from sending form
    const form_new_artist_name = req.body.new_artist_name_field
    const form_new_artist_about = req.body.new_artist_about_field
    const form_new_artist_img = req.body.new_artist_img_field

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // it would be nice to have some sort of auto incrementing value here
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    var new_artist_object = {
        name: form_new_artist_name,
        about: form_new_artist_about,
        img: form_new_artist_img
    }

    fs.readFile('artists.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var parse_json = JSON.parse(data)
            parse_json.push(new_artist_object)
            /////////////////////////////////////////////////////////////////////////////////////////////////////////
            // unhandled error, if file empty or doesn't exist, write fails and currently need the file with empty array notation
            /////////////////////////////////////////////////////////////////////////////////////////////////////////
            fs.writeFile("artists.json", JSON.stringify(parse_json), "utf8", (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("file updated successfully")
                }
            })
        }
    })
    res.writeHead(302, {
        'Location': '/'
    });
    res.end()
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// intend to put this in its own file once i figure out how
/////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/search', (req, res) => {

    // fs.readFile('artists.json', (err, data) => {

    const form_new_artist_name = app.body.new_artist_name_field


        // var test_variable = app.getElementById("new_artist_img_field").value;

    console.log(form_new_artist_name)
        /*
        // getting input data from sending form
        const artist_search_name = req.body.artist_input_field

        // console.log(artist_search_name)
        if (err) {
            console.log(err)
        } else {
            var parse_json = JSON.parse(data)
            for (var i = 0; i < parse_json.length; i++) {

                if (parse_json[i].name.toLowerCase().includes(artist_search_name.toLowerCase())) {

                    console.log(parse_json[i].name)
                    console.log(artist_search_name)

                } else {

                }
            }
        }
    })*/
    res.writeHead(302, {
        'Location': '/'
    });
    res.end()
})

module.exports = app;
