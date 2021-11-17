window.addEventListener("load", ()=> {
    let span = document.querySelector("span.contador");
    let carrito = document.querySelector(".carrito");
    let totalP = document.querySelector(".total");
    let productos = document.querySelector("article.productos");
    let tituloP = document.querySelector(".prod-select");
    let final = document.querySelector("div.final");
    let comprar = document.querySelector("input.comprar");
    let cancelar = document.querySelector("input.cancelar");

    const mostrarCantidad = cart  => {
        var cantidad = cart.length;

        span.innerHTML = cantidad
      

        if(cantidad === 0){
            tituloP.innerHTML = "No hay productos agregados al carrito";
            final.style.display = "none";
            comprar.addEventListener("click", (e) => {
                e.preventDefault();
                alert("Debes seleccionar productos para comprar")
            })
        }else{
            final.style.display = "block"
            tituloP.innerHTML = "Productos seleccionados"
            comprar.addEventListener("click", (e)=> {
                e.submit()
            })
        }
    }

    
    const getCarrito = async () => {
        try {
            let response = await fetch("/products/show")
            let result = await response.json()

            mostrarCantidad(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    getCarrito();
  
})