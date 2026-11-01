let allRequests = [];

export function loadRequests()
{
    allRequests = JSON.parse(localStorage.getItem('requestCollection')) || [];
}

export function getRequests () 
{
    return allRequests;
}

export function getSelectedRequests(requestCollection)
{
    let lowerRange = requestCollection.length - 4

    let upperRange = requestCollection.length + 1;

    if (lowerRange < 0) lowerRange = 0;
    let selectedRequests = requestCollection.slice(lowerRange,upperRange);

    return selectedRequests;
}

export function submitRequest(request)
{
    allRequests.push(request);

    localStorage.setItem('requestCollection', JSON.stringify(allRequests));
}