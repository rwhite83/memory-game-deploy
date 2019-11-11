function hide_add_artist_div() {
    var new_artist_div = document.getElementById("new_artist_div_id");
    new_artist_div.classList.toggle("hidden");
}

function initial_hide() {
    hide_add_artist_div();
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// this functionality now handled entirely server side
/////////////////////////////////////////////////////////////////////////////////////////////////
/*
function add_artist() {

    // generating elements
    var added_artist_div = document.createElement('div');
    added_artist_div.classList.add('artist');
    var new_artist_name = document.createElement('h2');
    var new_artist_about = document.createElement('p');
    var new_artist_img = document.createElement('img');
    new_artist_img.setAttribute('alt', "image not found");
    var new_artist_delete_btn = document.createElement('button');
    new_artist_delete_btn.classList.add('delete_btn');
    new_artist_delete_btn.addEventListener("click", function () {
        delete_artist(new_artist_delete_btn);
    });

    // // getting text from existing elements
    var new_artist_name_text = document.getElementById("new_artist_name_field").value;
    var new_artist_about_text = document.getElementById("new_artist_about_field").value;
    var new_artist_img_url = document.getElementById("new_artist_img_field").value;

    // apply values to objects
    new_artist_name.textContent = new_artist_name_text;
    new_artist_about.textContent = new_artist_about_text;
    new_artist_img.src = new_artist_img_url;

    // creating div
    new_artist_delete_btn.innerText = "Delete";
    added_artist_div.appendChild(new_artist_delete_btn);
    added_artist_div.appendChild(new_artist_img);
    added_artist_div.appendChild(new_artist_name)
    added_artist_div.appendChild(new_artist_about);
    var artist_string = added_artist_div.innerHTML;

    // pasting div
    artist_list_div = document.getElementById('saved_artists_div');
    artist_list_div.appendChild(added_artist_div);

    add_artist_to_local_storage(new_artist_name_text, added_artist_div);
    clear_fields();
    hide_add_artist_div();
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////
// this functionality now handled entirely server side
/////////////////////////////////////////////////////////////////////////////////////////////////
/*
function add_artist_to_local_storage(new_artist_name_text, new_artist_div) {

    // putting object in local storage
    localStorage.setItem(new_artist_name_text, new_artist_div.innerHTML);
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////
// this functionality now handled entirely server side
/////////////////////////////////////////////////////////////////////////////////////////////////
/*
function load_existing_artists() {

    // while loop to capture all local storage elements
    for (var i = 0; localStorage.getItem(localStorage.key(i)) != null; i++) {
        var new_div = document.createElement('div');
        var running_artist_add = localStorage.getItem(localStorage.key(i));
        new_div.innerHTML = running_artist_add;
        new_div.classList.add('artist');
        var child_node_array = new_div.childNodes;
        var child_delete_btn = child_node_array[0];
        child_delete_btn.classList.add('delete_btn')
        child_delete_btn.addEventListener("click", function () {
            delete_artist(child_delete_btn);
        });

        // adding divs to master artist element
        artist_list_div = document.getElementById('saved_artists_div');
        artist_list_div.appendChild(new_div);
    }
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////
// this functionality now handled entirely server side
/////////////////////////////////////////////////////////////////////////////////////////////////
/*
function search_artist() {

    // getting the searchable string
    var artist_search_name = document.getElementById("artist_input").value;
    var artist_directory = document.getElementById("saved_artists_div");
    var directory_node_array = artist_directory.children;

    // search through all of the elements
    for (var i = 0; i < directory_node_array.length; i++) {
        var name_check_div = document.createElement('div');
        name_check_div = directory_node_array[i];
        var name_check_div_element_array = name_check_div.children;
        name_to_check_string = name_check_div_element_array[2];
        var searched_name = name_to_check_string.innerHTML.toLowerCase();
        if (!searched_name.includes(artist_search_name.toLowerCase())) {
            directory_node_array[i].classList.toggle("hidden");
        }
    }
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////
// this functionality now handled entirely server side
/////////////////////////////////////////////////////////////////////////////////////////////////
/*
function clearLocal() {

    // confirming delete
    if (confirm("Are you sure you want to delete all of your artists?")) {
        alert("Can do!");
        localStorage.clear();
        location.reload();
    } else {
        alert("Deletion cancelled.");
    }
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////
// this functionality now handled entirely server side
/////////////////////////////////////////////////////////////////////////////////////////////////
/*
function clear_fields() {

    // clears the input fields
    var new_artist_name_text = document.getElementById("new_artist_name_field");
    var new_artist_about_text = document.getElementById("new_artist_about_field");
    var new_artist_img_url = document.getElementById("new_artist_img_field");
    new_artist_name_text.value = "";
    new_artist_about_text.value = "";
    new_artist_img_url.value = "";
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////
// this functionality now handled entirely server side
/////////////////////////////////////////////////////////////////////////////////////////////////
/*
function delete_artist(button) {

    // grabs parent node, grabs child array, selects artist name from array, 
    //      removes node from local storage
    var garbage_artist_div = button.parentNode;
    var garbage_node_array = garbage_artist_div.childNodes;
    var node_to_remove = document.createElement('div');
    node_to_remove.innerHTML = garbage_node_array[2].innerHTML;
    localStorage.removeItem(node_to_remove.innerHTML);

    // gets button, gets its parent, then get ITS parent, and then remove that child
    // removes from current page
    var garbage_artist_div = button.parentNode;
    garbage_artist_div.remove();

    // reloads page
    location.reload();
}
*/

