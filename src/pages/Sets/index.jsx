import React from 'react'

import { Layout } from '../../components/Layout'
import { SetList } from '../../components/SetList'

import { SetListContainer } from './styles'

import { setsMock } from '../../mocks/dataMock'

export const Sets = () => {
  return (
    <Layout title='Sets'>
      <SetListContainer>
        <SetList sets={setsMock} />
      </SetListContainer>
    </Layout>
  )
}
