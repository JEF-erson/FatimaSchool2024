document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los elementos del navbar
    const navItems = document.querySelectorAll('#navbarNav a');

    // Función para establecer el estado activo
    function setActiveNavItem() {
        // Remover clase 'active' de todos los elementos
        navItems.forEach(nav => nav.classList.remove('active'));

        // Obtener la URL actual
        const currentUrl = window.location.href;

        // Activar el nav-item correspondiente a la URL actual
        navItems.forEach(item => {
            if (item.href === currentUrl) {
                item.classList.add('active');
            }
        });
    }

    // Establecer el primer nav-item como activo por defecto
    navItems[0].classList.add('active');

    // Llamar a la función para establecer el estado activo al cargar la página
    setActiveNavItem();

    // Agregar evento click a cada nav-item
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Llamar a la función para establecer el estado activo al hacer clic
            setActiveNavItem();
        });
    });
});