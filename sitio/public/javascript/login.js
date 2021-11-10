let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
window.addEventListener("load", () => {
    let email = document.querySelector(".email");
    let password = document.querySelector(".password");
    let form = document.querySelector("#form");
    let alertEmail = document.querySelector(".alert-email");
    let alertPassword = document.querySelector(".alert-password")
    

    
        email.addEventListener("blur", () => {
            switch (true) {
                case email.value === "":
                    alertEmail.innerHTML = "Debes completar el campo"
                    alertEmail.style.color = "red"
                   
                    break;
                case !regExEmail.test(email.value):
                    alertEmail.innerText = "Debe ser un email valido"
                    alertEmail.style.color = "red"
                   
                    break;
                default:
                    alertEmail.innerHTML = null
                    
                    break;
            }
        })
        password.addEventListener("blur", () => {
            switch (true) {
                case password.value === "":
                    alertPassword.innerHTML = "Debes completar el campo"
                    alertPassword.style.color = "red"
                    
                    break;
                default:
                    alertPassword.innerHTML = null
                    
                    break;
            }
        })
        form.addEventListener("submit", (e) => {
            switch (true){
                case email.value === "":
                    alertEmail.innerHTML = "Debes completar el campo"
                    alertEmail.style.color = "red"
                    e.preventDefault()
                   
                case password.value === "":
                    alertPassword.innerHTML = "Debes completar el campo"
                    alertPassword.style.color = "red"
                    e.preventDefault()
                    break;
                default:
                    alertPassword.innerHTML = null
                    alertEmail.innerHTML = null
                    form.submit()
                        break;
            }
          /*  if(estado != 0 || email.value == "" || password.value == ""){
            e.preventDefault()
           }else {
               form.submit()
           } */
            
    }) 
        
        
    console.log(form)
})