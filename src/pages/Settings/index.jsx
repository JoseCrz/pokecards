import React from 'react'

import { Layout } from '../../components/Layout'
import { PaletteList } from '../../components/PaletteList'

import { H1, ListGrid } from './styles'

export const Settings = () => {
  return (
    <Layout title='Settings'>
      <div>
        <H1>Select a theme</H1>
        <ListGrid>
          <PaletteList />
        </ListGrid>
      </div>
    </Layout>
  )
}
