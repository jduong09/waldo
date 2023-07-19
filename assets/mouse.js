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
});

/*
Default Classes (Optional)
*/

/*
Cementary of Ash
_________________
Iudex of Gundyr [2203, 2102]
Grave Warden [2278, 2239] [2189, 2235] [2116, 2219] [2052, 2196]
Ravenous Crystal Lizard [2404, 2174]
*/

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

/*
Farron Keep
_____________
Abyss Watchers [2037, 2615]
Stray Demon [2172, 2649]
Darkwraith [1649, 2753]
Basilisk [2079, 2753]
Corvian
Corvian Storyteller
Crystal Lizard
Elder Ghru [1938, 2739]
Ghru [2202, 2817] [2119, 2828] [1849, 2758] [1752, 2760] [1715, 2844]
Ravenous Crystal Lizard
Rotten Slug [1801, 2877]
London Pale Shade [1736, 2641]
Black Hand Gotthard [1846, 2623]
*/

/*
Catacombs of Carthus
_____________________
High Lord Wolnir [1358, 2974]
Skeleton [1449, 3194]
Skeleton Wheel [1620, 3176]
Dark Spirit Knight Slayer Tsorig (Invasion) [1644, 3083]
Carthus Swordsman Skeleton [1335, 3181]
Grave Warden Skeleton [1142, 3124] [1232, 3165] [1180, 3042] [1301, 3107]
*/

/*
Smouldering Lake
__________________
Great Swamp Cuculus [2557, 3227]
Old Demon King [1965, 3051]
Carthus Sandworm [2133, 3099]
Demon Cleric [1916, 3250]
Demon Statue [2004, 3208]
Great Crab (Ember) [2444, 3140]
Smoldering Ghru [2477, 3283] [2375, 3379] [2266, 3363] [2171, 3368] [2040, 3340]
Smoldering Rotten Flesh [1927, 3362]
*/

/*
Irithyll Of The Boreal Valley
_______________________________
Pontiff Sulyvahn [1132, 2425]
Burning Stake Witch [910, 2512]
Irithyllian Slave [976, 2591] [1063, 2638] [1002, 2719] [906, 2702]
Pontiff Knight (Hag) [835, 2654] [1107, 2737] [1210, 2731]
Sewer Centipede [804, 2581]
Sulyvahn's Beast [1456, 2588]
Irithyllian Beast-hound [1300, 2508]
Creighton the Wanderer [1391, 2497]
*/

/* 
Anor Londo 
___________
Company Captain Yorshka [1439, 2114]
Drang Knights [1211, 2261] [1123, 2256]
Aldrich, Devourer of Gods [1253, 2028]
Silver Knight [1316, 2252] [1404, 2242] [1085, 2158]
*/

/*
Irithyll Dungeon
___________________
Jailer [846, 2948] [751, 2938] [995, 2856] [771, 2828] [610, 2862]
Alva, Seeker of the Spurned (Invasion) [936, 2962]
Monstrosity of Sin [363, 3120]
Wretch [664, 2928] [903, 2875] [1032, 2942]
*/

/*
Profaned Capital
_________________
Yhorm The Giant [517, 2960]
Jailer Handmaid [265, 3201]
Court Sorcerer [747, 3177]
Headless Gargoyle [574, 3269] [427, 3229]
*/

/*
Consumed King's Garden
________________________
Oceiros, the Consumed King [1457, 1486]
Cathedral Knight [1615, 1619] [1413, 1613]
*/

/* 
Unintended Grave
_________________
Champion Gundyr [1387, 1827]
Black Knight [1468, 1784] [1282, 1776]
*/

/*
Archdragon Peak
_________________
Ancient Wyvern [1172, 702]
Nameless King [1220, 876]
Serpent-man [1122, 1010] [1081, 1059] [850, 1078]
Serpent-Man Summoner [717, 919]
Drakeblood Knight [692, 1043]
Rock Lizard [1248, 1025]
Havel Knight [989, 861]
Rapier Champion [594, 1013]
*/

/*
Lothric Castle
________________
Pilgrim Butterfly [1748, 961]
Dragonslayer Armour [1899, 1051]
Lothric, Younger Prince [2469, 813]
Lorian, Elder Prince [2341, 793]
Hollow Assassin [1862, 1407]
Hollow Priest [1771, 1406]
Lothric Knight Red [1654, 1382]
Winged Knight [1981, 1381]
Boreal Outrider Knight
Lothric Wyvern [1754, 1293] [1925, 1293]
*/

/*
Grand of Archives
__________________
Black Hand Trio
Lion Knight Ardbert [2408, 993]
Black Hand Kamui [2506, 950]
Daughter of Crystal Kriemhild [2318, 947]
Lothric Knight Blue [2468, 1107] [2353, 1100]
Ascended Winged Knight [2143, 909] [2660, 909]
Grand Archives Scholar [2264, 1064]
Clawed Curse [2579, 1070]
Gargoyle [2643, 1011] [2179, 1006]
*/

/*
Kiln of the First Flame
_________________________
Soul Of Cinder [2137, 394]
*/

/* Ashes of Ariandel DLC */
/*
Painted World of Ariandel
____________________________
Sister Freide [550, 1350]
Father Ariandel [719, 1306]
Champion's Gravetender [547, 2057]
Gravetender Greatwolf [803, 2027]
Sir Vilhelm [425, 1414]
Livid Pyromancer Dunnel [255, 1623]
Corvian Settler [391, 1624]
Painting Woman [328, 1372]
Millwood Knight [1047, 1559] [930, 1598] [828, 1516]
Millwood Chieftain [955, 1456]
Farron Follower [762, 1710] [572, 1723] [489, 1694]
Tree Woman [557, 1580] [448, 1936]
Corvian Settler (Enemy) [888, 1686] [248, 1458]
Corvian Knight [370, 1520]
Giant Fly [666, 1622]
Wolf [827, 1585]
Greater Crab (Ice) [335, 2064]
*/

/* The Ringed City DLC */
/*
Dreg Heap
____________
Demon Prince []
Demon in Pain [3475, 1219]
Demon From Below [3139, 1170]
Stone Humped Hag [3437, 989]
Amnesiac Lapp [3323, 983]
Murkman [3305, 885] [3228, 853]
Angel [3594, 637]
Harald Legion Knight [3328, 774]
Overgrown Lothric Knight [3427, 871]
Desert Pyromancer Zoey [3525, 1001]
*/

/*
The Ringed City
_________________
Darkeater Midir [3554, 2250]
Halflight, Spear of the Church [3612, 1538]
Slave Knight Gael [3735, 3265]
Shira [3763, 2323]
Locust Preacher(s) [3828, 1694] [3744, 1756]
Judicator Argo [3798, 1392]
Filianore [3601, 1402]
Ringed Knight [3732, 1623] [3559, 1656] [3328, 1563]
Moaning Knight [3489, 1466]
Silver Knight Ledo [3342, 1579]
Hollow Cleric [3638, 1725]
Lothric Thief [3591, 1783] [3685, 1789]
Show Your Humanity [3884, 1631]
Pygmy King [3861, 3278]
*/