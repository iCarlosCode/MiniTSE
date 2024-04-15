import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect, useRef } from 'react'; 
import './styles.css'
import Fim from './Fim';
import Tela from './Tela';
import Teclado from './Teclado';
import sound from './fim.mp3'

var fim = false
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App() {
  const [fim, setFim] = useState(false);

  const finalizar = (e) => {
    setFim(e)
    const div = document.getElementById('Teclado');
    div.setAttribute('disabled', true);
    div.style.pointerEvents = 'none';
    div.style.opacity = '0.5';
    new Audio(sound).play()
  }
  
  return (
    <div className='App'>
      
      {!fim && <Tela />}
      {fim && <Fim />}
      <Teclado finalizar={finalizar}/>
    </div>);
}
root.render(<App/>);
