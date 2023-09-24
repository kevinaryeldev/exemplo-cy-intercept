import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Box
} from '@chakra-ui/react'
import './Login.css'

const Login = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} minW={'100vw'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'} id='login-camp'>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Faça login no nosso sistema!</Heading>
          <FormControl id="email">
            <FormLabel>Usuário</FormLabel>
            <Input type='text' />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme={'blue'} variant={'solid'}>
              Entrar
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} maxWidth="full">
        <Box id="login-image"
        boxSize="full"
        width="100%"
          alt={'Login Image'
          }
        />
      </Flex>
    </Stack>
  )
}
export default Login