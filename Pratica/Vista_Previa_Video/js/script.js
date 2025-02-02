document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".miVideo");

    // Función para reproducir el video cuando pasa el mouse sobre él
    function reproducirVideo() {
        this.play();
    }

    // Función para pausar el video cuando se retira el mouse del mismo
    function pausarVideo() {
        this.pause();
    }

    // Mostrar los videos al cargar el contenido
    videos.forEach(function (video) {
        video.style.display = "block";

        // Evento para reproducir el video al pasar el mouse sobre él
        video.addEventListener("mouseenter", reproducirVideo);

        // Evento para pausar el video al salir el mouse del mismo
        video.addEventListener("mouseleave", pausarVideo);
    });
});