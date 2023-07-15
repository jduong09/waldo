document.addEventListener('DOMContentLoaded', () => {
  const div = document.querySelector('div.hello');
  const img = document.getElementById('img-waldo-1');
  // Waldo Image 1: offSetX 180 offSetY 170
  img.addEventListener('click', (e) => {
    console.log(e);
    // 50
    // const userCoordinates = [e.offsetX, e.offsetY];
    [e.offsetX - 25, e.offsetY + 37.5];
    [e.offsetX - 25, e.offsetY - 37.5];
    [e.offsetX + 25, e.offsetY + 37.5];
    [e.offsetX + 25, e.offsetY - 37.5];

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
      console.log('found waldo');
    } else {
      console.log('try again bitch');
    }
  });
})