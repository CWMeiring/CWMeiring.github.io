var hotspot = "100";
var a = "";
var b = "";
var c = "";
var d = "";
var e = "";
var f = "";
var g = "";

function go(){

var randomone = Math.floor((Math.random()*52)+1);

document.getElementsByTagName('p')[0].innerHTML = randomone;

var randomtwo = Math.floor((Math.random()*52)+1);

document.getElementsByTagName('p')[1].innerHTML = randomtwo;

var randomthree = Math.floor((Math.random()*52)+1);

document.getElementsByTagName('p')[2].innerHTML = randomthree;

var randomfour = Math.floor((Math.random()*52)+1);

document.getElementsByTagName('p')[3].innerHTML = randomfour;

var randomfive = Math.floor((Math.random()*52)+1);

document.getElementsByTagName('p')[4].innerHTML = randomfive;

var randomsix = Math.floor((Math.random()*52)+1);

document.getElementsByTagName('p')[5].innerHTML = randomsix;

var seven = randomone + randomtwo + randomthree + randomfour + randomfive + randomsix;
      
document.getElementsByTagName('p')[6].innerHTML = seven;

    if(seven != hotspot ){
        go();
    }
};

function spot(){
     hotspot = prompt("Enter Your Desired Hotspot Total");
};


