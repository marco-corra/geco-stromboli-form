document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Assicura che il lightbox sia nascosto al caricamento

    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.getElementById("close-lightbox");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let images = []; // Array con tutte le immagini
    let currentIndex = 0; // Indice dell'immagine attualmente aperta

    // Seleziona tutte le immagini della griglia
    const allImages = document.querySelectorAll(".lightbox-trigger");

    // Popoliamo l'array con i percorsi delle immagini
    allImages.forEach((img, index) => {
        images.push(img.src);

        img.addEventListener("click", function () {
            currentIndex = index; // Salviamo l'indice della foto cliccata
            showLightbox();
        });
    });

    function showLightbox() {
        lightbox.style.display = "flex";
        lightboxImg.src = images[currentIndex];
    }

    // Pulsante Avanti (e icona dentro il pulsante)
    nextButton.addEventListener("click", nextImage);
    nextButton.querySelector("i").addEventListener("click", nextImage);

    function nextImage(e) {
        e.stopPropagation(); // Impedisce la chiusura del lightbox
        currentIndex = (currentIndex + 1) % images.length; // Passa alla prossima immagine
        showLightbox();
    }

    // Pulsante Indietro (e icona dentro il pulsante)
    prevButton.addEventListener("click", prevImage);
    prevButton.querySelector("i").addEventListener("click", prevImage);

    function prevImage(e) {
        e.stopPropagation(); // Impedisce la chiusura del lightbox
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Torna all'immagine precedente
        showLightbox();
    }

    // Chiude la lightbox quando si clicca sulla X
    closeLightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Chiude la lightbox quando si clicca fuori dall'immagine
    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg && e.target !== prevButton && e.target !== nextButton) {
            lightbox.style.display = "none";
        }
    });

    // Navigazione con la tastiera (← e →)
    document.addEventListener("keydown", function (e) {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowRight") {
                nextImage(e);
            }
            if (e.key === "ArrowLeft") {
                prevImage(e);
            }
            if (e.key === "Escape") {
                lightbox.style.display = "none";
            }
        }
    });
});