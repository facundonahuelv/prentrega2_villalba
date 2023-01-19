import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Componentes/ItemListContainer/itemListContainer';
import navBar from './Componentes/navBar/navBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={itemListContainer}/>
          <Route path='/category/:category' element={<itemListContainer/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
