import { loadRequests,getRequests,getSelectedRequests } from "../RequestScripts/requestData.js";
import { initializeRequestForm } from "../RequestScripts/requestcreation.js";
import { displayRecordOnMainScreen } from "../RequestScripts/requestDisplay.js";

loadRequests();

initializeRequestForm();

displayRecordOnMainScreen(getSelectedRequests(getRequests()));