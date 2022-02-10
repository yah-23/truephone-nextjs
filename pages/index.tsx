import { Button, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Loading from '../components/Loading'

const Home: NextPage = () => {
  return (
    <Layout>
      <Loading />
    </Layout>
  )
}

export default Home