
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import OrderPage from './pages/OrderPage'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/ordertable" element={<OrderPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
