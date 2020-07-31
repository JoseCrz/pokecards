import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'

import { Layout } from '../../components/Layout'
import { SetBanner } from '../../components/SetBanner'
import { CardList } from '../../components/CardList'
import { BigCard } from '../../components/BigCard'
import { Loader } from '../../components/Loader'

import { Grid, BannerContainer, CardListContainer, BigCardContainer } from './style'

export const SetDetail = () => {
  const { currentSet, cards, cardsLoading, fetchCards } = useContext(Context)
  const { name, code } = currentSet

  useEffect(() => {
    fetchCards(code, 'setCode')
  }, [])

  return (
    <Layout title={name || 'Set'}>
      <Grid>
        <BannerContainer>
          <SetBanner {...currentSet} />
        </BannerContainer>
        <CardListContainer>
          {
            cardsLoading ? <Loader /> : <CardList cards={cards} />
          }
        </CardListContainer>
        <BigCardContainer>
          <BigCard />
        </BigCardContainer>
      </Grid>
    </Layout>
  )
}
