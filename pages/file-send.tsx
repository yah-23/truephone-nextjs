import type { NextPage } from 'next'
import { useContext } from 'react'

import { FileContext } from '../contexts/FileContext'

import Layout from '../components/Layout'

const FileSend: NextPage = () => {
  const { validatedData } = useContext(FileContext)
  return (
    <Layout>
      <h1>TEste</h1>
    </Layout>
  )
}

export default FileSend
