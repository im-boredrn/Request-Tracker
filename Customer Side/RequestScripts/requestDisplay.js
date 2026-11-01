export function displayRecordOnMainScreen(selectedRequests)
{
    const requestSection = document.getElementById("requests")
    requestSection.replaceChildren();
    selectedRequests.forEach(request => {
        addRequest(request, requestSection);
    });
} 

function addRequest(request, requestSection)
{
    const template = document.getElementById('request-template');
    const clone = template.content.cloneNode(true);

    clone.querySelector(".request-subject").textContent = request.subject;
    clone.querySelector(".request-date").textContent = request.date;
    clone.querySelector(".request-category").textContent = request.category;
    clone.querySelector(".request-status").textContent = request.status;
    clone.querySelector(".view-details").dataset.requestId = request.id;

    requestSection.appendChild(clone);
}

// requestSection.addEventListener("click", (event) => {
//     const button = event.target.closest(".view-details");

//     if (!button) return;

//     const requestId = button.dataset.requestId;

//     const selectedRequest = allRequests.find(request => request.id === requestId)

//     console.log(selectedRequest)


// });
