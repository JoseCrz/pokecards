import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [bigPicture, setBigPicture] = useState(null)
  const [thumbPicture, setThumbPicture] = useState(null)
  const [bigPictureLoaded, setBigPictureLoaded] = useState(false)
  const [detailId, setDetailId] = useState('')

  const value = {
    bigPicture,
    setBigPicture,
    bigPictureLoaded,
    setBigPictureLoaded,
    thumbPicture,
    setThumbPicture,
    detailId,
    setDetailId
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
