import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [bigPictureLoaded, setBigPictureLoaded] = useState(false)
  const [currentCard, setCurrentCard] = useState(null)
  const [cards, setCards] = useState([])

  const value = {
    bigPictureLoaded,
    setBigPictureLoaded,
    currentCard,
    setCurrentCard,
    cards,
    setCards
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
