import games from "./Games.module.js";
const btnClose = document.getElementById('btnClose');
function displayGames() {
  const cateGames = new games.Games();
  cateGames.view();
  // find the active link
  let activeLink = document.querySelector('.nav-link.active');

  // send the active link category to the displayGames method
  cateGames.displayGames(activeLink.getAttribute('data-category'));
  // get all the nav links
  const navLinks = document.querySelectorAll('.nav-link');
  // loop through the nav links and add an event listener to each
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      link.classList.add('active');
      let category = link.getAttribute('data-category');
      const cateGames = new games.Games();
      cateGames.displayGames(category);
    })
  });
}
displayGames();


btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  const detailsSection = document.querySelector('.details');
  detailsSection.classList.replace('d-flex', 'd-none');
  displayGames();
  // window.open('index.html', '_self');
});