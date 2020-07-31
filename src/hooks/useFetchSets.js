import { useState, useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from '../config'

export const useFetchSets = () => {
  const [sets, setSets] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
