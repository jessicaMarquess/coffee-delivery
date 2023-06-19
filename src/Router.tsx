import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './Layout/DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
