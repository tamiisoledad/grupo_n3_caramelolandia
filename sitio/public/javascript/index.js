window.addEventListener("load", ()=>{
const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");
const detalle = document.querySelector("div.indexB");

punto.forEach((cadaPunto, i)=>{
    punto[i].addEventListener("click", ()=>{
        let posicion = i;
        let operacion = posicion * -50;
        grande.style.transform = `translateX(${operacion}%)`;
        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove("activo")
        })
        punto[i].classList.add("activo");
    })
})

detalle.addEventListener("click", ()=>{
    
})
})

