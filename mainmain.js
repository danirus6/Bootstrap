document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    
    // Validación para rellenar todos los campos
    if (!nombre || !correo || !password1 || !password2) {
        createAlert("Por favor, complete todos los campos");
        return;
    }
    
    // Validación para el correo
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(correo)) {
        createAlert("El correo electrónico no es válido");
        return;
    }
    
    // Validación para contraseñas
    if (password1 !== password2) {
        createAlert("Las contraseñas no coinciden");
        return;
    }
    
    if (password1.length < 6) {
        createAlert("La contraseña debe tener al menos 6 caracteres");
        return;
    }
    
    const userData = {
        nombre: nombre,
        correo: correo,
        password: password1
    };
    
    localStorage.setItem("profile", JSON.stringify(userData));
    
    createAlert("Usuario creado correctamente. Redirigiendo a la vista Usuarios...", "alert-success");
    
    setTimeout(function() {
        window.location.href = "profiles.html";
    }, 3000);
});

function createAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert');
    alertDiv.innerText = message;
    
    const container = document.querySelector('.container');
    container.appendChild(alertDiv);
    
    setTimeout(function() {
        alertDiv.remove();
    }, 3000);
}

// Agregar un evento al botón "Limpiar localStorage"
    let clearLocalStorageButton = document.getElementById("clearLocalStorage");
    clearLocalStorageButton.addEventListener("click", function () {
        // Limpiar el localStorage
        localStorage.clear();
    });
