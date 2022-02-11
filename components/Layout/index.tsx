import { ReactNode } from 'react'
import { Center, Box } from '@chakra-ui/react'
import Head from 'next/head'

import Nav from '../Nav'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Truephone</title>
      </Head>
      <Nav />
      <Box
        bg={'gray.100'}
        w={'full'}
        minH={'100vh'}
        pt={40}
        px={[2, 6, 20, 60]}
      >
        <Center>
          <Center
            bg={'white'}
            minH={'52vh'}
            borderRadius={'10px'}
            border={'4px'}
            borderColor={'blue.700'}
            py={'35px'}
          >
            {children}
          </Center>
        </Center>
      </Box>
    </>
  )
}

export default Layout
