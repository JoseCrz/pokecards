import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'
import { Layout } from '../../components/Layout'
import { Search } from '../../components/Search'
import { CardList } from '../../components/CardList'
import { BigCard } from '../../components/BigCard'
import { Loader } from '../../components/Loader'
import { GitHubCorner } from '../../components/GitHubCorner'

import { Grid, SearchContainer, CardContainer, CardsContainer } from './styles'

const Home = () => {
  const { cards, cardsLoading, setCurrentCard, fetchCards, setIsFav } = useContext(Context)

  useEffect(() => {
    setCurrentCard({})
    setIsFav(false)
    // the string with a space is to ensure Home cleans any other searchString
    fetchCards('')
  }, [])

  return (
    <Layout title='Home'>
      <GitHubCorner />
      <Grid>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <CardsContainer>
          {
            cardsLoading ? <Loader /> : <CardList cards={cards} />
          }
        </CardsContainer>
        <CardContainer>
          <BigCard />
        </CardContainer>
      </Grid>
    </Layout>
  )
}

export default Home
