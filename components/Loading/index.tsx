import { Box, Heading, Stack, Spinner, Text } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Box textAlign={'center'}>
      <Stack direction={['column']} align={'center'} spacing={8} px={10}>
        <Heading size={'xl'}>
          {' '}
          {`Estamos verificando todas as mensagens em seu arquivo...`}
        </Heading>
        <Spinner size={'lg'} />
        <Text>Você quer cancelar e voltar ao início?</Text>
      </Stack>
    </Box>
  )
}

export default Loading
