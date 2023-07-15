document.addEventListener('DOMContentLoaded', () => {
  const div = document.querySelector('div.hello');
  const img = document.getElementById('img-waldo-1');
  const btnPlay = document.getElementById('btn-play');
  let start;
  let intervalId;
  let counter = 1;
  // Waldo Image 1: offSetX 180 offSetY 170
  btnPlay.addEventListener('click', () => {
    start = Date.now();
    
    intervalId = setInterval(() => {
      const delta = Date.now() - start;
      
      console.log(Math.floor(delta / 1000));
    }, 1000);

    img.addEventListener('click', (e) => {
      counter += 1;
  
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('width', 50);
      svg.setAttribute('height', 75);
      svg.setAttribute('style', `position:absolute;top:${e.offsetY - 37.5}px;left:${e.offsetX - 25}px`);
  
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      rect.setAttribute('width', 50);
      rect.setAttribute('height', 75);
      rect.setAttribute('style', 'stroke-width:2;stroke:rgb(0, 0, 0);fill:hsla(0, 0%, 100%, .25)');
  
      svg.appendChild(rect);
      div.appendChild(svg);
  
      if (e.offsetX - 25 < 180 && e.offsetX + 25 > 180 && e.offsetY - 37.5 < 170 && e.offsetY + 37.5 > 170) {
        const delta = Date.now() - start;
        console.log(`Found Waldo in ${counter} tries.`);
        console.log(`It took ${Math.floor(delta / 1000)} seconds!`);
        clearInterval(intervalId);
      } else {
        console.log('try again bitch');
        setTimeout(() => {
          svg.remove();
        }, 1000);
      }
    });
  });

  
})