import React from 'react';
import Header from './components/Header'
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* passando parametro */}
      <Header title="Matheus" subtitle="Cavalcante"/>
        <p>
          E ai pessoal
        </p>

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
