import { Box, Heading, Stack, Button, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useContext } from 'react'

import Layout from '../components/Layout'
import Loading from '../components/Loading'

import { FileContext } from '../contexts/FileContext'

const Home: NextPage = () => {
  const { loading, validateFile } = useContext(FileContext)
  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <Box textAlign={'center'} px={40}>
          <Stack direction={['column']} align={'center'} spacing={6}>
            <Heading fontSize={'4xl'} py={'2'}>
              Verifique a validade de uma lista de mensagens 👍
            </Heading>
            <Button onClick={() => validateFile()}>Selecionar Lista</Button>
            <Heading fontSize={'lg'}>
              Selecione um arquivo CSV para iniciar a verificação de uma lista
              com números e mensagens de SMS.
            </Heading>
            <Text fontSize={'sm'}>
              Use nosso{' '}
              <Box as={'span'} color={'blue.700'} textDecoration={'underline'}>
                modelo
              </Box>{' '}
              de arquivo se você tem alguma dúvidas.
            </Text>
          </Stack>
        </Box>
      )}
    </Layout>
  )
}

export default Home
