const backToTopButton = document.getElementById('back-to-top');

        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        };

        backToTopButton.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        // Interactivity for menu items
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                alert(`You selected: ${item.textContent}`);
            });
        });