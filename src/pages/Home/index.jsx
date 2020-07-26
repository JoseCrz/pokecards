import React from 'react'
import { Layout } from '../../components/Layout'
import { CardList } from '../../components/CardList'

import { dataMock } from '../../mocks/dataMock'

import { Grid, Column } from './styles'

export const Home = () => {
  return (
    <Layout title='Home'>
      <Grid>
        <Column>
          <CardList cards={dataMock} />
        </Column>
      </Grid>
    </Layout>
  )
}
