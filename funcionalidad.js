function validar()
{
    //Selección de valores del formulario para validar
    let formulario = document.getElementById('formulario_contacto');

    let valor_nombre = formulario.elements['nombre'].value;
    
    //El nombre no debe ser un número
    if(!isNaN(valor_nombre))
    {
        alert('Solo se aceptan letras en Nombre')
        document.getElementById('nombre').focus();
        event.preventDefault();
        
    }

    //Debe haberse subido un archivo
    let archivo_input = document.getElementById('miArchivo');
    let archivo_subido = miArchivo.files;
/*
    if (archivo_subido.length === 0) {
        alert("Por favor, sube un archivo.");
        event.preventDefault();
    }else{
        //La extensión debe ser .jpg o .png

        let archivo = archivo_subido[0];
        var nombre_archivo = archivo.name;
        var extensiones = ['jpg','png'];
        var extension_del_archivo = nombre_archivo.split('.').pop().toLowerCase();
    
        if (!extensiones.includes(extension_del_archivo)) {
            alert("La extensión del archivo no es correcta. Por favor, elija un archivo .jpg o .png");
            event.preventDefault();
         }
    } 
    */
    
}