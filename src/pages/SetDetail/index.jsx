import React, { useContext } from 'react'
import { Context } from '../../Context'

import { Layout } from '../../components/Layout'
import { SetBanner } from '../../components/SetBanner'

import { } from './style'

export const SetDetail = () => {
  const { currentSet } = useContext(Context)
  const { name } = currentSet

  return (
    <Layout title={name || 'Set name'}>
      <SetBanner {...currentSet} />
    </Layout>
  )
}
