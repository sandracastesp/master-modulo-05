const { z } = window.Zod;

const formLogin = z.object({
    name: z.string().min(1, 'El nombre no puede estar vacio.'),
    email: z.string().email('El correo electrónico no es válido.'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres.')
});

 document.getElementById("registrationForm").addEventListener("submit", (event) => {
      event.preventDefault();

const formData = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  password: document.getElementById("password").value
};

try {
    formLogin.parse(formData);
    alert("El formulario se envió correctamente.");
} catch (error) {
    alert(`Error: ${error.errors.map(e => e.message).join(', ')}`);
  }
});