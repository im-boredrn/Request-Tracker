import { loadRequests,getRequests,getSelectedRequests } from "../RequestScripts/requestData";
import { initializeRequestForm } from "../RequestScripts/requestcreation";
import { displayRecordOnMainScreen } from "../RequestScripts/requestDisplay";

loadRequests();

initializeRequestForm();

displayRecordOnMainScreen(getSelectedRequests())