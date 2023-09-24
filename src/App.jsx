import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import Login from './pages/Login'
import Home from './pages/Home'
import { AuthProvider } from './context/AuthContext'
import './App.css'

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />     
          <Route element={<PrivateRoutes />}>
            <Route path='/home' element={<Home />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
