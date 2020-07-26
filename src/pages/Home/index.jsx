import React from 'react'
import { Layout } from '../../components/Layout'
import { CardList } from '../../components/CardList'

const testData = [
  {
    id: 'pl4-30',
    name: 'Sceptile',
    nationalPokedexNumber: 254,
    imageUrl: 'https://images.pokemontcg.io/pl4/30.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/pl4/30_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Grovyle',
    ability: {
      name: 'Green Breath',
      text: 'When you attach a Grass Energy card from your hand to Sceptile, remove 2 damage counters from Sceptile.',
      type: 'Poké-Body'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '30',
    artist: 'Reiko Tanoue',
    rarity: 'Rare',
    series: 'Platinum',
    set: 'Arceus',
    setCode: 'pl4',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Leaf Blast',
        text: 'Does 20 damage times the amount of Grass Energy attached to Sceptile.',
        damage: '20×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Poison Claws',
        text: 'The Defending Pokémon is now Poisoned.',
        damage: '60',
        convertedEnergyCost: 4
      }
    ],
    resistances: [
      {
        type: 'Water',
        value: '-20'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '+30'
      }
    ]
  },
  {
    id: 'pop4-5',
    name: 'Sceptile',
    nationalPokedexNumber: 254,
    imageUrl: 'https://images.pokemontcg.io/pop4/5.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/pop4/5_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Grovyle',
    ability: {
      name: 'Energy Trans',
      text: "As often as you like during your turn (before your attack), move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Sceptile is affected by a Special Condition.",
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '5',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'POP',
    set: 'POP Series 4',
    setCode: 'pop4',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Tail Rap',
        text: 'Flip 2 coins. This attack does 50 damage times the number of heads.',
        damage: '50×',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Water',
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
    id: 'dp7-10',
    name: 'Sceptile',
    nationalPokedexNumber: 254,
    imageUrl: 'https://images.pokemontcg.io/dp7/10.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/dp7/10_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Grovyle',
    ability: {
      name: 'Energy Trans',
      text: "As often as you like during your turn (before your attack), move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Sceptile is affected by a Special Condition.",
      type: 'Poké-Power'
    },
    hp: '110',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '10',
    artist: 'Suwama Chiaki',
    rarity: 'Rare Holo',
    series: 'Diamond & Pearl',
    set: 'Stormfront',
    setCode: 'dp7',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Poison Leaf',
        text: 'The Defending Pokémon is now Poisoned.',
        damage: '40',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Slice Drain',
        text: 'Remove 2 damage counters from Sceptile.',
        damage: '60',
        convertedEnergyCost: 4
      }
    ],
    resistances: [
      {
        type: 'Water',
        value: '-20'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '+30'
      }
    ]
  },
  {
    id: 'pl4-30',
    name: 'Sceptile',
    nationalPokedexNumber: 254,
    imageUrl: 'https://images.pokemontcg.io/pl4/30.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/pl4/30_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Grovyle',
    ability: {
      name: 'Green Breath',
      text: 'When you attach a Grass Energy card from your hand to Sceptile, remove 2 damage counters from Sceptile.',
      type: 'Poké-Body'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '30',
    artist: 'Reiko Tanoue',
    rarity: 'Rare',
    series: 'Platinum',
    set: 'Arceus',
    setCode: 'pl4',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Leaf Blast',
        text: 'Does 20 damage times the amount of Grass Energy attached to Sceptile.',
        damage: '20×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Poison Claws',
        text: 'The Defending Pokémon is now Poisoned.',
        damage: '60',
        convertedEnergyCost: 4
      }
    ],
    resistances: [
      {
        type: 'Water',
        value: '-20'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '+30'
      }
    ]
  },
  {
    id: 'pop4-5',
    name: 'Sceptile',
    nationalPokedexNumber: 254,
    imageUrl: 'https://images.pokemontcg.io/pop4/5.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/pop4/5_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Grovyle',
    ability: {
      name: 'Energy Trans',
      text: "As often as you like during your turn (before your attack), move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Sceptile is affected by a Special Condition.",
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '5',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'POP',
    set: 'POP Series 4',
    setCode: 'pop4',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Tail Rap',
        text: 'Flip 2 coins. This attack does 50 damage times the number of heads.',
        damage: '50×',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Water',
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
    id: 'dp7-10',
    name: 'Sceptile',
    nationalPokedexNumber: 254,
    imageUrl: 'https://images.pokemontcg.io/dp7/10.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/dp7/10_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Grovyle',
    ability: {
      name: 'Energy Trans',
      text: "As often as you like during your turn (before your attack), move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Sceptile is affected by a Special Condition.",
      type: 'Poké-Power'
    },
    hp: '110',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '10',
    artist: 'Suwama Chiaki',
    rarity: 'Rare Holo',
    series: 'Diamond & Pearl',
    set: 'Stormfront',
    setCode: 'dp7',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Poison Leaf',
        text: 'The Defending Pokémon is now Poisoned.',
        damage: '40',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Slice Drain',
        text: 'Remove 2 damage counters from Sceptile.',
        damage: '60',
        convertedEnergyCost: 4
      }
    ],
    resistances: [
      {
        type: 'Water',
        value: '-20'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '+30'
      }
    ]
  }
]

export const Home = () => {
  return (
    <Layout title='Home'>
      <CardList cards={testData} />
    </Layout>
  )
}
