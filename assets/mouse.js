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

const darkSoulsData = {
  darkSouls3: {
    'Iudex of Gundyr': {
      locationOffSet: [[2203, 2102]],
      gameLocation: 'Cementary Of Ash',
      type: 'boss'
    },
    'Grave Warden': {
      locationOffSet: [[2278, 2239], [2189, 2235], [2116, 2219], [2052, 2196]],
      gameLocation: 'Cementary Of Ash',
      type: 'enemy'
    },
    'Ravenous Crystal Lizard': {
      locationOffSet: [[2404, 2174]],
      gameLocation: 'Cementary Of Ash',
      type: 'enemy'
    },
    'Anri of Astora': {
      locationOffSet: [[1739, 1719]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Blacksmith Andre': {
      locationOffSet: [[2058, 1988]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Cornyx of the Great Swamp': {
      locationOffSet: [[1808, 1966]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Eygon of Carim': {
      locationOffSet: [[1804, 1833]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Fire Keeper': {
      locationOffSet: [[1918, 1753]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Greirat of the Undead Settlement': {
      locationOffSet: [[2191, 1710]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Hawkwood': {
      locationOffSet: [[2160, 1840]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Horace the Hushed': {
      locationOffSet: [[1823, 1688]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Irina of Carim': {
      locationOffSet: [[1724, 1841]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Karla': {
      locationOffSet: [[2051, 1873]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Leonhard the Ringfinger': {
      locationOffSet: [[2058, 1653]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Ludleth of Courland': {
      locationOffSet: [[1916, 1649]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Orbeck of Vinheim': {
      locationOffSet: [[1888, 1961]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Pickle Pee, Pump-a-Rum Crow': {
      locationOffSet: [[1994, 1642]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Shrine Handmaid ': {
      locationOffSet: [[1981, 1997]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Sirris of the Sunless Realms': {
      locationOffSet: [[1936, 1866]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Sword Master': {
      locationOffSet: [[2261, 1786]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Unbreakable Patches': {
      locationOffSet: [[2130, 1685]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Yoel of Londor': {
      locationOffSet: [[2246, 1933]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Yuria of Londor': {
      locationOffSet: [[2156, 1947]],
      gameLocation: 'Firelink Shrine',
      type: 'npc'
    },
    'Crystal Lizard': {
      locationOffSet: [[2875, 1557]],
      gameLocation: 'Highwall of Lothric',
      type: 'enemy'
    },
    'Hollow Soldier': {
      locationOffSet: [[2518, 1565], [2608, 1552], [2441, 1552], [2707, 1577]],
      gameLocation: 'Highwall of Lothric',
      type: 'enemy'
    },
    'Hollow Assassin': {
      locationOffSet: [[2364, 1663]],
      gameLocation: 'Highwall of Lothric',
      type: 'enemy'
    },
    'Large Hollow Soldier': {
      locationOffSet: [[2701, 1572]],
      gameLocation: 'Highwall of Lothric',
      type: 'enemy'
    },
    'Lothric Knight Red': {
      locationOffSet: [[2512, 1452], [2619, 1447]],
      gameLocation: 'Highwall of Lothric',
      type: 'enemy'
    },
    'Lothric Knight Blue': {
      locationOffSet: [[2423, 1410]],
      gameLocation: 'Highwall of Lothric',
      type: 'enemy'
    },
    'Lothric Wyvern': {
      locationOffSet: [[1756, 1328], [1930, 1291]],
      gameLocation: 'Highwall of Lothric',
      type: 'enemy'
    },
    'Mimic': {
      locationOffSet: [[2369, 1487]],
      gameLocation: 'Highwall of Lothric',
      type: 'enemy'
    },
    'Pus of Man': {
      locationOffSet: [[2765, 1487]],
      gameLocation: 'Highwall of Lothric',
      type: 'enemy'
    },
    'Starved Hound': {
      locationOffSet: [[2695, 1666], [3149, 2382]],
      gameLocation: ['Highwall of Lothric', 'Undead Settlement'],
      type: 'enemy'
    },
    'Winged Knight': {
      locationOffSet: [[2275, 1556]],
      gameLocation: 'Highwall of Lothric',
      type: 'enemy'
    },
    'Vordt of the Boreal Valley': {
      locationOffSet: [[2717, 1322]],
      gameLocation: 'Highwall of Lothric',
      type: 'boss'
    },
    'Dancer of the Boreal Valley': {
      locationOffSet: [[2464, 1275]],
      gameLocation: 'Highwall of Lothric',
      type: 'boss'
    },
    'Emma': {
      locationOffSet: [[2338, 1382]],
      gameLocation: 'Highwall of Lothric',
      type: 'npc'
    },
    'Siegward of Catarina': {
      locationOffSet: [[628, 3133]],
      gameLocation: 'Undead Settlement',
      type: 'npc'
    },
    'Holy Knight Hodrick': {
      locationOffSet: [[2898, 1865]],
      gameLocation: 'Undead Settlement',
      type: 'npc'
    },
    'Hollow Manservant with Cage': {
      locationOffSet: [[3138, 2002]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Giant Slave': {
      locationOffSet: [[2834, 1697]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Curse-rotted Greatwood': {
      locationOffSet: [[3015, 1802]],
      gameLocation: 'Undead Settlement',
      type: 'boss'
    },
    'Peasant Hollow': {
      locationOffSet: [[2845, 2166], [2912, 2128], [2739, 2168], [2665, 2133]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Hollow Slave': {
      locationOffSet: [[2688, 2036]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Cage Spider': {
      locationOffSet: [[2609, 1993]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Cathedral Evangelist': {
      locationOffSet: [[2782, 2068]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Hollow Manservant': {
      locationOffSet: [[3022, 2046], [2936, 2003]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Hound-rat': {
      locationOffSet: [[2804, 1937]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Large Hound-rat': {
      locationOffSet: [[2708, 1927]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Holy Knight Hodrick (Invasion)': {
      locationOffSet: [[2897, 1846]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Skeleton': {
      locationOffSet: [[2522, 2029]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Fire Demon': {
      locationOffSet: [[2650, 1806]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Boreal Outrider Knight': {
      locationOffSet: [[3098, 2139]],
      gameLocation: 'Undead Settlement',
      type: 'enemy'
    },
    'Lycanthrope Hunter': {
      locationOffSet: [[2684, 2598], [2600, 2613]],
      gameLocation: 'Road of Sacrifices',
      type: 'enemy'
    },
    'Lycanthrope': {
      locationOffSet: [[2570, 2488]],
      gameLocation: 'Road of Sacrifices',
      type: 'enemy'
    },
    'Poisonhorn Bug': {
      locationOffSet: [[2736, 2645]],
      gameLocation: 'Road of Sacrifices',
      type: 'enemy'
    },
    'Lesser Crab': {
      locationOffSet: [[2701, 2484]],
      gameLocation: 'Road of Sacrifices',
      type: 'enemy'
    },
    'Great Crab': {
      locationOffSet: [[2768, 2431]],
      gameLocation: 'Road of Sacrifices',
      type: 'enemy'
    },
    'Madwoman': {
      locationOffSet: [[2968, 2268]],
      gameLocation: 'Road of Sacrifices',
      type: 'enemy'
    },
    'Yellowfinger Heysel (Invader)': {
      locationOffSet: [[2814, 2631]],
      gameLocation: 'Road of Sacrifices',
      type: 'enemy'
    },
    'Rosaria, Mother of Rebirth': {
      locationOffSet: [[3383, 2853]],
      gameLocation: 'Cathedral of the Deep',
      type: 'npc'
    },
    'Deacons of the Deep': {
      locationOffSet: [[3100, 2722]],
      gameLocation: 'Cathedral of the Deep',
      type: 'boss'
    },
    'Cathedral Knight': {
      locationOffSet: [[2812, 3056]],
      gameLocation: 'Cathedral of the Deep',
      type: 'enemy'
    },
    'Reanimated Corpse': {
      locationOffSet: [[2865, 3160]],
      gameLocation: 'Cathedral of the Deep',
      type: 'enemy'
    },
    'Infested Corpse': {
      locationOffSet: [[3160, 3111]],
      gameLocation: 'Cathedral of the Deep',
      type: 'enemy'
    },
    'Cathedral Grave Warden': {
      locationOffSet: [[2934, 3068]],
      gameLocation: 'Cathedral of the Deep',
      type: 'enemy'
    },
    'Devout of the Deep': {
      locationOffSet: [[3053, 2874], [3173, 2845], [2957, 2771], [3262, 2785]],
      gameLocation: 'Cathedral of the Deep',
      type: 'enemy'
    },
    'Corpse-grub': {
      locationOffSet: [[3023, 3120]],
      gameLocation: 'Cathedral of the Deep',
      type: 'enemy'
    },
    'Writhing Rotten Flesh': {
      locationOffSet: [[3083, 3018]],
      gameLocation: 'Cathedral of the Deep',
      type: 'enemy'
    },


    'Man-grub': {
      locationOffSet: [[3288, 2914]],
      gameLocation: 'Cathedral of the Deep',
      type: 'enemy'
    },
    'Deep Accursed': {
      locationOffSet: [[2921, 2940]],
      gameLocation: 'Cathedral of the Deep',
      type: 'enemy'
    },
    'Longfinger Kirk (NPC invader)': {
      locationOffSet: [[3292, 3012]],
      gameLocation: 'Cathedral of the Deep',
      type: 'enemy'
    },
    'Abyss Watchers': {
      locationOffSet: [[2037, 2615]],
      gameLocation: 'Farron Keep',
      type: 'boss'
    },
    'Stray Demon': {
      locationOffSet: [[2172, 2649]],
      gameLocation: 'Farron Keep',
      type: 'boss'
    },
    'Darkwraith': {
      locationOffSet: [[1649, 2753]],
      gameLocation: 'Farron Keep',
      type: 'enemy'
    },
    'Basilisk': {
      locationOffSet: [[2079, 2753]],
      gameLocation: 'Farron Keep',
      type: 'enemy'
    },
    'Elder Ghru': {
      locationOffSet: [[1938, 2739]],
      gameLocation: 'Farron Keep',
      type: 'enemy'
    },
    'Ghru': {
      locationOffSet: [[2202, 2817], [2119, 2828], [1849, 2758], [1752, 2760], [1715, 2844]],
      gameLocation: 'Farron Keep',
      type: 'enemy'
    },
    'Rotten Slug': {
      locationOffSet: [[1801, 2877]],
      gameLocation: 'Farron Keep',
      type: 'enemy'
    },
    'London Pale Shade': {
      locationOffSet: [[1736, 2641]],
      gameLocation: 'Farron Keep',
      type: 'enemy'
    },
    'Black Hand Gotthard': {
      locationOffSet: [[1846, 2623]],
      gameLocation: 'Farron Keep',
      type: 'enemy'
    },
    'High Lord Wolnir': {
      locationOffSet: [[1358, 2974]],
      gameLocation: 'Catacombs of Carthus',
      type: 'boss'
    },
    'Carthus Skeleton': {
      locationOffSet: [[1449, 3194]],
      gameLocation: 'Catacombs of Carthus',
      type: 'enemy'
    },
    'Skeleton Wheel': {
      locationOffSet: [[1620, 3176]],
      gameLocation: 'Catacombs of Carthus',
      type: 'enemy'
    },
    'Dark Spirit Knight Slayer Tsorig (Invasion)': {
      locationOffSet: [[1644, 3083]],
      gameLocation: 'Catacombs of Carthus',
      type: 'enemy'
    },
    'Carthus Swordsman Skeleton': {
      locationOffSet: [[1335, 3181]],
      gameLocation: 'Catacombs of Carthus',
      type: 'enemy'
    },
    'Grave Warden Skeleton': {
      locationOffSet: [[1142, 3124], [1232, 3165], [1180, 3042], [1301, 3107]],
      gameLocation: 'Catacombs of Carthus',
      type: 'enemy'
    },
    'Great Swamp Cuculus': {
      locationOffSet: [[2557, 3227]],
      gameLocation: 'Smouldering Lake',
      type: 'npc'
    },
    'Old Demon King': {
      locationOffSet: [[1965, 3051]],
      gameLocation: 'Smouldering Lake',
      type: 'boss'
    },
    'Carthus Sandworm': {
      locationOffSet: [[2133, 3099]],
      gameLocation: 'Smouldering Lake',
      type: 'boss'
    },
    'Demon Cleric': {
      locationOffSet: [[1916, 3250]],
      gameLocation: 'Smouldering Lake',
      type: 'enemy'
    },
    'Demon Statue': {
      locationOffSet: [[2004, 3208]],
      gameLocation: 'Smouldering Lake',
      type: 'enemy'
    },
    'Great Crab (Ember)': {
      locationOffSet: [[2444, 3140]],
      gameLocation: 'Smouldering Lake',
      type: 'enemy'
    },
    'Smoldering Ghru': {
      locationOffSet: [[2477, 3283], [2375, 3379], [2266, 3363], [2171, 3368], [2040, 3340]],
      gameLocation: 'Smouldering Lake',
      type: 'enemy'
    },
    'Smoldering Rotten Flesh': {
      locationOffSet: [[1927, 3362]],
      gameLocation: 'Smouldering Lake',
      type: 'enemy'
    },
    'Pontiff Sulyvahn': {
      locationOffSet: [[1132, 2425]],
      gameLocation: 'Irithyll Of The Boreal Valley',
      type: 'boss'
    },
    'Burning Stake Witch': {
      locationOffSet: [[910, 2512]],
      gameLocation: 'Irithyll Of The Boreal Valley',
      type: 'enemy'
    },
    'Irithyllian Slave': {
      locationOffSet: [[976, 2591], [1063, 2638], [1002, 2719], [906, 2702]],
      gameLocation: 'Irithyll Of The Boreal Valley',
      type: 'enemy'
    },
    'Pontiff Knight (Hag)': {
      locationOffSet: [[835, 2654] [1107, 2737] [1210, 2731]],
      gameLocation: 'Irithyll Of The Boreal Valley',
      type: 'enemy'
    },
    'Sewer Centipede': {
      locationOffSet: [[804, 2581]],
      gameLocation: 'Irithyll Of The Boreal Valley',
      type: 'enemy'
    },
    'Sulyvahn\'s Beast': {
      locationOffSet: [[1456, 2588]],
      gameLocation: 'Irithyll Of The Boreal Valley',
      type: 'enemy'
    },
    'Irithyllian Beast-hound': {
      locationOffSet: [[1300, 2508]],
      gameLocation: 'Irithyll Of The Boreal Valley',
      type: 'enemy'
    },
    'Creighton the Wanderer': {
      locationOffSet: [[1391, 2497]],
      gameLocation: 'Irithyll Of The Boreal Valley',
      type: 'npc'
    },
    'Company Captain Yorshka': {
      locationOffSet: [[1439, 2114]],
      gameLocation: 'Anor Londo',
      type: 'npc'
    },
    'Drang Knights': {
      locationOffSet: [[1211, 2261], [1123, 2256]],
      gameLocation: 'Anor Londo',
      type: 'enemy'
    },
    'Aldrich, Devourer of Gods': {
      locationOffSet: [[1253, 2028]],
      gameLocation: 'Anor Londo',
      type: 'boss'
    },
    'Silver Knight': {
      locationOffSet: [[1316, 2252], [1404, 2242], [1085, 2158]],
      gameLocation: 'Anor Londo',
      type: 'enemy'
    },
    'Jailer': {
      locationOffSet: [[846, 2948], [751, 2938], [995, 2856], [771, 2828], [610, 2862]],
      gameLocation: 'Irithyll Dungeon',
      type: 'enemy'
    },
    'Alva, Seeker of the Spurned (Invasion)': {
      locationOffSet: [[936, 2962]],
      gameLocation: 'Irithyll Dungeon',
      type: 'enemy'
    },
    'Monstrosity of Sin': {
      locationOffSet: [[363, 3120]],
      gameLocation: 'Irithyll Dungeon',
      type: 'enemy'
    },
    'Wretch': {
      locationOffSet: [[664, 2928], [903, 2875], [1032, 2942]],
      gameLocation: 'Irithyll Dungeon',
      type: 'enemy'
    },
  }
};
/*
Default Classes (Optional)
*/
/*
FireLink Shrine
Highwall of Lothric
Undead Settlement
Cathedral of the Deep 
Farron Keep
Catacombs of Carthus
Smouldering Lake
Irithyll Of The Boreal Valley 
Anor Londo
Irithyll Dungeon
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




/*
Road of Sacrifices
___________________
Black Knight
Corvian
Corvian Storyteller
Evangelist (after defeating Crystal Sage)
Holy Knight Hodrick (Mad Phantom)
*/