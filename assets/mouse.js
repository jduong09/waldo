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

    if (e.offsetX - 25 < 180 && e.offsetX + 25 > 180 && e.offsetY - 37.5 < 170 && e.offsetY + 37.5 > 170) {
      const delta = Date.now() - start;
      console.log(`It took ${Math.floor(delta / 1000)} seconds!`);
      headerTurnResult.innerHTML = `Found Waldo in ${counter} tries.`;
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
})

/*
FireLink Shrine
___________________

Anri of Astora [1739, 1719]
Blacksmith Andre [2058, 1988]
Cornyx of the Great Swamp [1808, 1966]
Eygon of Carim [1804, 1833]
Fire Keeper - [1918, 1753]
Greirat of the Undead Settlement [2191, 1710]
Hawkwood [2160, 1840]
Horace the Hushed [1823, 1688]
Irina of Carim [1724, 1841]
Karla [2051, 1873]
Leonhard the Ringfinger [2058, 1653]
Ludleth of Courland [1916, 1649]
Orbeck of Vinheim [1888, 1961]
Pickle Pee, Pump-a-Rum Crow [1994, 1642]
Shrine Handmaid [1981, 1997]
Sirris of the Sunless Realms [1936, 1866]
Sword Master (hostile) [2261, 1786]
Unbreakable Patches [2130, 1685]
Yoel of Londor [2246, 1933]
Yuria of Londor [2156, 1947]

*/

/*
Highwall of Lothric
____________________

Crystal Lyzard [2875, 1557]
Darkwraith
Hollow Soldier Sword and Shield [2518, 1565]
Hollow Soldier Crossbow [2608, 1552]
Hollow Soldier Spear and Shield [2441, 1552]
Hollow Soldier GreatAxe [2707, 1577]
Hollow Assassin [2364, 1663]
Large Hollow Soldier
Lothric Knight Red [2512, 1452] [2619, 1447]
Lothric Knight Blue [2423, 1410]
Lothric Wyvern [1756, 1328] [1930, 1291]
Mimic [2369, 1487]
Pus of Man [2765, 1487]
Starved hound [2695, 1666]
Winged Knight [2275, 1556]
Vordt of the Boreal Valley [2717, 1322]
Dancer of the Boreal Valley [2464, 1275]
Emma (NPC) [2338, 1382]
*/

/*
Undead Settlement
__________________
Siegward of Catarina [628, 3133]
Velka the Goddess of Sin
Holy Knight Hodrick [2898, 1865]
Mound-Maker Covenant
Warrior of Sunlight Covenant
Hollow Manservant with Cage. Transports player to Mound-Maker Covenant. [3138, 2002]
Giant Slave [2834, 1697]
Curse-rotted Greatwood [3015, 1802]
Hollow
Starved Hound [3149, 2382]
Peasant Hollow [2845, 2166] [2912, 2128] [2739, 2168] [2665, 2133]
Hollow Slave [2688, 2036]
Cage Spider [2609, 1993]
Cathedral Evangelist [2782, 2068]
Hollow Manservant [3022, 2046] [2936, 2003]
Hound-rat [2804, 1937]
Large Hound-rat [2708, 1927]
Skeleton [2522, 2029]
Fire Demon [2650, 1806]
Boreal Outrider Knight [3098, 2139]
2x Crystal Lizard
Holy Knight Hodrick (Invasion) [2897, 1846]
*/

/*
Road of Sacrifices
___________________
Black Knight
Corvian
Corvian Storyteller
Lycanthrope Hunter [2684, 2598] [2600, 2613]
Lycanthrope [2570, 2488]
Poisonhorn Bug [2736, 2645]
Lesser Crab [2701, 2484]
Great Crab [2768, 2431]
Madwoman [2968, 2268]
Evangelist (after defeating Crystal Sage)
Holy Knight Hodrick (Mad Phantom)
Yellowfinger Heysel (Invader) [2814, 2631]
*/

/*
Cathedral of the Deep 
______________________
Rosaria, Mother of Rebirth [3383, 2853]
Deacons of the Deep [3100, 2722]
Cathedral Knight [2812, 3056]
Reanimated Corpse [2865, 3160]
Infested Corpse [3160, 3111]
Cathedral Grave Warden [2934, 3068]
Devout of the Deep [3053, 2874] [3173,]
Corpse-grub [3023, 3120]
Writhing Rotten Flesh [3083, 3018]
Man-grub [3288, 2914]
Giant Slave
Ravenous Crystal Lizard
Deep Accursed [2921, 2940]
Longfinger Kirk (NPC invader) [3292, 3012]s
*/