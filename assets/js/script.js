const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function(){
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente...")
    });
    
    $("h3[class$='card-title']").on('dblclick', function() {
        $(this).css({
            "color" : "red"
        });
    });

    // $("h2[class~='card-title']").on('click', function() {
    $(".card-title-collapse").on('click', function() {
        // $("#recetas-relacionadas>div>div>div>div").toggle(1000, function(){
        // Funcion para desaparecer el card por un tiempo
        // $(".card-receta").toggle(1000, function(){
        //     $(this).toggle(1000, function(){});
        // });

        $(".card-text-collapse").toggle();
    });


    // funcion para probar cambiar los textos con js
    // $(window).on('resize', function() {
    //     if(window.innerWidth < 576) {
    //         $("#inicio-title-h1").replaceWith("<h4 id='inicio-title-h4' class='card-title hbold mx-auto py-3 ps-1' style='max-width: 350px;'>PIZZA AL ESTILO CHICAGO CON ESPINACAS Y CHAMPIÑONES</h4>")
    //     } else {
    //         $("#inicio-title-h4").replaceWith("<h1 id='inicio-title-h1' class='card-title hbold py-3 ps-5 ps-xs-5 ps-sm-5 ps-md-1 ps-lg-1' style='max-width: 350px;'>PIZZA AL ESTILO CHICAGO CON ESPINACAS Y CHAMPIÑONES</h1>")
    //     }
    // });
});