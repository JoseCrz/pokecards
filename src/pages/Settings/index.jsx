import React from 'react'

import { Layout } from '../../components/Layout'
import { ThemeSwitcher } from '../../components/ThemeSwitcher'

export const Settings = () => {
  return (
    <Layout title='Settings'>
      <ThemeSwitcher />
    </Layout>
  )
}
