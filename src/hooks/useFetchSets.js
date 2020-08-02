import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Context } from '../Context'
import { apiUrl } from '../config'

export const useFetchSets = () => {
  const { setCurrentCard } = useContext(Context)
  const [sets, setSets] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setCurrentCard({})
    const fetchData = async () => {
      try {
        const { data: { sets } } = await axios.get(`${apiUrl}/sets`)
        setSets(sets)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return { loading, sets }
}
