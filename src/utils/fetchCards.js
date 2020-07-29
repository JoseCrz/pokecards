import axios from 'axios'
import { apiUrl } from '../config'

export const fetchCards = async pokemon => {
  try {
    const { data: { cards } } = await axios.get(`${apiUrl}?name=${pokemon}`)
    return cards
  } catch (error) {
    console.log(error)
  }
}
