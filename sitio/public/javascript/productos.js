window.addEventListener("load", () => {
    let nombre = document.querySelector('#nombre');
    let alertNombre = document.getElementsByClassName('alertNombre')[0];
    let informacion = document.querySelector('#informacion');
    let alertInformacion = document.getElementsByClassName('alertInformacion')[0];
    let marca = document.querySelector('#marca');
    let alertMarca = document.getElementsByClassName('alertMarca')[0];
    let variedad = document.querySelector('#variedad');
    let alertVariedad = document.getElementsByClassName('alertVariedad')[0];
    let precio = document.querySelector('#precio');
    let alertPrecio = document.getElementsByClassName('alertPrecio')[0];
    let stock = document.querySelector('#stock');
    let alertStock = document.getElementsByClassName('alertStock')[0];
    let descuento = document.querySelector('#descuento');
    let alertDescuento = document.getElementsByClassName('alertDescuento')[0];
    let form = document.querySelector("#form");
    let estado = 0

    nombre.addEventListener("blur", () => {

        switch (true) {
            case nombre.value.length < 1:
                alertNombre.innerText = "Debes indicar el nombre del producto"
                alertNombre.style.color = "red"

                break;
            default:
                alertNombre.innerText = null
                break;
        }
    })
    informacion.addEventListener("blur", () => {

        switch (true) {
            case informacion.value.length < 1:
                alertInformacion.innerText = "Debes dar informacion sobre el producto"
                alertInformacion.style.color = "red"

                break;
            default:
                alertInformacion.innerText = null
                break;
        }
    });

    marca.addEventListener("blur", () => {

        switch (true) {
            case marca.value.length < 1:
                alertMarca.innerText = "Debes colocar la marca del producto"
                alertMarca.style.color = "red"

                break;
            default:
                alertMarca.innerText = null
                break;
        }
    });

    ;

    variedad.addEventListener("blur", () => {

        switch (true) {
            case variedad.value.length < 1:
                alertVariedad.innerText = "Debes indicar la variedad del producto"
                alertVariedad.style.color = "red"

                break;
            default:
                alertVariedad.innerText = null
                break;
        }
    });

    precio.addEventListener("blur", () => {

        switch (true) {
            case precio.value.length < 1:
                alertPrecio.innerText = "Debes indicar el precio"
                alertPrecio.style.color = "red"

                break;
            default:
                alertPrecio.innerText = null
                break;
        }
    });

    stock.addEventListener("blur", () => {

        switch (true) {
            case stock.value.length < 1:
                alertStock.innerText = "Debes indicar el stock"
                alertStock.style.color = "red"

                break;
            default:
                alertStock.innerText = null
                break;
        }
    });

    descuento.addEventListener("blur", () => {

        switch (true) {
            case descuento.value.length < 1:
                alertDescuento.innerText = "Debes indicar el descuento"
                alertDescuento.style.color = "red"

                break;
            default:
                alertDescuento.innerText = null
                break;
        }
    })

    form.addEventListener("submit", (e) => {
        
        switch (true){
            case nombre.value === "":
                alertNombre.innerHTML = "Debes completar el campo"
                alertNombre.style.color = "red"
                e.preventDefault()
                
               
            case informacion.value === "":
                alertInformacion.innerHTML = "Debes completar el campo"
                alertInformacion.style.color = "red"
                e.preventDefault()
                
                case marca.value === "":
                alertMarca.innerHTML = "Debes completar el campo"
                alertMarca.style.color = "red"
                e.preventDefault()
                
                case variedad.value === "":
                alertVariedad.innerHTML = "Debes completar el campo"
                alertVariedad.style.color = "red"
                e.preventDefault()
                
                case precio.value === "":
                alertPrecio.innerHTML = "Debes completar el campo"
                alertPrecio.style.color = "red"
                e.preventDefault()
                
                case stock.value === "":
                alertStock.innerHTML = "Debes completar el campo"
                alertStock.style.color = "red"
                e.preventDefault()
                
                case descuento.value === "":
                alertDescuento.innerHTML = "Debes completar el campo"
                alertDescuento.style.color = "red"
                e.preventDefault()
                break;
            default:
                alertNombre.innerHTML = null
                alertInformacion.innerHTML = null
                alertMarca.innerHTML = null
                alertVariedad.innerHTML = null
                alertPrecio.innerHTML = null
                alertStock.innerHTML = null
                alertDescuento.innerHTML = null
                form.submit()
                    break;
        }
      /*  if(estado != 0 || email.value == "" || password.value == ""){
        e.preventDefault()
       }else {
           form.submit()
       } */
        
}) 
            
        //if(estado != 0 || nombre.value == "" || informacion.value == "" || marca.value == "" || variedad.value == "" || precio.value == "" || stock.value == "" || descuento.value == ""){
        // e.preventDefault()
       // }else {
           // form.submit()
     //   }
         
   // }) 
     
     
   // console.log(form)




})


