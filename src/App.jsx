import { Router, Routes } from 'react-router-dom'

const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
