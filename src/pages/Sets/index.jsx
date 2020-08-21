import React from 'react'

import { Layout } from '../../components/Layout'
import { SetList } from '../../components/SetList'
import { Loader } from '../../components/Loader'

import { useFetchSets } from '../../hooks/useFetchSets'

import { SetListContainer } from './styles'

const Sets = () => {
  const { loading, sets } = useFetchSets()

  return (
    <Layout title='Sets'>
      <SetListContainer>
        {
          loading ? <Loader /> : <SetList sets={sets} />
        }
      </SetListContainer>
    </Layout>
  )
}

export default Sets
