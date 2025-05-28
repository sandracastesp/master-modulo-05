document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
      const ciudad = document.getElementById('ciudad').value;

      // Validaciones básicas
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      if (nombre.length < 5) {
        alert('El nombre debe tener al menos 5 caracteres.');
        return;
      }

      const telefonoValido = /^[0-9]{8,10}$/.test(telefono);
    if (!telefonoValido) {
      alert("Introduzca un número de 8 a 10 dígitos.");
      return;
    }

     
    if (archivo) {
        const formatosPermitidos = ['image/jpeg', 'image/png','application/pdf'];
        if (!formatosPermitidos.includes(archivo.type)) {
          alert('Formato de archivo no válido. Solo se aceptan PDF, JPG o PNG.');
          return;
        }
      }
      
      // Si todo está bien
      alert('Registro exitoso. ¡Gracias por registrarte!');
    });


    