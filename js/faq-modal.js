document.addEventListener("DOMContentLoaded", () => {
    const faqContainer = document.querySelector(".faq-container");
    if (faqContainer) {
        const faqItems = faqContainer.querySelectorAll(".faq-item");

        faqItems.forEach((item) => {
            const questionButton = item.querySelector(".faq-question");
            const toggleIcon = item.querySelector(".faq-toggle");

            questionButton.addEventListener("click", () => {
                // Alternar estado activo solo en las preguntas
                const isActive = item.classList.contains("active");
                item.classList.toggle("active", !isActive);
                toggleIcon.textContent = isActive ? "+" : "-";

                // Mostrar u ocultar respuesta
                const answer = item.querySelector(".faq-answer");
                answer.style.display = isActive ? "none" : "block";
            });
        });
    }
});



    // Modal FAQ
    const openFaqModal = document.getElementById("open-faq-modal");
    const closeFaqModal = document.getElementById("close-faq-modal");
    const faqModal = document.getElementById("faq-modal");

    openFaqModal.addEventListener("click", () => {
        faqModal.style.display = "block";
    });

    closeFaqModal.addEventListener("click", () => {
        faqModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === faqModal) {
            faqModal.style.display = "none";
        }
    });
    document.addEventListener("DOMContentLoaded", () => {
        // Detectar el parámetro en la URL
        const params = new URLSearchParams(window.location.search);
        const isFaq = params.get("faq"); // Obtiene el valor del parámetro 'faq'
    
        // Si el parámetro faq está presente y su valor es "true", abre el modal
        if (isFaq === "true") {
            const faqModal = document.getElementById("faq-modal");
            if (faqModal) {
                faqModal.style.display = "block"; // Mostrar el modal
            }
        }
    });
    document.addEventListener("DOMContentLoaded", () => {
    const contactModal = document.getElementById("contact-modal");

    // Selecciona TODOS los elementos que pueden abrir el modal de contacto
    document.body.addEventListener("click", function (event) {
        if (event.target.id === "open-contact-modal") {
            event.preventDefault();
            if (contactModal) {
                contactModal.style.display = "block";
            }
        }
    });

    // Cerrar el modal
    const closeModal = document.querySelector("#contact-modal .close-modal");
    if (closeModal) {
        closeModal.addEventListener("click", () => {
            contactModal.style.display = "none";
        });
    }

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener("click", (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const contactModal = document.getElementById("contact-modal");
    const faqModal = document.getElementById("faq-modal"); // Referencia al modal de preguntas frecuentes

    // Selecciona TODOS los elementos que pueden abrir el modal de contacto
    document.body.addEventListener("click", function (event) {
        if (event.target.id === "open-contact-modal") {
            event.preventDefault();
            if (contactModal) {
                contactModal.style.display = "block";
            }
            if (faqModal) {
                faqModal.style.display = "none"; // Cierra el modal de FAQ al abrir el de contacto
            }
        }
    });

    // Cerrar el modal de contacto
    const closeContactModal = document.querySelector("#contact-modal .close-modal");
    if (closeContactModal) {
        closeContactModal.addEventListener("click", () => {
            contactModal.style.display = "none";
        });
    }

    // Cerrar el modal FAQ
    const closeFaqModal = document.querySelector("#faq-modal .close-modal");
    if (closeFaqModal) {
        closeFaqModal.addEventListener("click", () => {
            faqModal.style.display = "none";
        });
    }

    // Cerrar los modales al hacer clic fuera de ellos
    window.addEventListener("click", (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
        if (event.target === faqModal) {
            faqModal.style.display = "none";
        }
    });
});

