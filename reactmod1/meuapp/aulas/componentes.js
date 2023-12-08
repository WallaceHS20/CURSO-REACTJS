import React from 'react';

const Equipe = (props) =>{
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}></Sobre>
    </div>
  )
}

const Sobre = (props) =>{
  return(
    <div>
      <h3>Nome:</h3>
      <p>{props.nome}</p>
      <br/>
      <h3>Cargo:</h3>
      <p>{props.cargo}</p>
      <br/>
      <h3>Idade:</h3>
      <p>{props.idade}</p>
      <hr/>
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Wallace" cargo="Analista de TI" idade="25"></Equipe>
      <Equipe nome="Amanda" cargo="Analista de Qualidade" idade="21"></Equipe>
      <Equipe nome="Júlio" cargo="Analista Comercial" idade="28"></Equipe>
    </div>
  )
}

export default App;