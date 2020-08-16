import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'
import { Layout } from '../../components/Layout'
import { Search } from '../../components/Search'
import { CardList } from '../../components/CardList'
import { BigCard } from '../../components/BigCard'
import { Loader } from '../../components/Loader'
import { BigCardModal } from '../../components/BigCardModal'

import { Grid, SearchContainer, CardContainer, CardsContainer } from './styles'

export const Home = () => {
  const { cards, cardsLoading, setCurrentCard, fetchCards, setIsFav, isModalOpen } = useContext(Context)

  useEffect(() => {
    setCurrentCard({})
    setIsFav(false)
    // the string with a space is to ensure Home cleans any other searchString
    fetchCards('')
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
      <BigCardModal isOpen={isModalOpen} />
    </Layout>
  )
}
