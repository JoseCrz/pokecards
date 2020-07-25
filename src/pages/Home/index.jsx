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
  }
]

export const Home = () => {
  return (
    <Layout title='Home'>
      <CardList cards={testData} />
    </Layout>
  )
}
