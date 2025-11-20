// ==========================================
// ENTERTAINMENT.JS - Funcionalidad de Cards Expandibles
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las cards de entretenimiento
    const entertainmentCards = document.querySelectorAll('.entertainment-card');

    entertainmentCards.forEach(card => {
        // Seleccionar el botón de expandir de cada card
        const expandBtn = card.querySelector('.entertainment-expand-btn');
        
        if (expandBtn) {
            expandBtn.addEventListener('click', function() {
                // Toggle de la clase 'expanded'
                card.classList.toggle('expanded');
                
                // Cambiar el aria-expanded para accesibilidad
                const isExpanded = card.classList.contains('expanded');
                expandBtn.setAttribute('aria-expanded', isExpanded);
                
                // Scroll suave hacia la card si se está expandiendo
                if (isExpanded) {
                    setTimeout(() => {
                        // Calcular la posición teniendo en cuenta el header fijo
                        const headerHeight = document.querySelector('.header')?.offsetHeight || 70;
                        const cardTop = card.getBoundingClientRect().top + window.pageYOffset;
                        const scrollTo = cardTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: scrollTo,
                            behavior: 'smooth'
                        });
                    }, 100);
                }
            });
        }
    });

    // Opcional: Cerrar otras cards cuando se abre una (modo acordeón)
    // Descomenta las siguientes líneas si quieres este comportamiento
    
    /*
    entertainmentCards.forEach(card => {
        const expandBtn = card.querySelector('.entertainment-expand-btn');
        
        if (expandBtn) {
            expandBtn.addEventListener('click', function() {
                // Si la card actual no está expandida, cerrar todas las demás
                if (!card.classList.contains('expanded')) {
                    entertainmentCards.forEach(otherCard => {
                        if (otherCard !== card && otherCard.classList.contains('expanded')) {
                            otherCard.classList.remove('expanded');
                            const otherBtn = otherCard.querySelector('.entertainment-expand-btn');
                            if (otherBtn) {
                                otherBtn.setAttribute('aria-expanded', 'false');
                            }
                        }
                    });
                }
                
                // Toggle de la card actual
                card.classList.toggle('expanded');
                const isExpanded = card.classList.contains('expanded');
                expandBtn.setAttribute('aria-expanded', isExpanded);
                
                // Scroll suave
                if (isExpanded) {
                    setTimeout(() => {
                        const headerHeight = document.querySelector('.header')?.offsetHeight || 70;
                        const cardTop = card.getBoundingClientRect().top + window.pageYOffset;
                        const scrollTo = cardTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: scrollTo,
                            behavior: 'smooth'
                        });
                    }, 100);
                }
            });
        }
    });
    */
});
