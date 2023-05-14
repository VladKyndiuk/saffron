const link = document.querySelectorAll(".link");

AOS.init();


AOS.init({
    
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 
    
  
    
    offset: 120, 
    delay: 0, 
    duration: 800, 
    easing: 'ease', 
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
  
  });






link.forEach(function(elem) {

    elem.addEventListener("click",function(){
        let destination = elem.id;
        let block = document.getElementById("block"+destination);
        let rect = block.getBoundingClientRect();

        window.scroll({
                top: rect.top,
                behavior: 'smooth',
              }); 
        
        

    });
})
