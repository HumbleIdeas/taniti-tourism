document.querySelectorAll(".fri-link").forEach(link => {
    link.addEventListener("click", function () {
        const id = this.getAttribute("href").substring(1);
        const target = document.getElementById(id);

        if (!target) {
            return;
        }

        let element = target;

        while (element) {
            if (element.tagName === "DETAILS") {
                element.open = true;
            }

            element = element.parentElement;
        }
    });
});