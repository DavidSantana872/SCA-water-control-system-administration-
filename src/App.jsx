import './App.css';
import SelectOption from './components/SelectOpcion';
import GenerarPago from './components/GenerarPago';
import EstadoUsuarioComponente from "./components/EstadoUsuarioComponente"
import EstadosGenerales from "./components/EstadosGenerales"
import Componente4 from "./components/Componente4"
import Componente5 from "./components/Componente5"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element = {<SelectOption></SelectOption>}/>
          <Route path='/GenerarPago' element = {<GenerarPago/>}/>
          <Route path='/EstadoUsuario' element = {<EstadoUsuarioComponente/>}/>
          <Route path='/EstadosGenerales' element = {<EstadosGenerales/>}/>
          <Route path='/ImportarMediciones' element = {<Componente4/>}/>
          <Route path='/UsuariosEnCorte' element = {<Componente5/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
