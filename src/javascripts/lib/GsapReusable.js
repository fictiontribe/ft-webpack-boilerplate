import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// Class for common reusable GSAP animations
export class GsapReusable {
  //Adds a subtle vertical animation to all desired headings
  static headingScrolls() {
    gsap.utils.toArray("h1, h2").forEach((heading) => {
      gsap.fromTo(
        heading,
        { y: 12 },
        {
          ease: "slow.out",
          y: 0,
          scrollTrigger: {
            trigger: heading,
            markers: false,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
          duration: 5000,
        }
      );
    }, 150);
  }

  //Adds a subtle fade to all desired elements.
  static elementFades() {
    gsap.utils.toArray("section").forEach((section) => {
      gsap.from(section.querySelectorAll("h2, h3, p, img:not(.logo)"), {
        scrollTrigger: section,
        autoAlpha: 0,
        y: 25,
        duration: 0.75,
        stagger: 0.15,
      });
    });
  }

  // GSAP scroll to a desired element
  // First parameter is element to add listener.
  // Second parameter is element to scroll to.
  static scrollToElement(interactiveElement, scrollToElement) {
    const gsapScroll = (scrollToElement) => {
      gsap.to(window, {
        duration: 1,
        ease: "power3",
        scrollTo: { y: scrollToElement, offsetY: 0 },
      });
    };

    interactiveElement.addEventListener("click", gsapScroll);
  }
}
