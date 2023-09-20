function Burger() {
    const burgerIcon = document.querySelector(".burger-icon");
    const mobileMenu = document.querySelector(".mobile-menu");
    let isOpen = false;

    burgerIcon.addEventListener("click", () => {
        isOpen = !isOpen;
        if (isOpen) {
            mobileMenu.classList.add("opened");
            burgerIcon.classList.add("opened");
            document.body.classList.add('stop');
        } else {
            mobileMenu.classList.remove("opened");
            burgerIcon.classList.remove("opened");
            document.body.classList.remove('stop');
        }
    });

    const MobileitemScroll1 = document.querySelector(".Mobileitem1");
    MobileitemScroll1.addEventListener('click', () => {
        if (isOpen) {
            mobileMenu.classList.remove("opened");
            burgerIcon.classList.remove("opened");
            document.body.classList.remove('stop');
            isOpen = false;
        }

    });

    const MobileitemScroll2 = document.querySelector(".Mobileitem2");
    MobileitemScroll2.addEventListener('click', () => {
        if (isOpen) {
            mobileMenu.classList.remove("opened");
            burgerIcon.classList.remove("opened");
            document.body.classList.remove('stop');
            isOpen = false;
        }

    });


    const MobileitemScroll3 = document.querySelector(".Mobileitem3");
    MobileitemScroll3.addEventListener('click', () => {
        if (isOpen) {
            mobileMenu.classList.remove("opened");
            burgerIcon.classList.remove("opened");
            document.body.classList.remove('stop');
            isOpen = false;
        }

    });
}

Burger();