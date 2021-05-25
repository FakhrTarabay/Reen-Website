window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar2");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    logo.src = "img/logosmall.png";
    logo.style.marginTop="14px";
    logo.style.marginLeft="0px";

  } else {
    header.classList.remove("sticky");
    logo.style.marginTop="0px";
    logo.style.marginLeft="0px ";
    logo.src = "img/logo.png";
  }
} 
var hover = document.getElementById("input");

hover.addEventListener('mouseover', changeDefOver);
hover.addEventListener('mouseout', changeDefOut);

function changeDefOver() {
  hover.placeholder = "ex:info@fuviz.com";
}

function changeDefOut() {
  hover.placeholder = "Enter your email address";
}
var pagi = document.getElementById("pagination");
var hover2 = document.getElementById("cbutton1");
hover2.addEventListener('mouseover', changedis1);
hover2.addEventListener('mouseout', changedis2);
function changedis1() {
  pagi.style.display = "block";
}
function changedis2() {
  pagi.style.display = "none";
}
var hover3 = document.getElementById("cbutton2");
hover3.addEventListener('mouseover', changedis3);
hover3.addEventListener('mouseout', changedis4);
function changedis3() {
  pagi.style.display = "block";
}
function changedis4() {
  pagi.style.display = "none";
}


var urls = ["img/bg2.png","img/bg3.png", "img/bg.png", "img/bg4.png","img/bg6.png"];
var ids = ["in2","in3","in1","in4","in5"];
var dots = ["dot1","dot2","dot3","dot4","dot5"];
var index = 2;
function carouselRight(){
  var carousel = document.getElementById("carousel");
  if(index!=urls.length-1){
    document.getElementById(""+ids[index]).style.display = "none";
    document.getElementById(""+dots[index]).style.display = "none";
    carousel.style.backgroundImage = "url(" + urls[index+1] + ")";
    index=index+1;
    document.getElementById(""+dots[index]).style.display = "flex";
    document.getElementById(""+ids[index]).style.display = "flex";
  }
 }
function carouselLeft(){
  var carousel = document.getElementById("carousel");
  if(index!=0){
    document.getElementById(""+ids[index]).style.display = "none";
    document.getElementById(""+dots[index]).style.display = "none";
    carousel.style.backgroundImage = "url(" + urls[index-1] + ")";
    index=index-1;
    document.getElementById(""+dots[index]).style.display = "flex";
    document.getElementById(""+ids[index]).style.display = "flex";
  }
}

var fig = document.getElementById("fig");
var fig1 = document.getElementById("fig1");
fig.addEventListener('mouseover', changeColor);
fig.addEventListener('mouseout', changenormal);
function changeColor() {
  fig1.style.color = "#00bc9c";
}
function changenormal() {
  fig1.style.color = "#506a85";
}

var fig2 = document.getElementById("fig2");
var fig3 = document.getElementById("fig3");
fig2.addEventListener('mouseover', changeColor2);
fig2.addEventListener('mouseout', changenormal2);
function changeColor2() {
  fig3.style.color = "#00bc9c";
}
function changenormal2() {
  fig3.style.color = "#506a85";
}

var fig4 = document.getElementById("megamenu");
var fig5 = document.getElementById("megamenu2");
fig4.addEventListener('mouseover', appear);
fig4.addEventListener('mouseout', disappear);
function appear() {
  fig5.style.display = "block";
}
function disappear() {
  fig5.style.display = "none";
}

function closeSide(){
  document.getElementById("sideBar").style.width = "0px";
}

function openSide(){
  document.getElementById("sideBar").style.width = "75%";
}