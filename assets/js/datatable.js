$(document).ready(function() {
    $('#tabla').DataTable( {
        "language": {
            "lengthMenu":"Mostrar _MENU_ registros por página.",
            "search" : "Buscar",
             "zeroRecords": "Lo sentimos. No se encontraron registros.",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros aún.",
            "infoFiltered": "(filtrados de un total de _MAX_ registros)",
            "LoadingRecords": "Cargando ...",
            "Processing": "Procesando...",
             "SearchPlaceholder": "Comience a teclear...",
             "paginate": {
     "previous": "Anterior",
     "next": "Siguiente", 
      }
        },
     
  
   "sort": false
  
    } );
} );