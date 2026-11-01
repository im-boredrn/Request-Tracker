import { submitRequest,getSelectedRequests,getRequests } from "./requestData.js";
import { modal } from "../Modals/modal.js";
import { displayRecordOnMainScreen } from "./requestDisplay.js";
export function initializeRequestForm()
{
    const form = document.getElementById("request");
    form.addEventListener("submit", (event) => {
    event.preventDefault();

    const request = captureRequest(form);
    const validated = validateRequest(request);

    submitRequest(validated);
    displayRecordOnMainScreen(getSelectedRequests(getRequests()));
    
    modal.close();
});
}


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
        return;
    }

    return request;

}
