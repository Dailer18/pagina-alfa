// Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const contentPanels = document.querySelectorAll('.content-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all tabs
        tabBtns.forEach(tab => tab.classList.remove('tab-active'));
        
        // Add active class to clicked tab
        btn.classList.add('tab-active');
        
        // Hide all content panels
        contentPanels.forEach(panel => panel.classList.remove('active'));
        
        // Show the corresponding content panel
        const panelId = `${btn.dataset.tab}-panel`;
        document.getElementById(panelId).classList.add('active');
    });
});

// Smooth scroll for navigation
// Se asegura de que el elemento exista antes de agregar el listener
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        // Busca la segunda sección de la página para hacer scroll hacia ella
        const vslSection = document.querySelector('section');
        if (vslSection) {
            vslSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}
