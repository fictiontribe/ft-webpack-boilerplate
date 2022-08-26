import gsap from "gsap";
import {GsapReusable} from "./lib/GsapReusable.js";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger); 

window.addEventListener("DOMContentLoaded", (event) => {
  //Add animations

  //Calling animations from GsapReusable class
  GsapReusable.scrollToElement(document.querySelector(".scroll-to-top"), document.querySelector("#intro"))
  GsapReusable.elementFades();
  GsapReusable.headingScrolls();

});
