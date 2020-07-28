import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Layout } from '../../components/Layout'
import { Search } from '../../components/Search'
import { CardList } from '../../components/CardList'
import { BigCard } from '../../components/BigCard'
import { Loader } from '../../components/Loader'
import { apiUrl } from '../../config'

import { Grid, SearchContainer, CardContainer, CardsContainer } from './styles'

export const Home = () => {
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

  return (
    <Layout title='Home'>
      <Grid>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <CardsContainer>
          {
            loading ? <Loader /> : <CardList cards={cards} />
          }
        </CardsContainer>
        <CardContainer>
          <BigCard />
        </CardContainer>
      </Grid>
    </Layout>
  )
}
