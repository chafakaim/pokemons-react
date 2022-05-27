
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail.jsx'
import Edite from './pages/edite.jsx'
import Navbar from "./componenet/navbar.jsx";
import AddPokemon from './pages/addPokemon';
function App() {
  return (
    <div className="container">
      <Navbar/>    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/edite/:id' element={<Edite/>}/>
        <Route path='/addPokemon' element={<AddPokemon/>}/>
      </Routes>
    </div>
  );
}
export default App;
