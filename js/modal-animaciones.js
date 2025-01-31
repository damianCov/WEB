// ===== Modal para Animaciones 3 a 5 años =====
document.addEventListener("DOMContentLoaded", () => {
    const animacionesModal = document.getElementById("animaciones3a5-modal");
    const openAnimacionesModal = document.querySelector(".open-animaciones3a5-modal");
    const closeAnimacionesModal = document.getElementById("close-animaciones3a5-modal");

    // Verificar si los elementos existen
    if (!animacionesModal || !openAnimacionesModal || !closeAnimacionesModal) {
        console.error("Modal o botones no encontrados para Animaciones 3 a 5 años");
        return;
    }

    // Abrir el modal
    openAnimacionesModal.addEventListener("click", (event) => {
        event.preventDefault();
        animacionesModal.style.display = "block";
    });

    // Cerrar el modal
    closeAnimacionesModal.addEventListener("click", () => {
        animacionesModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === animacionesModal) {
            animacionesModal.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnails = document.querySelectorAll(".thumbnail-gallery img");
    const featuredImage = document.getElementById("featured-image");

    // Verificar si los elementos de las imágenes existen
    if (!thumbnails || !featuredImage) {
        console.error("Imágenes de galería no encontradas");
        return;
    }

    // Agregar eventos a las miniaturas
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImage.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de animaciones
    const openContactFromAnimaciones = document.getElementById("open-contact-modal-from-animaciones");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromAnimaciones && contactModal) {
        openContactFromAnimaciones.addEventListener("click", (event) => {
            event.preventDefault();
            animacionesModal.style.display = "none"; // Cerrar el modal de animaciones
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});

// ===== Modal de Contacto =====
document.addEventListener("DOMContentLoaded", () => {
    const contactModal = document.getElementById("contact-modal");
    const openContactModalBtns = [
        document.getElementById("open-contact-modal"),
        document.getElementById("open-contact-modal-footer"),
        document.getElementById("open-contact-modal-from-animaciones") // Botón desde el modal de animaciones
    ];
    const closeContactModalBtn = document.querySelector("#contact-modal .close-modal");

    // Verificar si los elementos del modal de contacto existen
    if (!contactModal || !closeContactModalBtn) {
        console.error("Modal de contacto o botón de cierre no encontrado");
        return;
    }

    // Abrir el modal de contacto
    openContactModalBtns.forEach((btn) => {
        if (btn) {
            btn.addEventListener("click", (event) => {
                event.preventDefault();
                contactModal.style.display = "block";
            });
        }
    });

    // Cerrar el modal al hacer clic en la cruz
    closeContactModalBtn.addEventListener("click", () => {
        contactModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener("click", (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
    });
});
// ===== Modal para Animaciones 5 a 7 años =====
document.addEventListener("DOMContentLoaded", () => {
    const animacionesModal5a7 = document.getElementById("animaciones5a7-modal");
    const openAnimacionesModal5a7 = document.querySelector(".open-animaciones5a7-modal");
    const closeAnimacionesModal5a7 = document.getElementById("close-animaciones5a7-modal");

    // Verificar si los elementos existen
    if (!animacionesModal5a7 || !openAnimacionesModal5a7 || !closeAnimacionesModal5a7) {
        console.error("Modal o botones no encontrados para Animaciones 5 a 7 años");
        return;
    }

    // Abrir el modal
    openAnimacionesModal5a7.addEventListener("click", (event) => {
        event.preventDefault();
        animacionesModal5a7.style.display = "block";
    });

    // Cerrar el modal
    closeAnimacionesModal5a7.addEventListener("click", () => {
        animacionesModal5a7.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === animacionesModal5a7) {
            animacionesModal5a7.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnails5a7 = document.querySelectorAll("#animaciones5a7-modal .thumbnail-gallery img");
    const featuredImage5a7 = document.getElementById("featured-image-5a7");

    // Verificar si los elementos de las imágenes existen
    if (!thumbnails5a7 || !featuredImage5a7) {
        console.error("Imágenes de galería no encontradas en Animaciones 5 a 7 años");
        return;
    }

    // Agregar eventos a las miniaturas
    thumbnails5a7.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImage5a7.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de animaciones
    const openContactFromAnimaciones5a7 = document.getElementById("open-contact-modal-from-animaciones-5a7");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromAnimaciones5a7 && contactModal) {
        openContactFromAnimaciones5a7.addEventListener("click", (event) => {
            event.preventDefault();
            animacionesModal5a7.style.display = "none"; // Cerrar el modal de animaciones
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
// ===== Modal para Animaciones 7 a 13 años =====
document.addEventListener("DOMContentLoaded", () => {
    const animacionesModal7a13 = document.getElementById("animaciones7a13-modal");
    const openAnimacionesModal7a13 = document.querySelector(".open-animaciones7a13-modal");
    const closeAnimacionesModal7a13 = document.getElementById("close-animaciones7a13-modal");

    // Verificar si los elementos existen
    if (!animacionesModal7a13 || !openAnimacionesModal7a13 || !closeAnimacionesModal7a13) {
        console.error("Modal o botones no encontrados para Animaciones 7 a 13 años");
        return;
    }

    // Abrir el modal
    openAnimacionesModal7a13.addEventListener("click", (event) => {
        event.preventDefault();
        animacionesModal7a13.style.display = "block";
    });

    // Cerrar el modal
    closeAnimacionesModal7a13.addEventListener("click", () => {
        animacionesModal7a13.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === animacionesModal7a13) {
            animacionesModal7a13.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnails7a13 = document.querySelectorAll("#animaciones7a13-modal .thumbnail-gallery img");
    const featuredImage7a13 = document.getElementById("featured-image-7a13");

    // Verificar si los elementos de las imágenes existen
    if (!thumbnails7a13 || !featuredImage7a13) {
        console.error("Imágenes de galería no encontradas en Animaciones 7 a 13 años");
        return;
    }

    // Agregar eventos a las miniaturas
    thumbnails7a13.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImage7a13.src = newSrc; // Cambia la imagen grande
        });
    });

    // ===== Validación del Formulario de Contacto (desde modales) =====
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const allFieldsValid = Array.from(contactForm.elements).every((field) => {
                if (field.tagName === "BUTTON" || field.type === "hidden") return true;
                return validateField(field);
            });

            if (!allFieldsValid) {
                alert("Por favor, completa todos los campos correctamente.");
                return;
            }

            const userAnswer = document.getElementById("anti-robot").value.trim();
            const correctAnswer = document.getElementById("correct-answer").value;

            if (userAnswer !== correctAnswer) {
                alert("Respuesta incorrecta. Por favor, responde correctamente a la pregunta anti-robot.");
                return;
            }

            alert("Muchas Gracias. La consulta ha sido enviada correctamente.");
            contactForm.reset();
        });
    }

    function validateField(input) {
        const errorSpan = document.querySelector(`#error-${input.id}`);
        const value = input.value.trim();

        if (!value) {
            showError(input, "Este campo es obligatorio");
            return false;
        }

        if (input.id === "zona-evento" && input.value === "") {
            showError(input, "Por favor, selecciona una opción.");
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
});

});
// ===== Modal para Animaciones 1 a 3 años =====
document.addEventListener("DOMContentLoaded", () => {
    const animacionesModal1a3 = document.getElementById("animaciones1a3-modal");
    const openAnimacionesModal1a3 = document.querySelector(".open-animaciones1a3-modal");
    const closeAnimacionesModal1a3 = document.getElementById("close-animaciones1a3-modal");

    // Verificar si los elementos existen
    if (!animacionesModal1a3 || !openAnimacionesModal1a3 || !closeAnimacionesModal1a3) {
        console.error("Modal o botones no encontrados para Animaciones 1 a 3 años");
        return;
    }

    // Abrir el modal
    openAnimacionesModal1a3.addEventListener("click", (event) => {
        event.preventDefault();
        animacionesModal1a3.style.display = "block";
    });

    // Cerrar el modal
    closeAnimacionesModal1a3.addEventListener("click", () => {
        animacionesModal1a3.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === animacionesModal1a3) {
            animacionesModal1a3.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnails1a3 = document.querySelectorAll("#animaciones1a3-modal .thumbnail-gallery img");
    const featuredImage1a3 = document.getElementById("featured-image-1a3");

    // Verificar si los elementos de las imágenes existen
    if (!thumbnails1a3 || !featuredImage1a3) {
        console.error("Imágenes de galería no encontradas en Animaciones 1 a 3 años");
        return;
    }

    // Agregar eventos a las miniaturas
    thumbnails1a3.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImage1a3.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de animaciones
    const openContactFromAnimaciones1a3 = document.getElementById("open-contact-modal-from-animaciones-1a3");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromAnimaciones1a3 && contactModal) {
        openContactFromAnimaciones1a3.addEventListener("click", (event) => {
            event.preventDefault();
            animacionesModal1a3.style.display = "none"; // Cerrar el modal de animaciones
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
// ===== Modal para Taller de Reciclado =====
document.addEventListener("DOMContentLoaded", () => {
    const recicladoModal = document.getElementById("taller-reciclado-modal");
    const openRecicladoModal = document.querySelector(".open-taller-reciclado-modal");
    const closeRecicladoModal = document.getElementById("close-taller-reciclado-modal");

    // Verificar si los elementos existen
    if (!recicladoModal || !openRecicladoModal || !closeRecicladoModal) {
        console.error("Modal o botones no encontrados para Taller de Reciclado");
        return;
    }

    // Abrir el modal
    openRecicladoModal.addEventListener("click", (event) => {
        event.preventDefault();
        recicladoModal.style.display = "block";
    });

    // Cerrar el modal
    closeRecicladoModal.addEventListener("click", () => {
        recicladoModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === recicladoModal) {
            recicladoModal.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnailsReciclado = document.querySelectorAll("#taller-reciclado-modal .thumbnail-gallery img");
    const featuredImageReciclado = document.getElementById("featured-image-reciclado");

    // Verificar si los elementos de las imágenes existen
    if (!thumbnailsReciclado || !featuredImageReciclado) {
        console.error("Imágenes de galería no encontradas en Taller de Reciclado");
        return;
    }

    // Agregar eventos a las miniaturas
    thumbnailsReciclado.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImageReciclado.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de reciclado
    const openContactFromReciclado = document.getElementById("open-contact-modal-from-reciclado");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromReciclado && contactModal) {
        openContactFromReciclado.addEventListener("click", (event) => {
            event.preventDefault();
            recicladoModal.style.display = "none"; // Cerrar el modal de reciclado
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
// ===== Modal para Taller de Huerta =====
document.addEventListener("DOMContentLoaded", () => {
    const huertaModal = document.getElementById("taller-huerta-modal");
    const openHuertaModal = document.querySelector(".open-taller-huerta-modal");
    const closeHuertaModal = document.getElementById("close-taller-huerta-modal");

    // Verificar si los elementos existen
    if (!huertaModal || !openHuertaModal || !closeHuertaModal) {
        console.error("Modal o botones no encontrados para Taller de Huerta");
        return;
    }

    // Abrir el modal
    openHuertaModal.addEventListener("click", (event) => {
        event.preventDefault();
        huertaModal.style.display = "block";
    });

    // Cerrar el modal
    closeHuertaModal.addEventListener("click", () => {
        huertaModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === huertaModal) {
            huertaModal.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnailsHuerta = document.querySelectorAll("#taller-huerta-modal .thumbnail-gallery img");
    const featuredImageHuerta = document.getElementById("featured-image-huerta");

    // Verificar si los elementos de las imágenes existen
    if (!thumbnailsHuerta || !featuredImageHuerta) {
        console.error("Imágenes de galería no encontradas en Taller de Huerta");
        return;
    }

    // Agregar eventos a las miniaturas
    thumbnailsHuerta.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImageHuerta.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de huerta
    const openContactFromHuerta = document.getElementById("open-contact-modal-from-huerta");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromHuerta && contactModal) {
        openContactFromHuerta.addEventListener("click", (event) => {
            event.preventDefault();
            huertaModal.style.display = "none"; // Cerrar el modal de huerta
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
// ===== Modal para Taller de Arte y Naturaleza =====
document.addEventListener("DOMContentLoaded", () => {
    const arteNaturalezaModal = document.getElementById("taller-arte-naturaleza-modal");
    const openArteNaturalezaModal = document.querySelector(".open-taller-arte-naturaleza-modal");
    const closeArteNaturalezaModal = document.getElementById("close-taller-arte-naturaleza-modal");

    // Verificar si los elementos existen
    if (!arteNaturalezaModal || !openArteNaturalezaModal || !closeArteNaturalezaModal) {
        console.error("Modal o botones no encontrados para Taller de Arte y Naturaleza");
        return;
    }

    // Abrir el modal
    openArteNaturalezaModal.addEventListener("click", (event) => {
        event.preventDefault();
        arteNaturalezaModal.style.display = "block";
    });

    // Cerrar el modal
    closeArteNaturalezaModal.addEventListener("click", () => {
        arteNaturalezaModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === arteNaturalezaModal) {
            arteNaturalezaModal.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnailsArteNaturaleza = document.querySelectorAll("#taller-arte-naturaleza-modal .thumbnail-gallery img");
    const featuredImageArteNaturaleza = document.getElementById("featured-image-arte-naturaleza");

    // Verificar si los elementos de las imágenes existen
    if (!thumbnailsArteNaturaleza || !featuredImageArteNaturaleza) {
        console.error("Imágenes de galería no encontradas en Taller de Arte y Naturaleza");
        return;
    }

    // Agregar eventos a las miniaturas
    thumbnailsArteNaturaleza.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImageArteNaturaleza.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de arte y naturaleza
    const openContactFromArteNaturaleza = document.getElementById("open-contact-modal-from-arte-naturaleza");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromArteNaturaleza && contactModal) {
        openContactFromArteNaturaleza.addEventListener("click", (event) => {
            event.preventDefault();
            arteNaturalezaModal.style.display = "none"; // Cerrar el modal de arte y naturaleza
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
// ===== Modal para Taller de Burbujas =====
document.addEventListener("DOMContentLoaded", () => {
    const burbujasModal = document.getElementById("taller-burbujas-modal");
    const openBurbujasModal = document.querySelector(".open-taller-burbujas-modal");
    const closeBurbujasModal = document.getElementById("close-taller-burbujas-modal");

    // Verificar si los elementos existen
    if (!burbujasModal || !openBurbujasModal || !closeBurbujasModal) {
        console.error("Modal o botones no encontrados para Taller de Burbujas");
        return;
    }

    // Abrir el modal
    openBurbujasModal.addEventListener("click", (event) => {
        event.preventDefault();
        burbujasModal.style.display = "block";
    });

    // Cerrar el modal
    closeBurbujasModal.addEventListener("click", () => {
        burbujasModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === burbujasModal) {
            burbujasModal.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnailsBurbujas = document.querySelectorAll("#taller-burbujas-modal .thumbnail-gallery img");
    const featuredImageBurbujas = document.getElementById("featured-image-burbujas");

    // Verificar si los elementos de las imágenes existen
    if (!thumbnailsBurbujas || !featuredImageBurbujas) {
        console.error("Imágenes de galería no encontradas en Taller de Burbujas");
        return;
    }

    // Agregar eventos a las miniaturas
    thumbnailsBurbujas.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImageBurbujas.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de burbujas
    const openContactFromBurbujas = document.getElementById("open-contact-modal-from-burbujas");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromBurbujas && contactModal) {
        openContactFromBurbujas.addEventListener("click", (event) => {
            event.preventDefault();
            burbujasModal.style.display = "none"; // Cerrar el modal de burbujas
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
// ===== Modal para EcoPayasadas =====
document.addEventListener("DOMContentLoaded", () => {
    const ecopayasadasModal = document.getElementById("ecopayasadas-modal");
    const openEcopayasadasModal = document.querySelector(".open-ecopayasadas-modal");
    const closeEcopayasadasModal = document.getElementById("close-ecopayasadas-modal");

    // Verificar si los elementos existen
    if (!ecopayasadasModal || !openEcopayasadasModal || !closeEcopayasadasModal) {
        console.error("Modal o botones no encontrados para EcoPayasadas");
        return;
    }

    // Abrir el modal
    openEcopayasadasModal.addEventListener("click", (event) => {
        event.preventDefault();
        ecopayasadasModal.style.display = "block";
    });

    // Cerrar el modal
    closeEcopayasadasModal.addEventListener("click", () => {
        ecopayasadasModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === ecopayasadasModal) {
            ecopayasadasModal.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnailsEcopayasadas = document.querySelectorAll("#ecopayasadas-modal .thumbnail-gallery img");
    const featuredImageEcopayasadas = document.getElementById("featured-image-ecopayasadas");

    // Verificar si los elementos de las imágenes existen
    if (!thumbnailsEcopayasadas || !featuredImageEcopayasadas) {
        console.error("Imágenes de galería no encontradas en EcoPayasadas");
        return;
    }

    // Agregar eventos a las miniaturas
    thumbnailsEcopayasadas.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImageEcopayasadas.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de EcoPayasadas
    const openContactFromEcopayasadas = document.getElementById("open-contact-modal-from-ecopayasadas");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromEcopayasadas && contactModal) {
        openContactFromEcopayasadas.addEventListener("click", (event) => {
            event.preventDefault();
            ecopayasadasModal.style.display = "none"; // Cerrar el modal de EcoPayasadas
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
// ===== Modal para Leyendas de Pacha =====
document.addEventListener("DOMContentLoaded", () => {
    const leyendasPachaModal = document.getElementById("leyendas-pacha-modal");
    const openLeyendasPachaModal = document.querySelector(".open-leyendas-pacha-modal");
    const closeLeyendasPachaModal = document.getElementById("close-leyendas-pacha-modal");

    // Verificar si los elementos existen
    if (!leyendasPachaModal || !openLeyendasPachaModal || !closeLeyendasPachaModal) {
        console.error("Modal o botones no encontrados para Leyendas de Pacha");
        return;
    }

    // Abrir el modal
    openLeyendasPachaModal.addEventListener("click", (event) => {
        event.preventDefault();
        leyendasPachaModal.style.display = "block";
    });

    // Cerrar el modal
    closeLeyendasPachaModal.addEventListener("click", () => {
        leyendasPachaModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === leyendasPachaModal) {
            leyendasPachaModal.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnailsLeyendasPacha = document.querySelectorAll("#leyendas-pacha-modal .thumbnail-gallery img");
    const featuredImageLeyendasPacha = document.getElementById("featured-image-leyendas-pacha");

    // Verificar si los elementos de las imágenes existen
    if (!thumbnailsLeyendasPacha || !featuredImageLeyendasPacha) {
        console.error("Imágenes de galería no encontradas en Leyendas de Pacha");
        return;
    }

    // Agregar eventos a las miniaturas
    thumbnailsLeyendasPacha.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImageLeyendasPacha.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de Leyendas de Pacha
    const openContactFromLeyendasPacha = document.getElementById("open-contact-modal-from-leyendas-pacha");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromLeyendasPacha && contactModal) {
        openContactFromLeyendasPacha.addEventListener("click", (event) => {
            event.preventDefault();
            leyendasPachaModal.style.display = "none"; // Cerrar el modal de Leyendas de Pacha
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
// ===== Modal para La Leyenda del Bosque Verde =====
document.addEventListener("DOMContentLoaded", () => {
    const bosqueVerdeModal = document.getElementById("bosque-verde-modal");
    const openBosqueVerdeModal = document.querySelector(".open-bosque-verde-modal");
    const closeBosqueVerdeModal = document.getElementById("close-bosque-verde-modal");

    // Verificar si los elementos existen
    if (!bosqueVerdeModal || !openBosqueVerdeModal || !closeBosqueVerdeModal) {
        console.error("Modal o botones no encontrados para La Leyenda del Bosque Verde");
        return;
    }

    // Abrir el modal
    openBosqueVerdeModal.addEventListener("click", (event) => {
        event.preventDefault();
        bosqueVerdeModal.style.display = "block";
    });

    // Cerrar el modal
    closeBosqueVerdeModal.addEventListener("click", () => {
        bosqueVerdeModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === bosqueVerdeModal) {
            bosqueVerdeModal.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnailsBosqueVerde = document.querySelectorAll("#bosque-verde-modal .thumbnail-gallery img");
    const featuredImageBosqueVerde = document.getElementById("featured-image-bosque-verde");

    // Verificar si los elementos de las imágenes existen
    if (!thumbnailsBosqueVerde || !featuredImageBosqueVerde) {
        console.error("Imágenes de galería no encontradas en La Leyenda del Bosque Verde");
        return;
    }

    // Agregar eventos a las miniaturas
    thumbnailsBosqueVerde.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImageBosqueVerde.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de La Leyenda del Bosque Verde
    const openContactFromBosqueVerde = document.getElementById("open-contact-modal-from-bosque-verde");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromBosqueVerde && contactModal) {
        openContactFromBosqueVerde.addEventListener("click", (event) => {
            event.preventDefault();
            bosqueVerdeModal.style.display = "none"; // Cerrar el modal de La Leyenda del Bosque Verde
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
// ===== Modal para Family Day =====
document.addEventListener("DOMContentLoaded", () => {
    const familyDayModal = document.getElementById("family-day-modal");
    const openFamilyDayModal = document.querySelector(".open-family-day-modal");
    const closeFamilyDayModal = document.getElementById("close-family-day-modal");

    // Verificar si los elementos existen
    if (!familyDayModal || !openFamilyDayModal || !closeFamilyDayModal) {
        console.error("Modal o botones no encontrados para Family Day");
        return;
    }

    // Abrir el modal
    openFamilyDayModal.addEventListener("click", (event) => {
        event.preventDefault();
        familyDayModal.style.display = "block";
    });

    // Cerrar el modal
    closeFamilyDayModal.addEventListener("click", () => {
        familyDayModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === familyDayModal) {
            familyDayModal.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnailsFamilyDay = document.querySelectorAll("#family-day-modal .thumbnail-gallery img");
    const featuredImageFamilyDay = document.getElementById("featured-image-family-day");

    // Agregar eventos a las miniaturas
    thumbnailsFamilyDay.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImageFamilyDay.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de Family Day
    const openContactFromFamilyDay = document.getElementById("open-contact-modal-from-family-day");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromFamilyDay && contactModal) {
        openContactFromFamilyDay.addEventListener("click", (event) => {
            event.preventDefault();
            familyDayModal.style.display = "none"; // Cerrar el modal de Family Day
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
// ===== Modal para Kermesse =====
document.addEventListener("DOMContentLoaded", () => {
    const kermesseModal = document.getElementById("kermesse-modal");
    const openKermesseModal = document.querySelector(".open-kermesse-modal");
    const closeKermesseModal = document.getElementById("close-kermesse-modal");

    // Verificar si los elementos existen
    if (!kermesseModal || !openKermesseModal || !closeKermesseModal) {
        console.error("Modal o botones no encontrados para Kermesse");
        return;
    }

    // Abrir el modal
    openKermesseModal.addEventListener("click", (event) => {
        event.preventDefault();
        kermesseModal.style.display = "block";
    });

    // Cerrar el modal
    closeKermesseModal.addEventListener("click", () => {
        kermesseModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === kermesseModal) {
            kermesseModal.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnailsKermesse = document.querySelectorAll("#kermesse-modal .thumbnail-gallery img");
    const featuredImageKermesse = document.getElementById("featured-image-kermesse");

    // Agregar eventos a las miniaturas
    thumbnailsKermesse.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImageKermesse.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de Kermesse
    const openContactFromKermesse = document.getElementById("open-contact-modal-from-kermesse");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromKermesse && contactModal) {
        openContactFromKermesse.addEventListener("click", (event) => {
            event.preventDefault();
            kermesseModal.style.display = "none"; // Cerrar el modal de Kermesse
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
// ===== Modal para Ecotalleres =====
document.addEventListener("DOMContentLoaded", () => {
    const ecotalleresModal = document.getElementById("ecotalleres-modal");
    const openEcotalleresModal = document.querySelector(".open-ecotalleres-modal");
    const closeEcotalleresModal = document.getElementById("close-ecotalleres-modal");

    // Verificar si los elementos existen
    if (!ecotalleresModal || !openEcotalleresModal || !closeEcotalleresModal) {
        console.error("Modal o botones no encontrados para Ecotalleres");
        return;
    }

    // Abrir el modal
    openEcotalleresModal.addEventListener("click", (event) => {
        event.preventDefault();
        ecotalleresModal.style.display = "block";
    });

    // Cerrar el modal
    closeEcotalleresModal.addEventListener("click", () => {
        ecotalleresModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === ecotalleresModal) {
            ecotalleresModal.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnailsEcotalleres = document.querySelectorAll("#ecotalleres-modal .thumbnail-gallery img");
    const featuredImageEcotalleres = document.getElementById("featured-image-ecotalleres");

    // Agregar eventos a las miniaturas
    thumbnailsEcotalleres.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImageEcotalleres.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de Ecotalleres
    const openContactFromEcotalleres = document.getElementById("open-contact-modal-from-ecotalleres");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromEcotalleres && contactModal) {
        openContactFromEcotalleres.addEventListener("click", (event) => {
            event.preventDefault();
            ecotalleresModal.style.display = "none"; // Cerrar el modal de Ecotalleres
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
// ===== Modal para Espectáculos =====
document.addEventListener("DOMContentLoaded", () => {
    const espectaculosModal = document.getElementById("espectaculos-modal");
    const openEspectaculosModal = document.querySelector(".open-espectaculos-modal");
    const closeEspectaculosModal = document.getElementById("close-espectaculos-modal");

    // Verificar si los elementos existen
    if (!espectaculosModal || !openEspectaculosModal || !closeEspectaculosModal) {
        console.error("Modal o botones no encontrados para Espectáculos");
        return;
    }

    // Abrir el modal
    openEspectaculosModal.addEventListener("click", (event) => {
        event.preventDefault();
        espectaculosModal.style.display = "block";
    });

    // Cerrar el modal
    closeEspectaculosModal.addEventListener("click", () => {
        espectaculosModal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === espectaculosModal) {
            espectaculosModal.style.display = "none";
        }
    });

    // Manejo de imágenes en el modal
    const thumbnailsEspectaculos = document.querySelectorAll("#espectaculos-modal .thumbnail-gallery img");
    const featuredImageEspectaculos = document.getElementById("featured-image-espectaculos");

    // Agregar eventos a las miniaturas
    thumbnailsEspectaculos.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            console.log("Miniatura clickeada:", thumbnail.src);
            const newSrc = thumbnail.src; // Obtiene la fuente de la miniatura
            featuredImageEspectaculos.src = newSrc; // Cambia la imagen grande
        });
    });

    // Botón para abrir el modal de contacto desde el modal de Espectáculos
    const openContactFromEspectaculos = document.getElementById("open-contact-modal-from-espectaculos");
    const contactModal = document.getElementById("contact-modal");

    if (openContactFromEspectaculos && contactModal) {
        openContactFromEspectaculos.addEventListener("click", (event) => {
            event.preventDefault();
            espectaculosModal.style.display = "none"; // Cerrar el modal de Espectáculos
            contactModal.style.display = "block"; // Abrir el modal de contacto
        });
    }
});
