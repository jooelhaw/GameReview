import details from "./Details.module.js";
const gameDataDiv = document.getElementById("gameData");
// selecting loading div
const loader = document.getElementById("loading");

// showing loading
function displayLoading() {
  loader.classList.replace("d-none", "d-flex");
  // to stop loading after some time
  setTimeout(() => {
    loader.classList.replace("d-flex", "d-none");
  }, 5000);
}

// hiding loading 
function hideLoading() {
  loader.classList.replace("d-flex", "d-none");
}
async function displayAllData(cate) {
  const options = {
    method: "GET"
  };
  // display loading screen
  displayLoading();
  try {
    let response = await fetch(`https://www.freetogame.com/api/games?category=${cate}`, options);
    let games = await response.json();
    if (!(response.ok)) {
      console.log("Error: ", response.status);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // hide loading screen
    hideLoading();
    let gamesContainer = "";
    for (let i = 0; i < games.length; i++) {
      let game = games[i];
      gamesContainer +=
        `<div class="col gameTemplate" style="display: block;" data-gameID="${game.id}">
              <div class="card h-100" >
                <img src="${game.thumbnail}" class="card-img-top" alt="game image">
                <div class="card-body d-flex flex-column justify-content-between">
                  <h5 class="card-title text-capitalize text-white">${game.title}</h5>
                  <p class="card-text text-white-50">${game.short_description}</p>
                  <div class="d-flex justify-content-between align-items-center overflow-auto">
                  <span class="text-white bg-dark rounded-3 p-2">${game.genre}</span>
                  <span class="text-dark bg-white rounded-3 p-2">${game.platform}</span>
                  </div>
                  </div>
                  </div>
        </div>`
    }
    gameDataDiv.innerHTML = gamesContainer;
    console.log(games);
    // handling click event on each game
    const gameTemplate = document.querySelectorAll(".gameTemplate");
    gameTemplate.forEach(gameTemplate => {
      gameTemplate.addEventListener("click", (e) => {
        e.preventDefault();
        let gameID = gameTemplate.getAttribute("data-gameID");
        // displayGameDetails(gameID);
        let gameDetails = new details.Details();
        gameDetails.displayGameDetails(gameID);
      });
    });

  } catch (error) {
    console.log(error);
  }

}


async function displayGameData(gameID) {
  console.log(gameID);
  const options = {
    method: "GET"
  };

  // display loading screen
  displayLoading();

  try {
    let response = await fetch(`https://www.freetogame.com/api/game?id=${gameID}`, options);
    let game = await response.json();
    if (!(response.ok)) {
      console.log("Error: ", response.status);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // hide loading screen
    hideLoading();
    let gameDetails = `
            <div class="col-md-6">
          <img src="${game.thumbnail}" class="img-fluid w-100" alt="game image">
        </div>
        <div class="col-md-6">
          <h2 class="text-white fw-bolder text-capitalize">${game.title}</h2>
          <hr class="text-white-50">
          <div class="game-category my-2">
            <span class="badge fw-bolder fs-6 ps-0">Category: </span>
            <span class="badge bg-primary">${game.genre}</span>
          </div>
          <div class="game-platform my-2">
            <span class="badge fw-bold fs-6 ps-0"">Platform: </span>
            <span class="badge bg-primary">${game.platform}</span>
          </div>
          <div class="game-publisher my-2">
            <span class="badge fw-bold fs-6 ps-0"">Publisher: </span>
            <span class="badge bg-primary">${game.publisher}</span>
          </div>
          <div class="game-release my-2">
            <span class="badge fw-bold fs-6 ps-0"">Release: </span>
            <span class="badge bg-primary">${game.release_date}</span>
          </div>
          <div class="minimum-container border border-2 border-secondary rounded p-2 my-2">
            <h4 class="text-white fw-bold">Minimum Requirements:</h4>
            <div class="game-requirements my-2">
            <span class="badge fw-bold fs-6 ps-0"">OS: </span>
            <span class="badge bg-primary">${game.minimum_system_requirements.os}</span>
          </div>
          <div class="game-requirements my-2">
            <span class="badge fw-bold fs-6 ps-0"">Processor: </span>
            <span class="badge bg-primary">${game.minimum_system_requirements.processor}</span>
          </div>
          <div class="game-requirements my-2">
            <span class="badge fw-bold fs-6 ps-0"">Memory: </span>
            <span class="badge bg-primary">${game.minimum_system_requirements.memory}</span>
          </div>
          <div class="game-requirements my-2">
            <span class="badge fw-bold fs-6 ps-0"">Graphics: </span>
            <span class="badge bg-primary">${game.minimum_system_requirements.graphics}</span>
          </div>
          <div class="game-requirements my-2">
            <span class="badge fw-bold fs-6 ps-0"">Storage: </span>
            <span class="badge bg-primary">${game.minimum_system_requirements.storage}</span>
          </div>
          </div>
          <div class="game-description">
          </div>
            <p class="text-white-50">${game.description}</p>
          </div>
          <button class="btn btn-outline-info w-25 ms-auto mb-3" id="btnVisit" onclick="window.open('${game.game_url}', '_blank')">
            Visit Game
          </button>
        </div>`;
    console.log(game);
    const detailsContent = document.getElementById("detailsContent");
    detailsContent.innerHTML = gameDetails;
  } catch (error) {
    console.log(error);
  }
}



export {
  displayAllData,
  displayGameData
}