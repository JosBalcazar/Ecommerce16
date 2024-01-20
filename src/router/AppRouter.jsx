import { Route, Routes } from 'react-router-dom'
import { CarritoRoutes } from '../routes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<CarritoRoutes/>} />
      </Routes>
    </>
  )
}