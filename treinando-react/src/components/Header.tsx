import React from 'react';


//informando o tipo de propriedade que deve-se receber. 
interface HeaderProps{
  title: string;
  // esse sinal ? torna não obrigatório
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
      <div>
        <h1>Olá mundo</h1>
        <h3>{props.title}</h3>
        <h3>{props.subtitle}</h3>
      </div>
    );
  
}

export default Header;