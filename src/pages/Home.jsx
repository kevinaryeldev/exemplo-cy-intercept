import {
  Box,Stack
} from '@chakra-ui/react'
import './Home.css'

import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


const Home = () => {
  const {user} = useContext(AuthContext)

  return (
    <>
     <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} minW={'100vw'}>
        <Box minW='full' minH='full' display='flex'>
          <Box id="decoration" minW='full' minH='full' position='absolute'/>
          <Box bg='white' margin='10px' id="text-container">
            <h1 id="welcome-text" color='black' fontSize='30px'>Bem Vindo!</h1>
            <p  id="welcome-text-user"color='black' fontSize='20px' >{user.name}</p>
          </Box>
        </Box>
     </Stack>
      
    </>
  )
}

export default Home