import { Box, Heading, Stack, Spinner, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Loading = () => {
  return (
    <Box textAlign={'center'}>
      <Stack direction={['column']} align={'center'} spacing={8} px={10}>
        <Heading fontSize={'4xl'}>
          {`Estamos verificando todas as mensagens em seu arquivo...`}
        </Heading>
        {/**TROCAR A COR DO SPINNER */}
        <Spinner size={'lg'} />
        <Text fontSize={'sm'}>
          Você quer{' '}
          <NextLink href="/" passHref>
            <Link color={'blue.700'}>cancelar e voltar ao início?</Link>
          </NextLink>
        </Text>
      </Stack>
    </Box>
  )
}

export default Loading
