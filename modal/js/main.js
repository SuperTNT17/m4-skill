const red = document.getElementById("js--red")
const switches = document.getElementsByClassName("product")
red.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--red-modal").style.display = "grid";
}

const closered = document.getElementById("js--red-button");
closered.onclick = function(){
    document.getElementById("js--red-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }
}

const green = document.getElementById("js--green")
green.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--green-modal").style.display = "grid";
}

const closegreen = document.getElementById("js--green-button");
closegreen.onclick = function(){
    document.getElementById("js--green-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }
}

const blue = document.getElementById("js--blue")
blue.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--blue-modal").style.display = "grid";
}

const closeblue = document.getElementById("js--blue-button");
closeblue.onclick = function(){
    document.getElementById("js--blue-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }
}