window.addEventListener("load", () => {
    let h2Titulo = document.querySelector("h2.titulo-producto");
    let article = document.querySelector("article.productosSeleccionados");
    let h5Total = document.querySelector("h5.precioTotal");
    let form = document.querySelector("form.formulario");
    let cancelarCompra = document.querySelector(".cancelarCompra")

    const mostrarCantidad = cart => {
        var cantidad = 0;
        var total = 0;
    
        if(cart){
            cart.forEach(item => {
                cantidad += item.cantidad;
                total += item.subtotal 
            })
        }
    
    
        if(cantidad === 0){
            h2Titulo.innerHTML = "No hay productos seleccionados"
            article.style.display = "none"
            h5Total.style.display = "none"
            form.addEventListener("click", (e) => {
                e.preventDefault();
                alert("No tienes productos seleccionados")
            })
        }else{
            h2Titulo.innerHTML = "Productos seleccionados"
            article.style.display = "flex"
            h5Total.style.display = "flex"
            form.addEventListener("click", (e) => {
                e.submit()
            })
        }
    }
    
    const cargarTabla = carrito => {
        article.innerHTML = null;
        carrito.forEach(producto => {
            let item = `
            <article class="productosSeleccionados" id="productosSeleccionados">
            <h4>${producto.nombre}</h4>
            <img src="/images/productos/${producto.imagen}" alt="" width="20%" />
            <div class="cantidad">
            <a href="#" class="quitar" onclick="removeItem(event, '<%=producto.id%>')"><i class="far fa-minus-square"></i></a>
              <label for="cantidad">Cantidad: ${producto.cantidad}</label>
              <a href="#" class="carrito" onclick="addItem(event, '<%=producto.id%>')"><i class="far fa-plus-square"></i></a>
              <p>Precio: $${producto.precio}</p>
              <p>Subtotal: $${producto.subtotal}</p>
              <i class="far fa-trash-alt"></i>
            </div>
          </article>
                `;
            changuito.innerHTML += item
        });
        return false
    }
    
    
    
    const getCarrito = async () => {
        try {
            let response = await fetch('/apis/show')
            let result = await response.json()
            cargarTabla(result.data)
            mostrarCantidad(result.data)
    
        } catch (error) {
            console.log(error)
        }
    }
    
    const addItem = async (e,id) => {
        e.preventDefault()
    
        try {
            let response = await fetch('/apis/add/' + id)
            let result = await response.json()
            cargarTabla(result.data)
            mostrarCantidad(result.data)
    
        } catch (error) {
            console.log(error)
        }
    }
    
    const removeItem = async (e,id) => {
        e.preventDefault()
    
        try {
            let response = await fetch('/api/cart/remove/' + id)
            let result = await response.json()
            cargarTabla(result.data)
            mostrarCantidad(result.data)
        
        } catch (error) {
            console.log(error)
        }
    }
    
    const emptyCart = async () => {
        try {
            let response = await fetch('/api/cart/empty')
            let result = await response.json()
            changuito.innerHTML = null
            mostrarCantidad(result.data)
        } catch (error) {
            console.log(error)
    
        }
    }
    
    cancelarCompra.addEventListener('click', () => emptyCart())
    
    getCarrito()
})