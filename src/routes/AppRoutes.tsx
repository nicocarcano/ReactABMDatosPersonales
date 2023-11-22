import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import DatosPersonales from "../pages/DatosPersonales"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/datosPersonales' element={<DatosPersonales/>}/>
    </Routes>
  )
}

export default AppRoutes;