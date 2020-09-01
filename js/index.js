//function for viewing events

function message(msg) {
    document.getElementById('output').innerHTML = msg + " event";
}

//date function
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

//open / close functions

function closeMe() {
    x = document.getElementById("yoohoo");
    x.style.display = "none";
} //option 1: change style attribute directly


//option 2: change class name (change class style in the css page)
//x.className = "closed";

function openMe() {
    x = document.getElementById("yoohoo");
    x.style.display = "block";
    //option 1: change style attribute directly - code was not working properly until i moved this comment from between the code


    //option 2: change class name (change class style in the css page)
    //x.className = "open";
}