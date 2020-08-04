import React, { useState } from 'react'

import { Layout } from '../../components/Layout'
import { CardList } from '../../components/CardList'
import { BigCard } from '../../components/BigCard'

import { getFavs } from '../../utils/favUtils'

import { Grid, BannerContainer, CardListContainer, BigCardContainer } from './styles'

export const Favorites = () => {
  const [favs] = useState(getFavs())

  return (
    <Layout title='Favorites'>
      <Grid>
        <BannerContainer>
          <h1>Your favorites</h1>
        </BannerContainer>
        <CardListContainer>
          {
            favs.length > 0 ? <CardList cards={favs} /> : <h2>Looks like you don't have favorites yet</h2>
          }
        </CardListContainer>
        <BigCardContainer>
          <BigCard showOptions={false} />
        </BigCardContainer>
      </Grid>
    </Layout>
  )
}
