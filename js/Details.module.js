import { displayGameData } from "./UI.js";
const detailsSection = document.querySelector('.details');
const gamesSection = document.querySelector('.games');
class Details {
  constructor() {
    gamesSection.classList.add('d-none');
    detailsSection.classList.replace('d-none', 'd-flex');
  }
  displayGameDetails(gameID) {
    displayGameData(gameID);
  }

}


export default {
  Details
}