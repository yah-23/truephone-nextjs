import { 
  Stack ,
  Text,
  Link as ChakraLink,
  Box
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import  Link from "next/link"

import Layout from '../components/Layout'

const FileSave: NextPage = () => {
  return (
    <Layout>
      <Stack direction={['column']} spacing={'24px'} align={'center'}>
        <Box px={'25px'}>
          <Stack direction={['column']} spacing={'40px'} align={'center'}>
            <Text
              fontSize={'36px'}
              lineHeight={'42px'}
              fontWeight={'bold'}
              color={'purple.700'}
            >
              É isso aí! 🚀 
            </Text>
            <Text
              fontSize={'36px'}
              lineHeight={'36px'}
              fontWeight={'bold'}
              color={'black'}
              align={'center'}
            >
              Sua lista está pronta para entrar em produção! 
            </Text>
          </Stack>
        </Box>
        <Box w={'60%'}>
          <Text
            fontSize={'18px'}
            lineHeight={'20px'}
            color={'black'}
            align={'center'}
          >
            Já guardamos todos as mensagens válidas para que você possa usá-las em uma campanha no futuro.
          </Text>
        </Box>
        <Box w='273px' h='16px'>
          <Text
            fontSize={'14px'}
            lineHeight={'16px'}
            color={'black'}
            align={'center'}
          >
            <ChakraLink color={'purple.700'} href={'/'}>Voltar ao início</ChakraLink> para iniciar outra verificação
          </Text>
        </Box>
      </Stack>
    </Layout>
  )
}

export default FileSave
