import { ReactNode } from 'react'
import { Center } from '@chakra-ui/react'
import Head from 'next/head'

import Nav from '../Nav'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Truephone</title>
      </Head>
      <Nav />
      <Center bg={'gray.100'} w={'100vw'} h={'100vh'}>
        <Center
          bg={'white'}
          w={'59vw'}
          minH={'52vh'}
          borderRadius={'10px'}
          border={'4px'}
          borderColor={'blue.700'}
          py={'35px'}
        >
          {children}
        </Center>
      </Center>
    </>
  )
}

export default Layout
