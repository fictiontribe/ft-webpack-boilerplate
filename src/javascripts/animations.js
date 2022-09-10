import gsap from "gsap";
import {GsapReusable} from "./lib/GsapReusable.js";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger); 

  //Add animations
  const newTl = gsap.timeline({});
  //Calling animations from GsapReusable class
  GsapReusable.scrollToElement(document.querySelector(".scroll-to-top"), document.querySelector("#intro"))
  GsapReusable.elementFades(newTl);
  GsapReusable.headingScrolls(newTl);

