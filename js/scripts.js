document.addEventListener("DOMContentLoaded", () => {
    console.log("Todos los elementos están listos");
});
  // Cambiar dinámicamente el año en el copyright
  document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll(".copyright");

    if (copyrightElements.length > 0) {
        copyrightElements.forEach((element) => {
            element.innerHTML = `&copy; ${currentYear} Universo Bellotas. Todos los derechos reservados.`;
        });
        console.log("Año actualizado con éxito");
    } else {
        console.warn("No se encontró ningún elemento con la clase 'copyright'");
    }
});


// Variables globales para slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide"); // Todos los elementos con la clase 'slide'
const totalSlides = slides.length;

// Función para mostrar el slide actual
function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0; // Vuelve al inicio si pasa el total
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Va al último si es negativo
    } else {
        currentSlide = index;
    }

    // Ocultar todas las imágenes
    slides.forEach(slide => (slide.style.display = "none"));
    // Mostrar la imagen actual
    slides[currentSlide].style.display = "block";
}

// Función para mover al siguiente slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Función para mover al slide anterior
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicia el slider automático
function startAutoSlider() {
    setInterval(nextSlide, 4000); // Cambia el slide cada 4 segundos
}

// Inicializa el slider
function initializeSlider() {
    if (totalSlides > 0) {
        showSlide(currentSlide);

        const nextBtn = document.querySelector(".slider-btn.next");
        const prevBtn = document.querySelector(".slider-btn.prev");

        if (nextBtn) nextBtn.addEventListener("click", nextSlide);
        if (prevBtn) prevBtn.addEventListener("click", prevSlide);

        startAutoSlider();
    }
}

// Solo inicializa el slider en index.html
if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/"
) {
    document.addEventListener("DOMContentLoaded", initializeSlider);
}

// Menú desplegable
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const submenuToggles = document.querySelectorAll(".submenu > a");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", menu.classList.contains("active"));
    });
}

submenuToggles.forEach(toggle => {
    toggle.addEventListener("click", event => {
        event.preventDefault();
        toggle.parentNode.classList.toggle("active");
    });
});
// ===== Modal de Contacto =====
document.addEventListener("DOMContentLoaded", () => {
    const contactModal = document.getElementById("contact-modal");
    const openContactModalBtns = [
        document.getElementById("open-contact-modal"),
        document.getElementById("open-contact-modal-footer")
    ];
    const closeContactModalBtn = document.querySelector("#contact-modal .close-modal");

    // Abrir el modal
    openContactModalBtns.forEach((btn) => {
        if (btn) {
            btn.addEventListener("click", (event) => {
                event.preventDefault();
                contactModal.style.display = "block";
            });
        }
    });

    // Cerrar el modal al hacer clic en la cruz
    if (closeContactModalBtn) {
        closeContactModalBtn.addEventListener("click", () => {
            contactModal.style.display = "none";
        });
    }

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener("click", (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
    });
});

// ===== Validación del formulario de contacto =====
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const allFieldsValid = Array.from(contactForm.elements).every((field) => {
                if (field.tagName === "BUTTON" || field.type === "hidden") return true;
                return validateField(field);
            });

            const userAnswer = document.getElementById("anti-robot").value.trim();
            const correctAnswer = document.getElementById("correct-answer").value;

            if (!allFieldsValid) {
                alert("Por favor, completa todos los campos correctamente.");
                return;
            }

            if (userAnswer !== correctAnswer) {
                alert("Respuesta incorrecta. Por favor, responde correctamente a la pregunta anti-robot.");
                return;
            }

            alert("Muchas Gracias. La consulta ha sido enviada correctamente.");
            contactForm.reset();
        });

        generateMathQuestion();
    }

    function validateField(input) {
        const errorSpan = document.querySelector(`#error-${input.id}`);
        const value = input.value.trim();

        if (!value) {
            showError(input, "Este campo es obligatorio");
            return false;
        }

        if (input.type === "email" && !/\S+@\S+\.\S+/.test(value)) {
            showError(input, "Por favor, ingresa un email válido");
            return false;
        }

        if (input.id === "zona-evento" && (value === "" || value === null)) {
            showError(input, "Por favor, selecciona una zona para el evento.");
            return false;
        }

        clearError(input);
        return true;
    }

    function showError(input, message) {
        const errorSpan = document.querySelector(`#error-${input.id}`);
        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.style.display = "block";
        }
        input.style.borderColor = "#c73636";
    }

    function clearError(input) {
        const errorSpan = document.querySelector(`#error-${input.id}`);
        if (errorSpan) {
            errorSpan.textContent = "";
            errorSpan.style.display = "none";
        }
        input.style.borderColor = "";
    }

    function generateMathQuestion() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const question = `Pregunta de Seguridad ¿Cuánto es ${num1} + ${num2}?`;
        const answer = (num1 + num2).toString();

        document.getElementById("anti-robot-label").textContent = question;
        document.getElementById("correct-answer").value = answer;
    }
});


// Animación en "sobre-nosotros.html"
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("sobre-nosotros.html")) {
        const aboutImages = document.querySelectorAll(".about-images img");

        aboutImages.forEach((img, index) => {
            setTimeout(() => {
                img.style.transform = "translateY(0)";
                img.style.opacity = "1";
            }, index * 300);
        });
    }
});

// ===== Carrusel de Imágenes =====
document.addEventListener("DOMContentLoaded", () => {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    let itemWidth = 210; // Ancho por defecto
    let itemsToShow = window.innerWidth < 600 ? 1 : Math.floor(window.innerWidth / itemWidth);
    let currentIndex = 0;

    // Función para actualizar la posición del carrusel
    const updateCarouselPosition = () => {
        let offset = -currentIndex * itemWidth;
        carouselWrapper.style.transform = `translateX(${offset}px)`;
    };

    // Evento para botón "Prev"
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            updateCarouselPosition();
        }
    });

    // Evento para botón "Next"
    nextBtn.addEventListener("click", () => {
        if (currentIndex < carouselItems.length - itemsToShow) {
            currentIndex += 1;
            updateCarouselPosition();
        }
    });

    // Habilitar desplazamiento táctil en dispositivos móviles
    let touchStartX = 0;
    let touchEndX = 0;

    carouselWrapper.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0].clientX;
    });

    carouselWrapper.addEventListener("touchmove", (event) => {
        touchEndX = event.touches[0].clientX;
    });

    carouselWrapper.addEventListener("touchend", () => {
        if (touchStartX - touchEndX > 50) {
            nextBtn.click();
        } else if (touchEndX - touchStartX > 50) {
            prevBtn.click();
        }
    });

    // Ajuste automático en pantallas pequeñas
    const adjustCarouselSize = () => {
        itemWidth = window.innerWidth < 480 ? 260 : 210; // Se ajusta a 260px en móviles
        itemsToShow = window.innerWidth < 480 ? 1 : Math.floor(window.innerWidth / itemWidth);
        updateCarouselPosition();
    };

    window.addEventListener("resize", adjustCarouselSize);
    adjustCarouselSize(); // Llamada inicial para ajustar el tamaño

    // ===== MODAL DE IMÁGENES =====
    const imageModal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector("#image-modal .close-modal");

    // Agregar botones de navegación dentro del modal
    const modalPrevBtn = document.createElement("button");
    const modalNextBtn = document.createElement("button");

    modalPrevBtn.classList.add("modal-btn", "prev");
    modalPrevBtn.innerHTML = "&#8249;"; // Flecha izquierda
    modalNextBtn.classList.add("modal-btn", "next");
    modalNextBtn.innerHTML = "&#8250;"; // Flecha derecha

    imageModal.appendChild(modalPrevBtn);
    imageModal.appendChild(modalNextBtn);

    let modalIndex = 0;

    // Abrir modal con imagen seleccionada
    const openModal = (index) => {
        modalIndex = index;
        modalImg.src = carouselItems[modalIndex].querySelector("img").src;
        imageModal.style.display = "block";
    };

    // Cerrar modal
    const closeModalHandler = () => {
        imageModal.style.display = "none";
    };

    // Navegar dentro del modal
    const navigateModal = (direction) => {
        modalIndex = (modalIndex + direction + carouselItems.length) % carouselItems.length;
        modalImg.src = carouselItems[modalIndex].querySelector("img").src;
    };

    // Asociar eventos a cada imagen del carrusel para abrir el modal
    carouselItems.forEach((item, index) => {
        item.addEventListener("click", () => openModal(index));
    });

    modalPrevBtn.addEventListener("click", () => navigateModal(-1));
    modalNextBtn.addEventListener("click", () => navigateModal(1));
    closeModal.addEventListener("click", closeModalHandler);

    // Cerrar modal al hacer clic fuera de la imagen
    window.addEventListener("click", (event) => {
        if (event.target === imageModal) closeModalHandler();
    });

    // ===== MODAL DE VIDEOS =====
    const videoWrappers = document.querySelectorAll(".video-wrapper iframe");
    const videoModal = document.getElementById("video-modal");
    const videoModalContent = document.querySelector(".video-modal-content");
    const videoCloseModal = document.querySelector("#video-modal .close-modal");

    videoWrappers.forEach((video) => {
        video.addEventListener("click", () => {
            videoModal.style.display = "block";
            videoModalContent.src = video.src;
        });
    });

    videoCloseModal.addEventListener("click", () => {
        videoModal.style.display = "none";
        videoModalContent.src = "";
    });

    window.addEventListener("click", (event) => {
        if (event.target === videoModal) {
            videoModal.style.display = "none";
            videoModalContent.src = "";
        }
    });
});



    document.addEventListener("DOMContentLoaded", () => {
        const highlights = document.querySelectorAll(".highlight");
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("highlight-animate");
                }
            });
        });
    
        highlights.forEach((highlight) => observer.observe(highlight));
    });
// Función para abrir el modal de Family Day
function openFamilyDayModal() {
    const modal = document.getElementById('modal-family-day');
    modal.style.display = 'block';
}

// Función para cerrar el modal de Family Day
function closeFamilyDayModal() {
    const modal = document.getElementById('modal-family-day');
    modal.style.display = 'none';
}

// Cerrar modal si se hace clic fuera de su contenido
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal-family-day');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const trustedCarousel = document.getElementById("trusted-carousel");
    const carouselWrapper = trustedCarousel.querySelector(".carousel-wrapper");
    const carouselItems = trustedCarousel.querySelectorAll(".carousel-item");
    const prevBtn = trustedCarousel.querySelector(".carousel-btn.prev");
    const nextBtn = trustedCarousel.querySelector(".carousel-btn.next");

    let currentIndex = 0;
    const visibleItems = 4; // Número de logos visibles en el carrusel
    const totalItems = carouselItems.length;

    const updateCarousel = () => {
        const offset = currentIndex * -150; // Ajusta el tamaño según el ancho del logo
        carouselWrapper.style.transform = `translateX(${offset}px)`;
    };

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - visibleItems;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < totalItems - visibleItems) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Inicializa el carrusel
    updateCarousel();
});
document.addEventListener("DOMContentLoaded", function () {
    const confirmationModal = document.getElementById("confirmation-modal");

    if (confirmationModal) {
        // Mostrar el modal al cargar la página
        confirmationModal.style.display = "block";

        // Cerrar modal al hacer clic en el botón "Cerrar"
        document.querySelector(".button-close").addEventListener("click", function () {
            confirmationModal.style.display = "none";
            window.location.href = "index.html"; // Redirige a la página principal u otra
        });

        // Cerrar el modal al hacer clic fuera de él
        window.addEventListener("click", function (event) {
            if (event.target === confirmationModal) {
                confirmationModal.style.display = "none";
                window.location.href = "index.html"; // Redirige al cerrar el modal
            }
        });
    }
});
// Detectar clic en el botón flotante de FAQ y abrir el modal
document.getElementById("faq-floating-btn").addEventListener("click", function() {
    const faqModal = document.getElementById("faq-modal");
    if (faqModal) {
        faqModal.style.display = "block"; // Abre el modal
    }
});
