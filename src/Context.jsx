import React, { createContext, useState } from 'react'
import axios from 'axios'
import { apiUrl } from './config'
export const Context = createContext()

const Provider = ({ children }) => {
  const [bigPictureLoaded, setBigPictureLoaded] = useState(false)
  const [currentCard, setCurrentCard] = useState({})
  const [cards, setCards] = useState([])
  const [currentSet, setCurrentSet] = useState({})
  const [isSetLoading, setIsSetLoading] = useState(false)
  const [searchString, setSearchString] = useState('')
  const [cardsLoading, setCardsLoading] = useState(true)
  const [favs, setFavs] = useState(() => JSON.parse(window.localStorage.getItem('favs')) || [])
  const [isFav, setIsFav] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const addFav = ({ card }) => {
    const ids = favs.map(fav => fav.id)

    if (!ids.includes(card.id)) {
      const newFavs = [...favs, card]
      window.localStorage.setItem('favs', JSON.stringify(newFavs))
      setFavs(newFavs)
    }
  }

  const deleteFav = ({ card }) => {
    const newFavs = favs.filter(fav => fav.id !== card.id)
    window.localStorage.setItem('favs', JSON.stringify(newFavs))
    setFavs(newFavs)
  }

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
    currentSet,
    setCurrentSet,
    isSetLoading,
    setIsSetLoading,
    isModalOpen,
    isFav,
    setIsFav,
    favs,
    toggleFav: ({ card }) => {
      favs.map(fav => fav.id).includes(card.id) ? deleteFav({ card }) : addFav({ card })
    },
    fetchCards: async (enforcedString, searchType = 'name') => {
      setCardsLoading(true)
      try {
        if (enforcedString) setSearchString(enforcedString)
        const { data: { cards } } = await axios.get(`${apiUrl}/cards?${searchType}=${enforcedString || searchString}`) // this || is to ensure the request is done right
        setCards(cards)
        setCardsLoading(false)
      } catch (error) {
        console.log(error)
      }
    },
    fetchSet: async (setCode) => {
      try {
        setIsSetLoading(true)
        const { data: { set } } = await axios.get(`${apiUrl}/sets/${setCode}`)
        setCurrentSet(set)
        setIsSetLoading(false)
      } catch (error) {
        console.log(error)
      }
    },
    activateModal: () => window.screen.width <= 540 && setIsModalOpen(true),
    deactivateModal: () => setIsModalOpen(false)
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
