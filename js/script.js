
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
                el.setAttribute('data-toggle', false)
                el.classList.add("d-none");
                el.classList.remove("d-flex");

                e.target.closest('nav').classList.remove('vh-100');
                e.target.closest('nav').classList.add('d-none');

            } else if (el.getAttribute('data-toggle') === 'false') {
                el.setAttribute('data-toggle', true)
                el.classList.remove("d-none");
                el.classList.add("d-flex");

                e.target.closest('nav').classList.add('vh-100');
                e.target.closest('nav').classList.add('d-flex');

            }
        });
    }