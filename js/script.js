
    const toggleTheme = () => {
        let settingTheme = document.querySelector('[data-bs-theme]');

        switch(     settingTheme.getAttribute('data-bs-theme')) {
            case 'dark':
                document.querySelector('[data-bs-theme]').setAttribute('data-bs-theme', 'light');
                break;
            case 'light':
                document.querySelector('[data-bs-theme]').setAttribute('data-bs-theme', 'dark');
                break;
            default:

        }
    } 
        