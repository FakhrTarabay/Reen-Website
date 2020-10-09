window.onscroll = function() {myFunction()};
    
var header = document.getElementById("mainhead");
var l = document.getElementById("logo");
var ll = document.getElementById("u2");
var lll = document.getElementById("searchico");
var sticky = l.offsetTop;
    
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    l.src="img/logosmall.png";
    l.style.marginTop="14px";
    ll.style.marginTop="0px";
    lll.style.marginTop="20px";
  } else {
    ll.style.marginTop="73px";
    l.style.marginTop="77px";
    l.src="img/logo.png";
    lll.style.marginTop="93px"
    header.classList.remove("sticky");
  }
}