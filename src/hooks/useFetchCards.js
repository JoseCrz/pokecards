import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Context } from '../Context'
import { apiUrl } from '../config'

export const useFetchCards = pokemon => {
  const [loading, setLoading] = useState(true)
  const { cards, setCards } = useContext(Context)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { cards } } = await axios.get(apiUrl)

        setCards(cards)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return { loading, cards }
}
