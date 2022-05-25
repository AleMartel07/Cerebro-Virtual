document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Por favor ingresa el Nombre');
      document.getElementById('nombre').focus()
      return;
    }
    var empresa = document.getElementById('empresa').value;
    if(empresa.length == 0) {
      alert('Por favor ingresa la Empresa');
      document.getElementById('empresa').focus()
      return;
    }
    var mail = document.getElementById('mail').value;
    if(mail.length == 0) {
      alert('Por favor ingresa el mail');
      document.getElementById('mail').focus()
      return;
    }
    var zona = document.getElementById('zona').value;
    if(zona.length == 0) {
      alert('Por favor ingresa la Zona Horaria o Pais de Residencia');
      document.getElementById('zona').focus()
      return;
    }
    var bases = document.getElementById('Bases');
    if(!bases.checked) {
      alert('Debe leer y aceptar las Bases y condiciones');
      return;
    }
  alert("Muchas gracias por enviar el formulario!");
   	document.formulario.submit();
}
  
