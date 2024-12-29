import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './components/layout/layout.component'
import Home from './components/home/home.component'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
