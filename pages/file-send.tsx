import type { NextPage } from 'next'
import { useContext } from 'react'

import { FileContext } from '../contexts/FileContext'

import Layout from '../components/Layout'
import {
  Box,
  Button,
  Heading,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Flex,
  Spacer,
  Spinner,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

const FileSend: NextPage = () => {
  const { total, validatedData, handleToHome, handleSaveFile } =
    useContext(FileContext)

  return (
    <Layout>
      {validatedData.length > 0 ? (
        <Box textAlign={'center'} px={[0, 6, 12, 20]}>
          <Stack direction={'column'} spacing={6} align={'center'}>
            <Heading fontSize={['xl', '2xl', '4xl']} p={2}>
              Encontramos{' '}
              <Box as={'span'} color={'green.300'}>
                {total}
              </Box>{' '}
              mensagens válidas em sua lista 🎉
            </Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Número</Th>
                  <Th>Prévia da Mensagem</Th>
                  <Th>Resultado</Th>
                </Tr>
              </Thead>
              <Tbody>
                {validatedData?.map((data, i) => {
                  return (
                    <>
                      <Tr key={i}>
                        <Th>{data.phone}</Th>
                        <Th>{`${data.message.slice(0, 33)}...`}</Th>
                        <Th>
                          <Flex>
                            {data.valid ? `Válido` : `Inválido`} <Spacer />
                            {data.valid ? (
                              <CheckIcon color={'green.300'} />
                            ) : (
                              <CloseIcon color={'red.500'} />
                            )}
                          </Flex>
                        </Th>
                      </Tr>
                    </>
                  )
                })}
              </Tbody>
            </Table>
            <Heading fontSize={'2xl'} p={2}>
              Está pronto para prosseguir? 🤔
            </Heading>
            <Stack direction={'row'} spacing={5}>
              <Button
                rightIcon={<CloseIcon />}
                variant={'outline'}
                onClick={handleToHome}
              >
                Cancelar
              </Button>
              <Button
                onClick={() => handleSaveFile()}
                rightIcon={<CheckIcon />}
              >
                Salvar
              </Button>
            </Stack>
          </Stack>
        </Box>
      ) : (
        <Spinner />
      )}
    </Layout>
  )
}

export default FileSend
