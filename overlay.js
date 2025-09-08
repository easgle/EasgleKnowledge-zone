document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-drawer-btn-regis');
    const closeBtn = document.getElementById('close-drawer-btn-regis');
    const drawer = document.getElementById('drawer-regis');
    const overlay = document.getElementById('drawer-overlay-regis');

    const toggleDrawer = (show) => {
        if (show) {
            // แสดง Drawer และ Overlay
            drawer.classList.remove('translate-x-full');
            overlay.classList.remove('opacity-0', 'pointer-events-none');
            overlay.classList.add('opacity-50');
        } else {
            // ซ่อน Drawer และ Overlay
            drawer.classList.add('translate-x-full');
            overlay.classList.add('opacity-0', 'pointer-events-none');
            overlay.classList.remove('opacity-50');
        }
    };

    // เมื่อคลิกปุ่ม "เปิดเมนู"
    openBtn.addEventListener('click', () => {
        toggleDrawer(true);
    });

    // เมื่อคลิกปุ่ม "ปิด" หรือ Overlay
    closeBtn.addEventListener('click', () => {
        toggleDrawer(false);
    });
    
    overlay.addEventListener('click', () => {
        toggleDrawer(false);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-drawer-btn-test');
    const closeBtn = document.getElementById('close-drawer-btn-test');
    const drawer = document.getElementById('drawer-test');
    const overlay = document.getElementById('drawer-overlay-Test');

    const toggleDrawer = (show) => {
        if (show) {
            // แสดง Drawer และ Overlay
            drawer.classList.remove('translate-x-full');
            overlay.classList.remove('opacity-0', 'pointer-events-none');
            overlay.classList.add('opacity-50');
        } else {
            // ซ่อน Drawer และ Overlay
            drawer.classList.add('translate-x-full');
            overlay.classList.add('opacity-0', 'pointer-events-none');
            overlay.classList.remove('opacity-50');
        }
    };

    // เมื่อคลิกปุ่ม "เปิดเมนู"
    openBtn.addEventListener('click', () => {
        toggleDrawer(true);
    });

    // เมื่อคลิกปุ่ม "ปิด" หรือ Overlay
    closeBtn.addEventListener('click', () => {
        toggleDrawer(false);
    });
    
    overlay.addEventListener('click', () => {
        toggleDrawer(false);
    });
});