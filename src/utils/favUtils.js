export const addFav = ({ card }) => {
  // TODO: Duplicate Handling
  const favs = JSON.parse(window.localStorage.getItem('favs')) || []
  favs.push(card)
  window.localStorage.setItem('favs', JSON.stringify(favs))
}

export const getFavs = () => JSON.parse(window.localStorage.getItem('favs')) || []
