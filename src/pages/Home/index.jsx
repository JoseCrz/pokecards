import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'
import { Layout } from '../../components/Layout'
import { Search } from '../../components/Search'
import { CardList } from '../../components/CardList'
import { BigCard } from '../../components/BigCard'
import { Loader } from '../../components/Loader'

import { Grid, SearchContainer, CardContainer, CardsContainer } from './styles'

export const Home = () => {
  const { cards, cardsLoading, fetchCards } = useContext(Context)
  // TODO: FIX SetDetail to Home Cards Bug
  // ! It has to do with the searchString state

  useEffect(() => {
    fetchCards()
  }, [])

  return (
    <Layout title='Home'>
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
