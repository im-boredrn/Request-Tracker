
import { requestSection } from "../RequestScripts/requestDisplay.js";
import {getRequests} from "../RequestScripts/requestData.js"

export function createDetailsModal()
{
const detailsTemplate = document.getElementById("details-template");
const detailsModal = detailsTemplate.content.firstElementChild.cloneNode(true);

document.body.appendChild(detailsModal);

requestSection.addEventListener("click", (event) => {
    const button = event.target.closest(".view-details");

    if (!button) return;

    const requestId = button.dataset.requestId;

    const selectedRequest = getRequests().find(request => request.id === requestId)

    detailsModal.querySelector(".details-subject").textContent = selectedRequest.subject;
    detailsModal.querySelector(".details-description").textContent = selectedRequest.description;
    detailsModal.querySelector(".details-id-value").textContent = selectedRequest.id;
    detailsModal.querySelector(".details-date").textContent = selectedRequest.date;
    detailsModal.querySelector(".details-status").textContent = selectedRequest.status;
    detailsModal.querySelector(".details-category").textContent = selectedRequest.category;

    detailsModal.showModal();

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

});


}

// // const detailsmodalclose = document.querySelector(".details-cancel");
// detailsbtn.addEventListener("click",() => {
//     detailsModal.showModal();

// });



 



