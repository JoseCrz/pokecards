import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [bigPicture, setBigPicture] = useState(null)

  const value = {
    bigPicture,
    setBigPicture
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
