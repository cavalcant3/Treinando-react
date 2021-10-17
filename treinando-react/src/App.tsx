import React, { useState } from 'react';
import Header from './components/Header'
import Menu from './components/Menu';


function App() {

  const [counter, setCounter] = useState(1);
  
  //incrementar
  function handleButtonClick(){
    setCounter(counter + 1);
    console.log(counter);
  }
  //diminuir
  function RemoveButtonClick(){
    setCounter(counter -1);
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
          {/* incrementar */}
          <button onClick={handleButtonClick}>Adicionar mais itens</button>

          <button onClick={RemoveButtonClick}>Remover mais itens</button>
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
