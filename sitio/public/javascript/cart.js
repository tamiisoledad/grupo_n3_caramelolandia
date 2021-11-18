window.addEventListener("load", ()=> {
    let h2 = document.querySelector("h2.titulo-producto");
    let articulo = document.querySelector("div.articulos");
    let form = document.querySelector("form.formulario");
    let agregar = document.querySelector("a.carrito");
    let h4 = document.querySelector("h4.name");

    const mostrarCantidad = cart => {
        var cantidad = cart.length;
        if(cantidad === 0){
            h2.innerHTML = "No hay productos seleccionados";
            articulo.style.display = "none";
            form.addEventListener("click", (e) => {
                e.preventDefault();
                alert("No tienes productos selecionados")
            })
        }else{
            h2.innerHTML = "Productos seleccionados"
            articulo.style.display = "flex";
            form.addEventListener("click", (e) => {
                e.submit();
            })
        }
    }

    const getCarrito = async () => {
        try {
            let response = await fetch("/users/show");
            let result = await response.json();
            mostrarCantidad(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    const addItem = async (e, id) => {
        
        try {
            let response = await fetch("/users/add/" + id);
            let result = await response.json();
            mostrarCantidad(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    agregar.addEventListener("click", (e) =>{
        e.preventDefault()
        addItem()
    })

    getCarrito();
})