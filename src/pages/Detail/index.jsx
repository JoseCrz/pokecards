import React from 'react'

import { Layout } from '../../components/Layout'
import { BigCard } from '../../components/BigCard'

import { Grid, Column } from './styles'

export const Detail = () => {
  return (
    <Layout title='Detail'>
      <Grid>
        <Column />
        <Column>
          <BigCard />
        </Column>
      </Grid>
    </Layout>
  )
}
