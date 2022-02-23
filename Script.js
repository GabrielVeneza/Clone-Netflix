'use strict';

const elemento = document.getElementById("menu");


var onTop = false;

// JQuery
$(window).scroll(function() {
  let scrollPosition = $(window).scrollTop();
  
  if(scrollPosition < 10 && !onTop) {
    onTop = true;
    elemento.classList.add("onTop");
  }
  
  if(scrollPosition > 10 && onTop) {
    onTop = false;
    elemento.classList.remove("onTop")
  }
});