"use strict";

const getElement = (selector) => document.querySelector(selector)

var i = 0;//start point
var slides = [];
var time = 3000;
slides[0] = "flamingo-folded.jpg";
slides[1] = "philly-teams.jpg";
slides[2] = "bowl-holders.jpg";


const showSlides = () => {
  document.slide.src = slides[i];

  if(i < slides.length - 1){
    i++;
  }
  else{
    i = 0;
  }
  setTimeout(showSlides, time);

}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
});