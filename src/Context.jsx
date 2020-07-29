import React, { createContext, useState } from 'react'
import axios from 'axios'
import { apiUrl } from './config'
export const Context = createContext()

const Provider = ({ children }) => {
  const [bigPictureLoaded, setBigPictureLoaded] = useState(false)
  const [currentCard, setCurrentCard] = useState(null)
  const [cards, setCards] = useState([])
  const [searchString, setSearchString] = useState('')
  const [cardsLoading, setCardsLoading] = useState(true)

  const value = {
    bigPictureLoaded,
    setBigPictureLoaded,
    currentCard,
    setCurrentCard,
    cards,
    setCards,
    searchString,
    setSearchString,
    cardsLoading,
    setCardsLoading,
    fetchCards: async () => {
      setCardsLoading(true)
      try {
        const { data: { cards } } = await axios.get(`${apiUrl}?name=${searchString}`)
        setCards(cards)
        setCardsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Context.Provider value={value}>
      {
        children
      }
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
