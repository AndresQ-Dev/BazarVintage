function validar()
{
    //Debe seleccionarse un motivo
    let el_motivo = document.getElementById('motivo');
    let valor_motivo = el_motivo.value;
    if (valor_motivo === "") {
        alert("Por favor, seleccione un motivo");
        document.getElementById('motivo').focus();
        event.preventDefault();
        return
      }
 
    //Debe escribirse un correo, no puede quedar vacío.
    let formulario = document.getElementById('formulario_contacto');
    
    let valor_email = formulario.elements['email'].value;

    if(valor_email ===""){
        alert("Por favor, escriba un e-mail");
        document.getElementById('email').focus();
        event.preventDefault();
        return
    }

     //Debe cumplir con ciertas cualidades
     let validar_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

     if (!validar_email.test(valor_email)) {
         alert("E-mail incorrecto")
         document.getElementById('email').focus();
         event.preventDefault();
         return
     }

     let valor_nombre = formulario.elements['nombre'].value;
    

    //Nombre no debe estar vacío
    if(valor_nombre ===""){
        alert('Por favor, escribe un nombre')
        document.getElementById('nombre').focus();
        event.preventDefault();
        return 
    }

    //El nombre no debe ser un número
    if(!isNaN(valor_nombre))
    {
        alert('Solo se aceptan letras para el nombre')
        document.getElementById('nombre').focus();
        event.preventDefault();
        return
        
    }

    //El textarea no puede quedar vacío.
    let valor_mensaje = formulario.elements['mensaje'].value;

    if(valor_mensaje === ""){
        alert('Por favor, escriba un mensaje')
        document.getElementById('mensaje').focus();
        event.preventDefault();
        return
    }

    //Debe haberse subido un archivo
    let archivo_input = document.getElementById('miArchivo');
    let archivo_subido = miArchivo.files;

    if (archivo_subido.length === 0) {
        alert("Por favor, sube un archivo.");
        document.getElementById('miArchivo').focus();
        event.preventDefault();
        return
    }else{
        //La extensión debe ser .jpg, .jpeg o .png solamente
        let archivo = archivo_subido[0];
        var nombre_archivo = archivo.name;
        var extensiones = ['jpg','png','jpeg'];
        var extension_del_archivo = nombre_archivo.split('.').pop().toLowerCase();
    
        if (!extensiones.includes(extension_del_archivo)) {
            alert("La extensión del archivo no es correcta. Por favor, elija un archivo .jpg o .png");
            document.getElementById('miArchivo').focus();
            event.preventDefault();
            return
         }
    } 

    //Finalmente, si todo se cumple...
    alert("¡Gracias por contactarnos!")
    //Limpio el formulario
    formulario.reset();
    //Prevengo la apertura de otra página
    event.preventDefault();
    //Volver al top
    window.scrollTo({top:0,behavior:'smooth'});
}