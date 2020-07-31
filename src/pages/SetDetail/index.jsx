import React, { useContext } from 'react'
import { Context } from '../../Context'

import { Layout } from '../../components/Layout'
import { SetBanner } from '../../components/SetBanner'
import { CardList } from '../../components/CardList'
import { BigCard } from '../../components/BigCard'

import { Grid, BannerContainer, CardListContainer, BigCardContainer } from './style'

export const SetDetail = () => {
  const { currentSet } = useContext(Context)
  const { name } = currentSet

  return (
    <Layout title={name || 'Set'}>
      <Grid>
        <BannerContainer>
          <SetBanner {...currentSet} />
        </BannerContainer>
        <CardListContainer>
          <CardList />
        </CardListContainer>
        <BigCardContainer>
          <BigCard />
        </BigCardContainer>
      </Grid>
    </Layout>
  )
}
