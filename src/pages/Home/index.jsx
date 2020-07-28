import React from 'react'
import { Layout } from '../../components/Layout'
import { Search } from '../../components/Search'
import { CardList } from '../../components/CardList'
import { BigCard } from '../../components/BigCard'

import { dataMock } from '../../mocks/dataMock'

import { Grid, SearchContainer, CardContainer, CardsContainer } from './styles'

export const Home = () => {
  return (
    <Layout title='Home'>
      <Grid>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <CardsContainer>
          <CardList cards={dataMock} />
        </CardsContainer>
        <CardContainer>
          <BigCard />
        </CardContainer>
      </Grid>
    </Layout>
  )
}
