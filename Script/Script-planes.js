document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
      });
      function validarFormulario(evento) {
        evento.preventDefault();
        var nombre = document.getElementById('nombre').value;
        if(nombre.length == 0) {
          alert('No has escrito el nombre');
          document.getElementById('nombre').focus()
          return;
        }
        var email = document.getElementById('email').value;
        if(email.length == 0) {
            alert('No has escrito el mail');
            document.getElementById('email').focus()
            return;
          }
          var telefono = document.getElementById('telefono').value;
          if(telefono.length == 0 ) {
            alert('No has escrito el Telefono');
            document.getElementById('telefono').focus()
            return;
          }
          alert("Muchas gracias por enviar el formulario");
          document.formulario.submit();
   }