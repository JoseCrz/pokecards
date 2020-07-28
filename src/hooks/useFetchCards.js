import { useState, useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from '../config'

export const useFetchCards = pokemon => {
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState([])

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
