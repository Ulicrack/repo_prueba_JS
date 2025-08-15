let lista_usuario = []
const form = document.getElementById("formulario")
form.addEventListener("submit", (e) =>{
    
    e.preventDefault()

    const usuario = document.getElementById("usuario").value

    const edad = document.getElementById("edad").value

    const email = document.getElementById("correo").value

    const contraseña = document.getElementById("contraseña").value

    // Validación de campos vacios
    if(usuario === ""){
        document.getElementById("error_usuario").innerText = 'El nombre de usuario es requerido'
    }
    else if(edad === ""){
        document.getElementById("error_edad").innerText = 'La edad es requerida'
    }
    else if(email === ""){
        document.getElementById("error_correo").innerText = 'El email es requerido'
    }
    else if(contraseña === ""){
        document.getElementById("error_contraseña").innerText = 'La contraseña es requerida'
    }

    // Validación de edad => 18
    else if(edad < 18){
        document.getElementById("error_edad").innerText = 'No podes ser menor de 18 años'
    }

    // Validación de que el correo contenga '@'
    else if(!email.includes('@')){
        document.getElementById("error_correo").innerText = 'El email debe contener: @'
    }

    // Validación de longitud de contraseña => 6 caracteres
    else if(contraseña.length < 6){
        document.getElementById("error_contraseña").innerText = 'La contraseña debe contener al menos 6 caracteres'
    }

    else {
        document.getElementById("error_usuario").innerText = ''
        document.getElementById("error_edad").innerText = ''
        document.getElementById("error_correo").innerText = ''
        document.getElementById("error_contraseña").innerText = ''

        // Limpiar los campos
        document.getElementById("usuario").value = ''
        document.getElementById("edad").value = ''
        document.getElementById("correo").value = ''
        document.getElementById("contraseña").value = ''
        
        document.getElementById("mensaje").innerText = `🎉 ¡Registro exitoso! Bienvenido, ${usuario}`

        // Hice la lista, pero no agrega los datos de la carga de los usuarios uno abajo del otro, sino que los pisa :|
        const asteriscos = '*'.repeat(contraseña.length)

        document.getElementById("lista").innerText = `- Lista -\nNombre: ${usuario} | Edad: ${edad} | Email: ${email} | Contraseña: ${asteriscos}`

        console.log(usuario, edad, email, contraseña)
    }
})