
    const toggleTheme = () => {
        let settingTheme = document.querySelector('[data-bs-theme]');

        switch(settingTheme.getAttribute('data-bs-theme')) {
            case 'dark':
                document.querySelector('[data-bs-theme]').setAttribute('data-bs-theme', 'light');
                break;
            case 'light':
                document.querySelector('[data-bs-theme]').setAttribute('data-bs-theme', 'dark');
                break;
            default:

        }
    }

    const toggleBurgerMenu = (e) => {
        document.querySelectorAll('[data-toggle]').forEach(el => {
            console.log(el);

            if (el.getAttribute('data-toggle') === 'true') {
                el.setAttribute('data-toggle', false);
                
                e.target.closest('nav').classList.remove('vh-100');
                el.classList.add("d-none");
                el.classList.remove("d-flex");

            } else if (el.getAttribute('data-toggle') === 'false') {
                el.setAttribute('data-toggle', true);
                
                e.target.closest('nav').classList.add('vh-100');
                el.classList.remove("d-none");
                el.classList.add("d-flex");

            }

        });
    }