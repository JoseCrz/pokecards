import React from 'react'

import { Layout } from '../../components/Layout'
import { PaletteList } from '../../components/PaletteList'

import { H1, PaletteListContainer, Container } from './styles'

export const Settings = () => {
  return (
    <Layout title='Settings'>
      <Container>
        <H1>Select a theme</H1>
        <PaletteListContainer>
          <PaletteList />
        </PaletteListContainer>
      </Container>
    </Layout>
  )
}
