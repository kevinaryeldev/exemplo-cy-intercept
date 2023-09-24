import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'
const App = () => {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoutes />}>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
