








// GSPA scroll Animation
// page 1
gsap.to('.onefimg', {
    y: '100%', 
    scrollTrigger: {
      trigger: '.sec1div2', 
      start: 'top top',    
      end: '+=100%',       
      scrub: true,         
    },
  });
  gsap.to('.onetimg', {
    y: '100%', 
    scrollTrigger: {
      trigger: '.sec1div2', 
      start: 'top top',   
      end: '+=100%',        
      scrub: true,         
    },
  });

//   gsap.from('.ftext', {
//     y: '-10%',      
//     opacity: 0,   
//     scrollTrigger: {
//       trigger: '.sec1div2',  
//       start: 'top bottom',  
//       end: '+=50%',           
//       scrub: true,            
//     },
//   });
  
//   gsap.from('.ftext', {
//     y: '0%',
//     opacity: 1,    
//     scrollTrigger: {
//       trigger: '.sec2div2', 
//       start: 'top bottom',   
//       end: '+=50%',        
//       scrub: true,         
//     },
//   });
  

//   page 2
  
  gsap.from('.twofimg', {
    y: '100%',      
    opacity: 0,    
    scrollTrigger: {
      trigger: '.sec2div2',  
      start: 'top bottom',  
      end: '+=50%',           
      scrub: true,           
    },
  });
  
  gsap.from('.twofimg', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec3div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });
  
  gsap.from('.twosimg', {
    y: '-100%',      
    opacity: 0,   
    scrollTrigger: {
      trigger: '.sec2div2',  
      start: 'top bottom',  
      end: '+=50%',           
      scrub: true,            
    },
  });
  
  gsap.from('.twosimg', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec3div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });
  
  // page 3
  
  gsap.from('.nasa1', {
    y: '100%',      // Start the div 100% below its initial position
    opacity: 0,     // Start with 0 opacity (invisible)
    scrollTrigger: {
      trigger: '.sec3div2',  // The trigger element for the animation
      start: 'top bottom',    // Start the animation when the bottom of the trigger is at the top of the viewport
      end: '+=50%',           // End the animation after scrolling down by 50% of the viewport height
      scrub: true,            // Smoothly animate while scrolling
    },
  });
  
  gsap.from('.nasa1', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec4div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });
  
  gsap.from('.nasa2', {
    y: '-100%',      // Start the div 100% below its initial position
    opacity: 0,     // Start with 0 opacity (invisible)
    scrollTrigger: {
      trigger: '.sec3div2',  // The trigger element for the animation
      start: 'top bottom',    // Start the animation when the bottom of the trigger is at the top of the viewport
      end: '+=50%',           // End the animation after scrolling down by 50% of the viewport height
      scrub: true,            // Smoothly animate while scrolling
    },
  });
  
  gsap.from('.nasa2', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec4div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });
  
  
  //page 4
  
  gsap.from('.pizza_box', {
    y: '100%',      // Start the div 100% below its initial position
    opacity: 0,     // Start with 0 opacity (invisible)
    scrollTrigger: {
      trigger: '.sec4div2',  // The trigger element for the animation
      start: 'top bottom',    // Start the animation when the bottom of the trigger is at the top of the viewport
      end: '+=50%',           // End the animation after scrolling down by 50% of the viewport height
      scrub: true,            // Smoothly animate while scrolling
    },
  });
  
  gsap.from('.pizza_box', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec5div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });

  gsap.from('.dominos-bread', {
    y: '100%',      // Start the div 100% below its initial position
    opacity: 0,     // Start with 0 opacity (invisible)
    scrollTrigger: {
      trigger: '.sec4div2',  // The trigger element for the animation
      start: 'top bottom',    // Start the animation when the bottom of the trigger is at the top of the viewport
      end: '+=50%',           // End the animation after scrolling down by 50% of the viewport height
      scrub: true,            // Smoothly animate while scrolling
    },
  });
  
  gsap.from('.dominos-bread', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec5div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });

  gsap.from('.dominos-screen2', {
    y: '100%',      // Start the div 100% below its initial position
    opacity: 0,     // Start with 0 opacity (invisible)
    scrollTrigger: {
      trigger: '.sec4div2',  // The trigger element for the animation
      start: 'top bottom',    // Start the animation when the bottom of the trigger is at the top of the viewport
      end: '+=50%',           // End the animation after scrolling down by 50% of the viewport height
      scrub: true,            // Smoothly animate while scrolling
    },
  });
  
  gsap.from('.dominos-screen2', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec5div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });
  
  gsap.from('.dominos-screen1', {
    y: '-100%',      // Start the div 100% below its initial position
    opacity: 0,     // Start with 0 opacity (invisible)
    scrollTrigger: {
      trigger: '.sec4div2',  // The trigger element for the animation
      start: 'top bottom',    // Start the animation when the bottom of the trigger is at the top of the viewport
      end: '+=50%',           // End the animation after scrolling down by 50% of the viewport height
      scrub: true,            // Smoothly animate while scrolling
    },
  });
  
  gsap.from('.dominos-screen1', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec5div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });
  
  gsap.from('.dominos-bread1', {
    y: '100%',      // Start the div 100% below its initial position
    opacity: 0,     // Start with 0 opacity (invisible)
    scrollTrigger: {
      trigger: '.sec4div2',  // The trigger element for the animation
      start: 'top bottom',    // Start the animation when the bottom of the trigger is at the top of the viewport
      end: '+=50%',           // End the animation after scrolling down by 50% of the viewport height
      scrub: true,            // Smoothly animate while scrolling
    },
  });
  
  gsap.from('.dominos-bread1', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec5div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });
  
//   page 5

gsap.from('.karavan1', {
    y: '100%',     
    opacity: 0,     
    scrollTrigger: {
      trigger: '.sec5div2',  
      start: 'top bottom',    
      end: '+=50%',           
      scrub: true,            
    },
  });
  
  gsap.from('.karavan1', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec6div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });

  gsap.from('.karavan2', {
    y: '100%',     
    opacity: 0,     
    scrollTrigger: {
      trigger: '.sec5div2',  
      start: 'top bottom',    
      end: '+=50%',           
      scrub: true,            
    },
  });
  
  gsap.from('.karavan2', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec6div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });

  gsap.from('.karavan3', {
    y: '-100%',      // Start the div 100% below its initial position
    opacity: 0,     // Start with 0 opacity (invisible)
    scrollTrigger: {
      trigger: '.sec5div2',  // The trigger element for the animation
      start: 'top bottom',    // Start the animation when the bottom of the trigger is at the top of the viewport
      end: '+=50%',           // End the animation after scrolling down by 50% of the viewport height
      scrub: true,            // Smoothly animate while scrolling
    },
  });
  
  gsap.from('.karavan3', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec6div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });

  gsap.from('.karavan4', {
    y: '-100%',     
    opacity: 0,    
    scrollTrigger: {
      trigger: '.sec5div2',  
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,            
    },
  });
  
  gsap.from('.karavan4', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec6div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });

  gsap.from('.karavan5', {
    y: '-100%',     
    opacity: 0,    
    scrollTrigger: {
      trigger: '.sec5div2',  
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,            
    },
  });
  
  gsap.from('.karavan5', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec6div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });
  
// page6 
gsap.from('.interior2', {
    y: '100%',     
    opacity: 0,     
    scrollTrigger: {
      trigger: '.sec6div2',  
      start: 'top bottom',    
      end: '+=50%',           
      scrub: true,            
    },
  });
  
  gsap.from('.interior2', {
    y: '0%',
    opacity: 1,    
    scrollTrigger: {
      trigger: '.sec7div2', 
      start: 'top bottom',   
      end: '+=50%',        
      scrub: true,         
    },
  });

//   page7

gsap.from('.last1', {
    y: '100%',     
    opacity: 0,     
    scrollTrigger: {
      trigger: '.sec7div2',  
      start: 'top bottom',    
      end: '+=100%',           
      scrub: true,            
    },
  });
  
//   gsap.to('.last1', {
//     y: '0%',
//     opacity: 1,    
//     scrollTrigger: {
//       trigger: '.sec7div2', 
//       start: 'top bottom',   
//       end: '+=50%',        
//       scrub: true,         
//     },
//   });
  
  gsap.registerPlugin(ScrollTrigger);