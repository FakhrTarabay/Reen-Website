window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar2");
var sticky = header.offsetTop;
var logo = document.getElementById("logo");

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