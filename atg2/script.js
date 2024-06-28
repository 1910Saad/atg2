    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  
    // Animate the transparent ring
    gsap.fromTo("#Transparent_Ring", 
      { strokeDasharray: "0, 1000" }, 
      { 
        strokeDasharray: "1000, 0",
        scrollTrigger: {
          trigger: "#svg-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );
  
    // Animate the opaque ring
    gsap.fromTo("#Opaque_Ring", 
      { strokeDasharray: "0, 1000" }, 
      { 
        strokeDasharray: "10, 0",
        scrollTrigger: {
          trigger: "#svg-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );
  
    // Animate the dots
    gsap.fromTo(".dots-nav", 
      { opacity: 0 }, 
      { 
        opacity: 1,
        scrollTrigger: {
          trigger: "#svg-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );


    