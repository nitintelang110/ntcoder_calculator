
import './App.css'
import { Agecalculator } from './component/Agecalculator'
import { Calculator } from './component/calculator'
import {Routes,Route} from 'react-router-dom';

function App() {
 

  return (
    <>
    <Routes>
      <Route path = '/' element = {<Calculator/>} />
      <Route path = '/agecalculator' element = {<Agecalculator/>} />
   </Routes>
    
    </>
  )
}

export default App
