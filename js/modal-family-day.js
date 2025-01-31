// Función para abrir el modal de Family Day
function openFamilyDayModal() {
    const modal = document.getElementById('modal-family-day');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Función para cerrar el modal de Family Day
function closeFamilyDayModal() {
    const modal = document.getElementById('modal-family-day');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Cerrar modal si se hace clic fuera de su contenido
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal-family-day');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
