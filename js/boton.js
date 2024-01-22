document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('floating-button').addEventListener('click', function() {
        // Obtén la posición del encabezado
        console.log("hola")
        const headerPosition = document.getElementById('header').offsetTop;
    
        // Desplázate hacia el encabezado con una transición suave
        window.scrollTo({
            top: headerPosition,
            behavior: 'smooth'
        });
    });
    
});

