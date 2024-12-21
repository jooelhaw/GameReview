import { displayAllData } from "./UI.js";
const gamesSection = document.querySelector('.games');
const detailsSection = document.querySelector('.details');
class Games {
  constructor(){
    // display the section
    // detailsSection.classList.remove('d-flex');
    // detailsSection.classList.add('d-none');
    // gamesSection.classList.remove('d-none');
    // gamesSection.classList.add('d-flex');
    // gamesSection.classList.replace('d-none', 'd-flex');
  }
  displayGames(category){
    displayAllData(category);
  }
  view(){
    gamesSection.classList.replace('d-none', 'd-flex');
    detailsSection.classList.replace('d-flex', 'd-none');
  }
};



export default {
  Games
}