import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Box
} from '@chakra-ui/react'
import './Login.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../utils/schemas'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {

  const {handleLogin} = useContext(AuthContext)

  const { register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(loginSchema)})


  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} minW={'100vw'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'} id='login-camp'>
        <Stack spacing={4} w={'full'} maxW={'md'} as='form' onSubmit={handleSubmit((data)=> handleLogin(data))}>
          <Heading fontSize={'2xl'}>Faça login no nosso sistema!</Heading>
          <FormControl id="email">
            <FormLabel>Usuário</FormLabel>
            <Input type='text' {...register("usuario")} isInvalid={!!errors.usuario} />
            {!!errors.usuario?
            <Text color="red" fontSize="sm" margin={'0'}>{errors.usuario.message}</Text>
            :<></>
            }
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input type="password" {...register("senha")} isInvalid={!!errors.senha}/>
            {!!errors.senha?
            <Text color="red" fontSize="sm" margin={"0"}>{errors.senha.message}</Text>:
            <></>
            }
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme={'blue'} variant={'solid'} type='submit'>
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