import { loadRequests,getRequests,getSelectedRequests } from "./RequestScripts/requestData.js";
import { initializeRequestForm } from "./RequestScripts/requestcreation.js";
import { displayRecordOnMainScreen } from "./RequestScripts/requestDisplay.js";
import {initializeCreateRequestModal} from "./Modals/modal.js";
import {createDetailsModal} from "./Modals/details-creation.js";

loadRequests();

initializeRequestForm();
initializeCreateRequestModal();
createDetailsModal();

displayRecordOnMainScreen(getSelectedRequests(getRequests()));