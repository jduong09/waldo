import { darkSoulsData } from "./data";

document.addEventListener('DOMContentLoaded', () => {
  const div = document.querySelector('div.div-gallery');
  const img = document.getElementById('img-dark-souls');
  const btnPlay = document.getElementById('btn-play');
  const btnPlayAgain = document.getElementById('btn-play-again');
  let start;
  let counter = 0;
  let gameCharacters = [];
  let gameResult = {}

  img.addEventListener('click', (e) => {
    console.log(e);
    counter += 1;
    let foundCharacter = false;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', 100);
    svg.setAttribute('height', 150);
    svg.setAttribute('style', `position:absolute;top:${e.offsetY - 75}px;left:${e.offsetX - 50}px`);

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    rect.setAttribute('width', 100);
    rect.setAttribute('height', 150);
    rect.setAttribute('style', 'stroke-width:2;stroke:rgb(0, 0, 0);fill:hsla(0, 0%, 100%, .25)');
    svg.id = `svg-choice-${counter}`
    svg.appendChild(rect);
    div.appendChild(svg);

    gameCharacters.forEach((charArr, idx) => {
      const charName = charArr[0];
      const charOffSet = charArr[1].locationOffSet;
      charOffSet.forEach(locationOffSet => {
        if (e.offsetX - 25 < locationOffSet[0]
        && e.offsetX + 25 > locationOffSet[0]
        && e.offsetY - 37.5 < locationOffSet[1]
        && e.offsetY + 37.5 > locationOffSet[1]) {
          const listItemChar = document.querySelector(`#list-item-${idx+1}`);
          listItemChar.classList.add('found');
          gameResult[charName] = {
            turns: counter
          }
          foundCharacter = true;
          counter = 0;
        }
      });
    });

    if (!foundCharacter) {
      setTimeout(() => {
        svg.remove();
      }, 1000);
    }

    if (counter > 3) {
      gameCharacters.forEach((charArr, idx) => {
        const listItemChar = document.querySelector(`#list-item-${idx+1}`);

        if (!listItemChar.classList.contains('found')) {
          listItemChar.innerText = `${charArr[0]} (${charArr[1].gameLocation})`;
        }
      })
    }

    if (Object.entries(gameResult).length === 3) {
      const divGameOver = document.getElementById('div-game-over')
      const listTurns = document.getElementById('list-turns');
      const gameOverMessage = document.getElementById('game-over-message');
      
      listTurns.innerText = '';
      
      Object.entries(gameResult).forEach((char) => {
        const newListItem = document.createElement('li');
        newListItem.innerText = `Found ${char[0]} in ${char[1].turns} turns!`;
        listTurns.appendChild(newListItem);
      });

      gameOverMessage.innerText = `Finished game in ${Math.round((Date.now() - start) / 1000)} seconds!`;
      divGameOver.classList.remove('hide');
    }
  });

  btnPlay.addEventListener('click', (e) => {
    e.preventDefault();
    const listCharacters = document.getElementById('list-game-characters');
    
    listCharacters.innerText = '';
    start = Date.now();
    
    const entriesData = Object.entries(darkSoulsData.darkSouls3);
    for (let i = 0; i < 3; i++) {
      const randomInt = randomIntFromInterval(0, entriesData.length);
      gameCharacters.push(entriesData[randomInt]);

      const newListItem = document.createElement('li');
      newListItem.innerText = entriesData[randomInt][0];
      newListItem.id = `list-item-${i+1}`;
      listCharacters.appendChild(newListItem);
    }

    btnPlay.classList.add('hide');
    listCharacters.classList.remove('hide');
  });

  btnPlayAgain.addEventListener('click', (e) => {
    e.preventDefault();
    const divGameOver = document.getElementById('div-game-over');
    const listCharacters = document.getElementById('list-game-characters');

    counter = 0;
    gameCharacters = [];
    gameResult = {}
    listCharacters.classList.add('hide');
    btnPlay.classList.remove('hide');
    divGameOver.classList.add('hide');
  })
});

const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}