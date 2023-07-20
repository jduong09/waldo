/*
Data: 
Type: object
{
  dark_souls_3: {
    character_1: {
      locationOffset: [offSetX, offSetY],
      gameLocation: 'String'
      type: 'boss' || 'enemy' || 'npc'
    },
  },
  other_img: {
    character_1: {
      locationOffset: [offSetX, offSetY]
    }
  }
}
On App Start
  - Choose 3 Characters to choose from Image
    - randomized choosing
  - Display to user 3 characters

Event Listeners
  - IMG hover
    - Show tagging aim
  - IMG click
    - Take offSet data and check if user has chosen the correct character
  - Play Game Click
    - Remove intro modal?
*/

document.addEventListener('DOMContentLoaded', () => {
  const headerTurnResult = document.getElementById('header-turn-result');
  const div = document.querySelector('div.div-gallery');
  const img = document.getElementById('img-dark-souls');
  const btnPlay = document.getElementById('btn-play');
  let start;
  let intervalId;
  let counter = 0;

  img.addEventListener('click', (e) => {
    counter += 1;
    console.log(e);

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

    svg.appendChild(rect);
    div.appendChild(svg);

    if (e.offsetX - 25 < darkSoulsData['darkSouls3']['Iudex of Gundyr'].locationOffSet[0][0]
      && e.offsetX + 25 > darkSoulsData['darkSouls3']['Iudex of Gundyr'].locationOffSet[0][0]
      && e.offsetY - 37.5 < darkSoulsData['darkSouls3']['Iudex of Gundyr'].locationOffSet[0][1]
      && e.offsetY + 37.5 > darkSoulsData['darkSouls3']['Iudex of Gundyr'].locationOffSet[0][1]) {
      const delta = Date.now() - start;
      console.log(`It took ${Math.floor(delta / 1000)} seconds!`);
      headerTurnResult.innerHTML = `Found Iudex Of Gundyr in ${counter} tries.`;
      clearInterval(intervalId);
    } else {
      headerTurnResult.innerHTML = `Try Again Bitch.`;
      setTimeout(() => {
        svg.remove();
      }, 1000);
    }
  });

  btnPlay.addEventListener('click', () => {
    start = Date.now();
    
    intervalId = setInterval(() => {
      const delta = Date.now() - start;
      
      console.log(Math.floor(delta / 1000));
    }, 1000);
  });
});