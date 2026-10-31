const form = document.getElementById("request");

const requestSection = document.getElementById("requests");

let allRequests = [];

allRequests = loadRequests();

displayRecordOnMainScreen(selectRequests(allRequests))

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const request = captureRequest(form);
    const validated = validateRequest(request);
    submitRequest(validated);
    //closeModal();
    displayRecordOnMainScreen(selectRequests(allRequests));
});

function captureRequest(formV) // input : form , output : formValues array
{
    let formData = new FormData(formV);
    const request = Object.fromEntries(formData.entries());

    request.id = crypto.randomUUID();
    request.date = new Date().toISOString();
    request.status = "Pending";
    //request.name = String.randomUUID(); // eventually get from profile page.
    //request.email = ""
    console.log(request);

    return request;
  
}

function validateRequest(request)
{
    const errors = [];

    // if (!request.name || request.name.trim() === "")
    // {
    //     errors.push("Name is Requred");
    // }

    if (!request.subject || request.subject.trim() === "")
    {
        errors.push("Subject is Requred");
    }

    if (!request.category || request.category.trim() === "")
    {
        errors.push("Category is Requred");
    }

    if (!request.description || request.description.trim() === "")
    {
        errors.push("Description is Requred");
    }

    // if (request.name && request.name.length > 100)
    // {
    //     errors.push("Name is too long");
    // }

    if (request.subject && request.subject.length> 50)
    {
        errors.push("Subject too long");
    }

    if (request.description && request.description.length > 300)
    {
        errors.push("Description too long");
    }

    if (errors.length > 0)
    {
        request.status = "Rejected"
        request.errors = errors;
    }

    return request;

}

function submitRequest(request)
{
    allRequests.push(request);

    localStorage.setItem('requestCollection', JSON.stringify(allRequests));
}

function loadRequests()
{
    const retrievedRequests = JSON.parse(localStorage.getItem('requestCollection')) || [];
    return retrievedRequests;
}

function selectRequests(requestCollection)
{
    let lowerRange = requestCollection.length - 3

    let upperRange = requestCollection.length + 1;

    if (lowerRange < 0) lowerRange = 0;
    let selectedRequests = requestCollection.slice(lowerRange,upperRange);

    return selectedRequests;
}

function displayRecordOnMainScreen(requests)
{
    requestSection.replaceChildren();
    requests.forEach(request => {
        addRequest(request);
    });
}

function addRequest(request)
{
    const template = document.getElementById('request-template');
    const clone = template.content.cloneNode(true);

    clone.querySelector(".request-subject").textContent = request.subject;
    clone.querySelector(".request-date").textContent = request.date;
    clone.querySelector(".request-category").textContent = request.category;
    clone.querySelector(".request-status").textContent = request.status;

    requestSection.appendChild(clone);
}
