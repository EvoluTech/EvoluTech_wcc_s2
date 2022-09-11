window.addEventListener("pageshow", (event) => {
    setTimeout(() => {
        document.querySelector(".backload").style.display="none";
    }, 1500);
      
    
   
console.log("DOM entièrement chargé et analysé");
});
