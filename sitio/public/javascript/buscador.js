window.addEventListener("load", ()=>{
   var mediaquery = window.matchMedia("(min-width: 769px")
    let icono = document.querySelector("#lupaHeader");
    let form = document.querySelector("div.form");
    let menu = document.querySelector("div.menu");
    let cerrar = document.querySelector("#cerrar");
    
 icono.addEventListener("click", () => {
        form.style.display = "block"
        form.style.margin = "0 auto"
        menu.style.display = "none"
        cerrar.style.display = "block"
    })
    cerrar.addEventListener("click", () => {
        form.style.display = "none"
        menu.style.display = "flex"
        cerrar.style.display = "none"
       
    })
   mediaquery.addListener(function(eventomediaquery){
       if(eventomediaquery.matches){
           form.style.display ="block"
       }else{
           form.style.display = "none"
       }
   })
   
   
    
})