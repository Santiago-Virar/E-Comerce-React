import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Mi Tienda!" />
    </div>
  );
}

export default App;

