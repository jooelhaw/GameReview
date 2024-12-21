import { displayAllData } from "./UI.js";
const gamesSection = document.querySelector('.games');
const detailsSection = document.querySelector('.details');
class Games {
  constructor(){
    gamesSection.classList.replace('d-none', 'd-flex');
    detailsSection.classList.replace('d-flex', 'd-none');
  }
  displayGames(category){
    displayAllData(category);
  }
};



export default {
  Games
}