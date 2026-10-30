const modal = document.getElementById("request-popup");
const btn = document.getElementById("request-creator");
const modalclose = document.getElementById("modal-close");
btn.addEventListener("click",() => {
    modal.showModal();

});

modalclose.addEventListener("click", () => {
    modal.close()
});

  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();

    const clickedOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (clickedOutside) {
        modal.close();
    }
});

