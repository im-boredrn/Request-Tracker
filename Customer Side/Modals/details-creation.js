
import { requestSection,displayRecordOnMainScreen } from "../RequestScripts/requestDisplay.js";
import {getRequests,deleteRequest,getSelectedRequests} from "../RequestScripts/requestData.js"

export function createDetailsModal()
{
const detailsTemplate = document.getElementById("details-template");
const detailsModal = detailsTemplate.content.firstElementChild.cloneNode(true);
let selectedRequestId = null;

const cancelbtn = detailsModal.querySelector(".details-cancel");

   cancelbtn.addEventListener("click", () => {
        deleteRequest(selectedRequestId);

        displayRecordOnMainScreen(getSelectedRequests(getRequests()));

        detailsModal.close();
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

document.body.appendChild(detailsModal);

requestSection.addEventListener("click", (event) => {
    const button = event.target.closest(".view-details");

    if (!button) return;

    const requestId = button.dataset.requestId;

    const selectedRequest = getRequests().find(request => request.id === requestId)
    selectedRequestId = selectedRequest.id;

    detailsModal.querySelector(".details-subject").textContent = selectedRequest.subject;
    detailsModal.querySelector(".details-description").textContent = selectedRequest.description;
    detailsModal.querySelector(".details-id-value").textContent = selectedRequest.id;
    detailsModal.querySelector(".details-date").textContent = selectedRequest.date;
    detailsModal.querySelector(".details-status").textContent = selectedRequest.status;
    detailsModal.querySelector(".details-category").textContent = selectedRequest.category;

    detailsModal.showModal();



 

});
}




 



