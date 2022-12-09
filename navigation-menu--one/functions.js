let buttonNav = document.querySelector('.navbar-toggler');
        let sideMenu = document.querySelector('#navbarNav');
        buttonNav.addEventListener('click', toggleTransition)
        function toggleTransition(){
            sideMenu.classList.toggle('transmove');
        }    