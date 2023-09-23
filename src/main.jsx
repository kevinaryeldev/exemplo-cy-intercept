import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import CustomToastContainer from './components/CustomToastContainer.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
    <CustomToastContainer/>
  </React.StrictMode>
)
