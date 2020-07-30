import React from 'react'

import { Layout } from '../../components/Layout'
import { SetList } from '../../components/SetList'

import { setsMock } from '../../mocks/dataMock'

export const Sets = () => {
  return (
    <Layout title='Sets'>
      <SetList sets={setsMock} />
    </Layout>
  )
}
