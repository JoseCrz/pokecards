export const cardsMock = [
  {
    id: 'xy7-4',
    name: 'Bellossom',
    nationalPokedexNumber: 182,
    imageUrl: 'https://images.pokemontcg.io/xy7/4.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xy7/4_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gloom',
    hp: '120',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '4',
    artist: 'Mizue',
    rarity: 'Uncommon',
    series: 'XY',
    set: 'Ancient Origins',
    setCode: 'xy7',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Windmill',
        text: 'Switch this Pokémon with 1 of your Benched Pokémon.',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Flower Tornado',
        text: 'Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.',
        damage: '60',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'dp6-90',
    name: 'Cubone',
    nationalPokedexNumber: 104,
    imageUrl: 'https://images.pokemontcg.io/dp6/90.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/dp6/90_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '90',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'Diamond & Pearl',
    set: 'Legends Awakened',
    setCode: 'dp6',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Headbutt',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Bonemerang',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2
      }
    ],
    resistances: [
      {
        type: 'Lightning',
        value: '-20'
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '+10'
      }
    ]
  },
  {
    id: 'ex14-85',
    name: 'Windstorm',
    imageUrl: 'https://images.pokemontcg.io/ex14/85.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ex14/85_hires.png',
    supertype: 'Trainer',
    subtype: 'Item',
    hp: 'None',
    number: '85',
    artist: 'Ryo Ueda',
    rarity: 'Uncommon',
    series: 'EX',
    set: 'Crystal Guardians',
    setCode: 'ex14',
    text: [
      "Choose up to 2 in any combination of Pokémon Tool cards and Stadium cards in play (both yours and your opponent's) and discard them."
    ]
  },
  {
    id: 'ex8-100',
    name: 'Hariyama ex',
    nationalPokedexNumber: 297,
    imageUrl: 'https://images.pokemontcg.io/ex8/100.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ex8/100_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'EX',
    evolvesFrom: 'Makuhita',
    ability: {
      name: 'Commanding Aura',
      text: "As long as Hariyama ex is your Active Pokémon, your opponent can't play any Stadium cards from his or her hand.",
      type: 'Poké-Body'
    },
    hp: '110',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '100',
    artist: 'Ryo Ueda',
    rarity: 'Rare Holo EX',
    series: 'EX',
    set: 'Deoxys',
    setCode: 'ex8',
    text: [
      'When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards.'
    ],
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Knock Off',
        text: "Choose 1 card from your opponent's hand without looking and discard it.",
        damage: '40',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Pivot Throw',
        text: "During your opponent's next turn, any damage done to Hariyama ex by attacks is increased by 10 (before applying Weakness and Resistance).",
        damage: '80',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'xy7-10',
    name: 'Vespiquen',
    nationalPokedexNumber: 416,
    imageUrl: 'https://images.pokemontcg.io/xy7/10.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xy7/10_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Combee',
    hp: '90',
    number: '10',
    artist: 'kawayoo',
    rarity: 'Uncommon',
    series: 'XY',
    set: 'Ancient Origins',
    setCode: 'xy7',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Intelligence Gathering',
        text: 'You may draw cards until you have 6 cards in your hand.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Bee Revenge',
        text: 'This attack does 10 more damage for each Pokémon in your discard pile.',
        damage: '20+',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'xyp-XY05',
    name: 'Xerneas',
    nationalPokedexNumber: 716,
    imageUrl: 'https://images.pokemontcg.io/xyp/XY05.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xyp/XY05_hires.png',
    types: [
      'Fairy'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '130',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'XY05',
    artist: '5ban Graphics',
    rarity: 'Rare',
    series: 'XY',
    set: 'XY Black Star Promos',
    setCode: 'xyp',
    attacks: [
      {
        cost: [
          'Fairy'
        ],
        name: 'Geomancy',
        text: 'Choose 2 of your Benched Pokémon. For each of those Pokémon, search your deck for a Fairy Energy card and attach it to that Pokémon. Shuffle your deck afterward.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fairy',
          'Fairy',
          'Colorless'
        ],
        name: 'Rainbow Spear',
        text: 'Discard an Energy attached to this Pokémon.',
        damage: '100',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Darkness',
        value: '-20'
      }
    ],
    weaknesses: [
      {
        type: 'Metal',
        value: '×2'
      }
    ]
  },
  {
    id: 'ex16-1',
    name: 'Aggron',
    nationalPokedexNumber: 306,
    imageUrl: 'https://images.pokemontcg.io/ex16/1.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ex16/1_hires.png',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Lairon',
    ability: {
      name: 'Terraforming',
      text: "Once during your turn (before your attack), you may look at the top 5 cards from your deck and put them back on top of your deck in any order. This power can't be used if Aggron is affected by a Special Condition.",
      type: 'Poké-Power'
    },
    hp: '110',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 4,
    number: '1',
    artist: 'Ken Sugimori',
    rarity: 'Rare Holo',
    series: 'EX',
    set: 'Power Keepers',
    setCode: 'ex16',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Metal Claw',
        text: '',
        damage: '50',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Metal',
          'Metal',
          'Colorless',
          'Colorless'
        ],
        name: 'Mix-Up',
        text: 'Your opponent discards the top card of his or her deck.',
        damage: '70',
        convertedEnergyCost: 4
      }
    ],
    resistances: [
      {
        type: 'Grass',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'xy11-41',
    name: 'Joltik',
    nationalPokedexNumber: 595,
    imageUrl: 'https://images.pokemontcg.io/xy11/41.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xy11/41_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '30',
    number: '41',
    artist: 'Ayaka Yoshida',
    rarity: 'Common',
    series: 'XY',
    set: 'Steam Siege',
    setCode: 'xy11',
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Attach',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      }
    ],
    resistances: [
      {
        type: 'Metal',
        value: '-20'
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'xy7-21',
    name: 'Gyarados',
    nationalPokedexNumber: 130,
    imageUrl: 'https://images.pokemontcg.io/xy7/21.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xy7/21_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Magikarp',
    ancientTrait: {
      name: 'θ Double',
      text: 'This Pokémon may have up to 2 Pokémon Tool cards attached to it.'
    },
    hp: '130',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '21',
    artist: 'TOKIYA',
    rarity: 'Rare Holo',
    series: 'XY',
    set: 'Ancient Origins',
    setCode: 'xy7',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Full Retaliation',
        text: 'This attack does 30 more damage for each damage counter on each of your Benched Magikarp.',
        damage: '30+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Thrash',
        text: 'Flip a coin. If heads, this attack does 30 more damage. If tails, this Pokémon does 30 damage to itself.',
        damage: '100+',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'dp6-107',
    name: 'Misdreavus',
    nationalPokedexNumber: 200,
    imageUrl: 'https://images.pokemontcg.io/dp6/107.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/dp6/107_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '107',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Common',
    series: 'Diamond & Pearl',
    set: 'Legends Awakened',
    setCode: 'dp6',
    attacks: [
      {
        cost: [
          'Free'
        ],
        name: 'Show Off',
        text: 'Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.',
        damage: '',
        convertedEnergyCost: 0
      },
      {
        cost: [
          'Psychic'
        ],
        name: 'Payback',
        text: 'If your opponent has only 1 Prize card left, this attack does 10 damage plus 20 more damage.',
        damage: '10+',
        convertedEnergyCost: 1
      }
    ],
    resistances: [
      {
        type: 'Colorless',
        value: '-20'
      }
    ],
    weaknesses: [
      {
        type: 'Darkness',
        value: '+10'
      }
    ]
  },
  {
    id: 'xy0-14',
    name: 'Greninja',
    nationalPokedexNumber: 658,
    imageUrl: 'https://images.pokemontcg.io/xy0/14.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xy0/14_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Frogadier',
    hp: '140',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '14',
    artist: '5ban Graphics',
    rarity: '',
    series: 'XY',
    set: 'Kalos Starter Set',
    setCode: 'xy0',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Mat Block',
        text: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
        damage: '40',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless'
        ],
        name: 'Aqua Edge',
        text: '',
        damage: '80',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Grass',
        value: '×2'
      }
    ]
  }
]

export const setsMock = [
  {
    code: 'base1',
    ptcgoCode: 'BS',
    name: 'Base',
    series: 'Base',
    totalCards: 102,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '01/09/1999',
    symbolUrl: 'https://images.pokemontcg.io/base1/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/base1/logo.png',
    updatedAt: '05/01/2020 16:06:00'
  },
  {
    code: 'base2',
    ptcgoCode: 'JU',
    name: 'Jungle',
    series: 'Base',
    totalCards: 64,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '06/16/1999',
    symbolUrl: 'https://images.pokemontcg.io/base2/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/base2/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'basep',
    ptcgoCode: 'PR',
    name: 'Wizards Black Star Promos',
    series: 'Base',
    totalCards: 53,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '07/01/1999',
    symbolUrl: 'https://images.pokemontcg.io/basep/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/basep/logo.png',
    updatedAt: '03/07/2018 22:40:00'
  },
  {
    code: 'base3',
    ptcgoCode: 'FO',
    name: 'Fossil',
    series: 'Base',
    totalCards: 62,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '10/10/1999',
    symbolUrl: 'https://images.pokemontcg.io/base3/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/base3/logo.png',
    updatedAt: '02/08/2020 09:00:00'
  },
  {
    code: 'base4',
    ptcgoCode: 'B2',
    name: 'Base Set 2',
    series: 'Base',
    totalCards: 130,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '02/24/2000',
    symbolUrl: 'https://images.pokemontcg.io/base4/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/base4/logo.png',
    updatedAt: '02/13/2020 22:09:00'
  },
  {
    code: 'base5',
    ptcgoCode: 'TR',
    name: 'Team Rocket',
    series: 'Base',
    totalCards: 83,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '04/24/2000',
    symbolUrl: 'https://images.pokemontcg.io/base5/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/base5/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'gym1',
    ptcgoCode: 'G1',
    name: 'Gym Heroes',
    series: 'Gym',
    totalCards: 132,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '08/14/2000',
    symbolUrl: 'https://images.pokemontcg.io/gym1/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/gym1/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'gym2',
    ptcgoCode: 'G2',
    name: 'Gym Challenge',
    series: 'Gym',
    totalCards: 132,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '10/16/2000',
    symbolUrl: 'https://images.pokemontcg.io/gym2/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/gym2/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'neo1',
    ptcgoCode: 'N1',
    name: 'Neo Genesis',
    series: 'Neo',
    totalCards: 111,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '12/16/2000',
    symbolUrl: 'https://images.pokemontcg.io/neo1/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/neo1/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'neo2',
    ptcgoCode: 'N2',
    name: 'Neo Discovery',
    series: 'Neo',
    totalCards: 75,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '06/01/2001',
    symbolUrl: 'https://images.pokemontcg.io/neo2/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/neo2/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'si1',
    name: 'Southern Islands',
    series: 'Other',
    totalCards: 18,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '07/31/2001',
    symbolUrl: 'https://images.pokemontcg.io/si1/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/si1/logo.png',
    updatedAt: '01/28/2019 16:44:00'
  },
  {
    code: 'neo3',
    ptcgoCode: 'N3',
    name: 'Neo Revelation',
    series: 'Neo',
    totalCards: 66,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '09/21/2001',
    symbolUrl: 'https://images.pokemontcg.io/neo3/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/neo3/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'neo4',
    ptcgoCode: 'N4',
    name: 'Neo Destiny',
    series: 'Neo',
    totalCards: 113,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '02/28/2002',
    symbolUrl: 'https://images.pokemontcg.io/neo4/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/neo4/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'base6',
    ptcgoCode: 'LC',
    name: 'Legendary Collection',
    series: 'Base',
    totalCards: 110,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '05/24/2002',
    symbolUrl: 'https://images.pokemontcg.io/base6/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/base6/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'ecard1',
    ptcgoCode: 'EX',
    name: 'Expedition Base Set',
    series: 'E-Card',
    totalCards: 165,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '09/15/2002',
    symbolUrl: 'https://images.pokemontcg.io/ecard1/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ecard1/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'ecard2',
    ptcgoCode: 'AQ',
    name: 'Aquapolis',
    series: 'E-Card',
    totalCards: 186,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '01/15/2003',
    symbolUrl: 'https://images.pokemontcg.io/ecard2/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ecard2/logo.png',
    updatedAt: '11/29/2018 19:56:00'
  },
  {
    code: 'ecard3',
    ptcgoCode: 'SK',
    name: 'Skyridge',
    series: 'E-Card',
    totalCards: 182,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '05/12/2003',
    symbolUrl: 'https://images.pokemontcg.io/ecard3/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ecard3/logo.png',
    updatedAt: '11/29/2018 19:56:00'
  },
  {
    code: 'ex1',
    ptcgoCode: 'RS',
    name: 'Ruby & Sapphire',
    series: 'EX',
    totalCards: 109,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '07/01/2003',
    symbolUrl: 'https://images.pokemontcg.io/ex1/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex1/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'ex2',
    ptcgoCode: 'SS',
    name: 'Sandstorm',
    series: 'EX',
    totalCards: 100,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '09/18/2003',
    symbolUrl: 'https://images.pokemontcg.io/ex2/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex2/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'ex3',
    ptcgoCode: 'DR',
    name: 'Dragon',
    series: 'EX',
    totalCards: 97,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '09/18/2003',
    symbolUrl: 'https://images.pokemontcg.io/ex3/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex3/logo.png',
    updatedAt: '01/28/2019 16:44:00'
  },
  {
    code: 'np',
    ptcgoCode: 'PR-NP',
    name: 'Nintendo Black Star Promos',
    series: 'NP',
    totalCards: 40,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '10/01/2003',
    symbolUrl: 'https://images.pokemontcg.io/np/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/np/logo.png',
    updatedAt: '05/01/2020 16:06:00'
  },
  {
    code: 'ex4',
    ptcgoCode: 'MA',
    name: 'Team Magma vs Team Aqua',
    series: 'EX',
    totalCards: 95,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '03/01/2004',
    symbolUrl: 'https://images.pokemontcg.io/ex4/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex4/logo.png',
    updatedAt: '01/28/2019 16:44:00'
  },
  {
    code: 'ex5',
    ptcgoCode: 'HL',
    name: 'Hidden Legends',
    series: 'EX',
    totalCards: 101,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '06/01/2004',
    symbolUrl: 'https://images.pokemontcg.io/ex5/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex5/logo.png',
    updatedAt: '01/28/2019 16:44:00'
  },
  {
    code: 'pop1',
    name: 'POP Series 1',
    series: 'POP',
    totalCards: 17,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '09/01/2004',
    symbolUrl: 'https://images.pokemontcg.io/pop1/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/pop1/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'ex6',
    ptcgoCode: 'RG',
    name: 'FireRed & LeafGreen',
    series: 'EX',
    totalCards: 112,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '09/01/2004',
    symbolUrl: 'https://images.pokemontcg.io/ex6/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex6/logo.png',
    updatedAt: '01/28/2019 16:44:00'
  },
  {
    code: 'ex7',
    ptcgoCode: 'RR',
    name: 'Team Rocket Returns',
    series: 'EX',
    totalCards: 109,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '11/01/2004',
    symbolUrl: 'https://images.pokemontcg.io/ex7/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex7/logo.png',
    updatedAt: '01/28/2019 16:44:00'
  },
  {
    code: 'ex8',
    ptcgoCode: 'DX',
    name: 'Deoxys',
    series: 'EX',
    totalCards: 107,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '02/01/2005',
    symbolUrl: 'https://images.pokemontcg.io/ex8/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex8/logo.png',
    updatedAt: '01/28/2019 16:44:00'
  },
  {
    code: 'ex9',
    ptcgoCode: 'EM',
    name: 'Emerald',
    series: 'EX',
    totalCards: 106,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '05/01/2005',
    symbolUrl: 'https://images.pokemontcg.io/ex9/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex9/logo.png',
    updatedAt: '02/08/2020 09:00:00'
  },
  {
    code: 'pop2',
    name: 'POP Series 2',
    series: 'POP',
    totalCards: 17,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '08/01/2005',
    symbolUrl: 'https://images.pokemontcg.io/pop2/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/pop2/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'ex10',
    ptcgoCode: 'UF',
    name: 'Unseen Forces',
    series: 'EX',
    totalCards: 115,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '08/01/2005',
    symbolUrl: 'https://images.pokemontcg.io/ex10/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex10/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'ex11',
    ptcgoCode: 'DS',
    name: 'Delta Species',
    series: 'EX',
    totalCards: 113,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '10/31/2005',
    symbolUrl: 'https://images.pokemontcg.io/ex11/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex11/logo.png',
    updatedAt: '05/01/2020 16:06:00'
  },
  {
    code: 'ex12',
    ptcgoCode: 'LM',
    name: 'Legend Maker',
    series: 'EX',
    totalCards: 92,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '02/01/2006',
    symbolUrl: 'https://images.pokemontcg.io/ex12/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex12/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'pop3',
    name: 'POP Series 3',
    series: 'POP',
    totalCards: 17,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '04/01/2006',
    symbolUrl: 'https://images.pokemontcg.io/pop3/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/pop3/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'ex13',
    ptcgoCode: 'HP',
    name: 'Holon Phantoms',
    series: 'EX',
    totalCards: 110,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '05/01/2006',
    symbolUrl: 'https://images.pokemontcg.io/ex13/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex13/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'ex14',
    ptcgoCode: 'CG',
    name: 'Crystal Guardians',
    series: 'EX',
    totalCards: 100,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '08/01/2006',
    symbolUrl: 'https://images.pokemontcg.io/ex14/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex14/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'pop4',
    name: 'POP Series 4',
    series: 'POP',
    totalCards: 17,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '08/01/2006',
    symbolUrl: 'https://images.pokemontcg.io/pop4/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/pop4/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'ex15',
    ptcgoCode: 'DF',
    name: 'Dragon Frontiers',
    series: 'EX',
    totalCards: 101,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '11/01/2006',
    symbolUrl: 'https://images.pokemontcg.io/ex15/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex15/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'ex16',
    ptcgoCode: 'PK',
    name: 'Power Keepers',
    series: 'EX',
    totalCards: 108,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '02/02/2007',
    symbolUrl: 'https://images.pokemontcg.io/ex16/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/ex16/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'pop5',
    name: 'POP Series 5',
    series: 'POP',
    totalCards: 17,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '03/01/2007',
    symbolUrl: 'https://images.pokemontcg.io/pop5/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/pop5/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'dp1',
    ptcgoCode: 'DP',
    name: 'Diamond & Pearl',
    series: 'Diamond & Pearl',
    totalCards: 130,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '05/01/2007',
    symbolUrl: 'https://images.pokemontcg.io/dp1/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/dp1/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'dpp',
    ptcgoCode: 'PR-DPP',
    name: 'DP Black Star Promos',
    series: 'Diamond & Pearl',
    totalCards: 56,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '05/01/2007',
    symbolUrl: 'https://images.pokemontcg.io/dpp/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/dpp/logo.png',
    updatedAt: '05/01/2020 16:06:00'
  },
  {
    code: 'dp2',
    ptcgoCode: 'MT',
    name: 'Mysterious Treasures',
    series: 'Diamond & Pearl',
    totalCards: 123,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '08/01/2007',
    symbolUrl: 'https://images.pokemontcg.io/dp2/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/dp2/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'pop6',
    name: 'POP Series 6',
    series: 'POP',
    totalCards: 17,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '09/01/2007',
    symbolUrl: 'https://images.pokemontcg.io/pop6/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/pop6/logo.png',
    updatedAt: '05/01/2020 16:06:00'
  },
  {
    code: 'dp3',
    ptcgoCode: 'SW',
    name: 'Secret Wonders',
    series: 'Diamond & Pearl',
    totalCards: 132,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '11/01/2007',
    symbolUrl: 'https://images.pokemontcg.io/dp3/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/dp3/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'dp4',
    ptcgoCode: 'GE',
    name: 'Great Encounters',
    series: 'Diamond & Pearl',
    totalCards: 106,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '02/01/2008',
    symbolUrl: 'https://images.pokemontcg.io/dp4/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/dp4/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  },
  {
    code: 'pop7',
    name: 'POP Series 7',
    series: 'POP',
    totalCards: 17,
    standardLegal: false,
    expandedLegal: false,
    releaseDate: '03/01/2008',
    symbolUrl: 'https://images.pokemontcg.io/pop7/symbol.png',
    logoUrl: 'https://images.pokemontcg.io/pop7/logo.png',
    updatedAt: '03/04/2018 10:35:00'
  }
]
