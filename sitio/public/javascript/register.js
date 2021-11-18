const $ = id =>document.getElementById(id);
let regExLetter = /^[a-zA-Z ]{2,30}$/;;
let regExEmail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

window.addEventListener("load", () => {
    console.log('register.js success');

    $('name').addEventListener('focus', () => {
        $('name-msg').innerText = "minimo 2 caracteres"
    })
    $('name').addEventListener('blur',() => {
        $('name-msg').innerText = null
        switch (true) {
            case !$('name').value.trim():
                $('name-error').innerText = "El nombre es obligatorio"
                $('name-error').classList.add('alert-danger')
                $('name').classList.add('is-invalid')
                break;

            case $('name').value.trim().length < 2 || $('name').value.trim().length >50 :
                $('name-error').innerText = "Debe tener entre 2 y 50 caracteres"
                $('name-error').classList.add('alert-danger')
                $('name').classList.add('is-invalid')
                break;

            case !regExLetter.test($('name').value.trim()):
                    $('name-error').innerText = "Solo caracteres alfabeticos"
                    $('name-error').classList.add('alert-danger')
                    $('name').classList.add('is-invalid')
                    break;    
        
            default:
                $('name.error').classList.remove('alert-danger')
                $('name').classList.remove('is-invalid')
                $('name').classList.add('is-valid')
                $('name-error').innerText = null
                break;
        }
    })
    $('name').addEventListener('keydown', () => {
                $('name-error').innerText = null
                $('name-error').classList.remove('alert-danger')
                $('name').classList.remove('is-invalid')
    })

    $('email').addEventListener('blur', () =>{
        if(!regExEmail.test($('email').value)){
            $('email-error').innerText = "Tiene que ser un email valido"
            $('email').classList.add('is-invalid')
        }else{
            $('email-error').innerText = null
            $('email').classList.remove('is-invalid')
            $('email').classList.add('is-valid')
        }
    })
    $('password').addEventListener('blur', () => {
        if(!regExPass.test($('password').value)){
            $('pass-error').innerText = "La contraseña debe tener una mayúscula, un número y debe tener entre 8 y 20 caracteres"
            $('password').classList.add('is-invalid')
        }else{
            $('pass-error').innerText = null
            $('password').classList.remove('is-invalid')
            $('password').classList.add('is-valid')
        }
    })
    $('password').addEventListener('focus', () => {
        $('password').classList.remove('is-invalid')
    })

    $('terms').addEventListener('submit', () => {
        $('terms').classList.toggle('is-valid');
        $('terms').classList.remove('is-invalid');
        $('terms-error').innerText = "Debes aceptar los terminos y condiciones"
    })
})

const iconEye = document.querySelector('.icon-pass')

iconEye.addEventListener('click',function(){
    if(this.nextElementSibling.type === "password"){
        this.nextElementSibling.type = "text;"
    }else{
        this.nextElementSibling.type = "password"
    }
})