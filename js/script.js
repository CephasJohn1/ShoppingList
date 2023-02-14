// Variables && Functions
var button = document.getElementById("enter");
var input = document.getElementById("taskinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li")

function completed() {
    
    li.classList.toggle("done")
}

function inputLength() {return input.value.length};

function createList() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ""
}

function addList_click() {
    if (inputLength() > 0) {
        createList()
    }
}

function addList_keyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createList()
}
}

// Engine

button.addEventListener("click", addList_click)

input.addEventListener("keypress", addList_keyPress)