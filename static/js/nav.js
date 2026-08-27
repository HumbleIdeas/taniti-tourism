const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen.toString()
    );
});