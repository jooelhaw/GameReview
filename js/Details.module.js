import { displayGameData } from "./UI.js";
const detailsSection = document.querySelector('.details');
const gamesSection = document.querySelector('.games');
class Details {
  constructor() {
    console.log("Details constructor");
    
  }
  displayGameDetails(gameID) {
    displayGameData(gameID);
  }
  view() {
    // detailsSection.classList.replace('d-flex', 'd-none');
    gamesSection.classList.add('d-none');
    detailsSection.classList.replace('d-none', 'd-flex');
  }
}


export default {
  Details
}