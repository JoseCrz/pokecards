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
  }
]
