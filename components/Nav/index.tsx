import { Center, HStack, Text } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

const Nav = () => {
  return (
    <>
      <Center
        h={'76px'}
        as={'header'}
        position={'fixed'}
        bg={'white'}
        width={'100%'}
        boxShadow="md"
      >
        <HStack spacing="10px">
          <PhoneIcon w={42} h={42} color={'green.300'} />
          <Text
            fontWeight={'900'}
            fontSize={'36px'}
            lineHeight={'42px'}
            color={'blue.700'}
          >
            Truephone
          </Text>
        </HStack>
      </Center>
    </>
  )
}

export default Nav
