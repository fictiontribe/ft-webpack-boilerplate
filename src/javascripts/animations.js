import gsap from "gsap";
import {GsapReusable} from "./lib/GsapReusable.js";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger); 

window.addEventListener("DOMContentLoaded", (event) => {
  //Add animations
  const newTl = gsap.timeline({});
  //Calling animations from GsapReusable class
  GsapReusable.scrollToElement(document.querySelector(".scroll-to-top"), document.querySelector("#intro"))
  GsapReusable.headingScrolls(newTl);
  GsapReusable.elementFades(newTl);
});
