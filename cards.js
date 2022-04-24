const cards = document.querySelectorAll(".card");


cards.forEach((card) => {
    card.addEventListener("click", () => {
        const removeActive = () => {
            cards.forEach(card => card.classList.remove("active"))
        }
        removeActive();
        card.classList.add("active");
    })
})


