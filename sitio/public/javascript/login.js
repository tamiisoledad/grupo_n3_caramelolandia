let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
window.addEventListener("load", () => {
    let email = document.querySelector(".email");
    let password = document.querySelector(".password");
    let form = document.querySelector("#form");
    let alertEmail = document.querySelector(".alert-email");
    let alertPassword = document.querySelector(".alert-password")
    let estado = 0

    
        email.addEventListener("blur", () => {
            switch (true) {
                case email.value === "":
                    alertEmail.innerHTML = "Debes completar el campo"
                    alertEmail.style.color = "red"
                    ++estado
                    break;
                case !regExEmail.test(email.value):
                    alertEmail.innerText = "Debe ser un email valido"
                    alertEmail.style.color = "red"
                    ++estado
                    break;
                default:
                    alertEmail.innerHTML = null
                    estado = 0
                    break;
            }
        })
        password.addEventListener("blur", () => {
            switch (true) {
                case password.value === "":
                    alertPassword.innerHTML = "Debes completar el campo"
                    alertPassword.style.color = "red"
                    ++estado
                    break;
                default:
                    alertPassword.innerHTML = null
                    estado = 0
                    break;
            }
        })
        form.addEventListener("submit", (e) => {
            
           if(estado != 0 || email.value == "" || password.value == ""){
            e.preventDefault()
           }else {
               form.submit()
           }
            
    }) 
        
        
    console.log(form)
})