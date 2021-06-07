var randomnum = Math.floor((Math.random() * 6) + 1);
var randomimagesource = "/images/dice" + randomnum + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);

var RandomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomimagesource2 = "/images/dice" + RandomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimagesource2);

if (randomnum > RandomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins !!!"
} else if (randomnum < RandomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins !!!"
} else {
    document.querySelector("h1").innerHTML = "ITS A TIE"
}