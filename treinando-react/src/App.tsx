import React, { useState } from 'react';
import Header from './components/Header'
import Menu from './components/Menu';


function App() {

  const [counter, setCounter] = useState(0);

  function Incrementar(){
    setCounter(counter + 1);
    console.log(counter);
  }
  function Diminuir(){
    setCounter(counter - 1);
    console.log(counter);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* passando parametro */}
      <Header title="Matheus" subtitle="Cavalcante"/>
        <p>
          E ai pessoal
        </p>
          <p> { counter } </p>
          <button onClick= {Incrementar} >Adicionar mais um item ao carrinho</button>
          <button onClick= {Diminuir} >Remover mais um item ao carrinho</button>
          
        <Menu>
          <ul>
            <li>Cardapio</li>
            <li>Lagosta</li>
            <li>Camarao</li>
          </ul>
        </Menu>
        
      </header>
    </div>
  );
}

export default App;
