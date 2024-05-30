let allColors = document.getElementsByClassName("color");
let filters = document.getElementsByClassName("filter");
let noFilter = true;

let redFilter = document.getElementById("checkbox-red");
let redChecked = false;
redFilter.onchange = function () {
    if (filters[0].checked) {
        redChecked = true;
        showColors("red");
    }
    else {
        redChecked = false;
        for (let i = 0; i < filters.length; i++) {
            if (filters[i].checked) {
                noFilter = false;
            }
            else {
                noFilter = true;
            }
        }
        if (noFilter) {
            for (let i = 0; i < allColors.length; i++) {
                allColors[i].style.display = "block";
            }
            return;
        }
        for (let i = 0; i < allColors.length; i++) {
            if (allColors[i].dataset.category === "red") {
                allColors[i].style.display = "none";
            }
        }
    }
}

let greenFilter = document.getElementById("checkbox-green");
let greenChecked = false;
greenFilter.onchange = function () {
    if (filters[1].checked) {
        greenChecked = true;
        showColors("green");
    }
    else {
        greenChecked = false;
        for (let i = 0; i < filters.length; i++) {
            if (filters[i].checked) {
                noFilter = false;
            }
            else {
                noFilter = true;
            }
        }
        if (noFilter) {
            for (let i = 0; i < allColors.length; i++) {
                allColors[i].style.display = "block";
            }
            return;
        }
        for (let i = 0; i < allColors.length; i++) {
            if (allColors[i].dataset.category === "green") {
                allColors[i].style.display = "none";
            }
        }
    }
}

let blueFilter = document.getElementById("checkbox-blue");
let blueChecked = false;
blueFilter.onchange = function () {
    if (filters[2].checked) {
        blueChecked = true;
        showColors("blue");
    }
    else {
        blueChecked = false;
        for (let i = 0; i < filters.length; i++) {
            if (filters[i].checked) {
                noFilter = false;
            }
            else {
                noFilter = true;
            }
        }
        if (noFilter) {
            for (let i = 0; i < allColors.length; i++) {
                allColors[i].style.display = "block";
            }
            return;
        }
        for (let i = 0; i < allColors.length; i++) {
            if (allColors[i].dataset.category === "blue") {
                allColors[i].style.display = "none";
            }
        }
    }
}

function noFilterCheck() {
    for (let i = 0; i < filters.length; i++) {
        if (filters[i].checked) {
            noFilter = false;
        }
        else {
            noFilter = true;
        }
    }
}

function showColors(color){
    for (let i = 0; i < allColors.length; i++) {
        allColors[i].style.display = "none";
        if (redChecked) {
            if (allColors[i].dataset.category === "red") {
                allColors[i].style.display = "block";                    
            }
        }
        if (greenChecked) {
            if (allColors[i].dataset.category === "green") {
                allColors[i].style.display = "block";                    
            }
        }
        if (blueChecked) {
            if (allColors[i].dataset.category === "blue") {
                allColors[i].style.display = "block";                    
            }
        }
        if (allColors[i].dataset.category === color) {
            allColors[i].style.display = "block";
        }
    }
}