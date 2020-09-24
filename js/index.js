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

//function for using "this"

function showProperties(element) {
    document.getElementById('note').innerHTML = element.alt;
}

//using arrays
var places = ["Germany", "France", "Canada"];

function loadPlaces() {
    document.getElementById("places").innerHTML = places;
}

function myFunction() {
    var place = prompt("Where else have you traveled?");
    places[places.length] = place;
    document.getElementById("places").innerHTML = places;
}

//syntax for iterations & finding the average of an array
var grades = [100, 95, 92, 56, 85, 90, 91, 96, 100, 88, 84];

var sum = 0;
if (grades.length > 0) {
    for (index = 0; index < grades.length; index++) {
        sum += grades[index];
    }

    document.write(sum / grades.length);
} else
    document.write("Empty Array");



//forms
function nicknameFunction() {
    if (document.getElementById('yesNick').checked) {
        document.getElementById('nick').style.display = "inline";
        document.getElementById('nickname').setAttribute('required', true);
    } else {
        document.getElementById('nickname').removeAttribute('required');
        document.getElementById('nick').style.display = "none";
    }
}