const detailsModal = document.getElementById("details-popup");
const detailsbtn = document.getElementById("modal-btn");
const detailsmodalclose = document.getElementById("modal-close");
detailsbtn.addEventListener("click",() => {
    detailsModal.showModal();

});

modalclose.addEventListener("click", () => {
    detailsModal.close()
});

  detailsModal.addEventListener("click", (event) => {
    const rect = detailsModal.getBoundingClientRect();

    const clickedOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (clickedOutside) {
        detailsModal.close();
    }
});

