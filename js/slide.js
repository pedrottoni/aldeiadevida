var slideIten = 0;
var m = 1;
var slide = document.getElementsByName("menu"); 
var cor = document.getElementsByName("menu1");

function tempo() {
    setTimeout(start, 10000);
}

function core() {
    for (; m < slide.length; m++) {
        cor[m].style.color = "blue";    
    }
    m = 0;
}

function para(a) {
    core();
    slideIten = a;
    cor[slideIten].style.color = "red";
    clearTimeout(tempo);
  }

function start() {
    slide[slideIten].checked = true;
    core();
    cor[slideIten].style.color = "red";
    if (slideIten < slide.length -1) {
        slideIten++
    }
    else {
        slideIten = 0;
    }
    tempo();
}

core();
start();