import { loadRequests,getRequests,getSelectedRequests } from "./RequestScripts/requestData.js";
import { initializeRequestForm } from "./RequestScripts/requestcreation.js";
import { displayRecordOnMainScreen } from "./RequestScripts/requestDisplay.js";
import {initializeCreateRequestModal} from "./Modals/modal.js"

loadRequests();

initializeRequestForm();
initializeCreateRequestModal();

displayRecordOnMainScreen(getSelectedRequests(getRequests()));