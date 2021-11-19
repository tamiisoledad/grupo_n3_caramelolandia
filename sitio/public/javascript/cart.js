window.addEventListener("load", () => {
    let h2Titulo = document.querySelector("h2.titulo-producto");
    let article = document.querySelector("article.productosSeleccionados");
    let h5Total = document.querySelector("h5.precioTotal");
    let form = document.querySelector("form.formulario");


    const mostrarCantidad = cart => {
        var cantidad = cart.length;

        if(cantidad === 0){
            h2Titulo.innerHTML = "No hay productos seleccionados"
            article.style.display = "none"
            h5Total.style.display = "none"
            form.addEventListener("click", (e) => {
                e.preventDefault();
                alert("No tienes productos seleccionados")
            })
        }else {
            h2Titulo.innerHTML = "Productos seleccionados"
            article.style.display = "flex"
            h5Total.style.display = "flex"
            form.addEventListener("click", (e) => {
                e.submit()
            })
        }
    }

    const getCarrito = async () => {
        try {
            let response = await fetch('/apis/show');
            let result = await response.json()

            mostrarCantidad(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    /* const addItem = async (e, id) => {
        e.preventDefault();
        try {
            let response = await fetch(`/apis/add/hola/${id}`);
            let result = await response.json()
            mostrarCantidad(result.data)
        } catch (error) {
            console.log()
        }
    } */

    getCarrito();
})