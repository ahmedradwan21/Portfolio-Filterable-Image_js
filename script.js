    (function() {
        const buttons = document.querySelectorAll('.btn');
        const storeimages = document.querySelectorAll('.store-item');
    
        buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            storeimages.forEach((item) => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
            });
        });
        });
    })();
    
