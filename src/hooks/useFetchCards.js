import { useEffect, useContext } from 'react'
import axios from 'axios'
import { Context } from '../Context'
import { apiUrl } from '../config'

export const useFetchCards = () => {
  const { cards, setCards, cardsLoading, setCardsLoading } = useContext(Context)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { cards } } = await axios.get(apiUrl)

        setCards(cards)
        setCardsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return { cardsLoading, cards }
}
