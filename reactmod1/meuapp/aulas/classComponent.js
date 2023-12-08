import React, {Component} from 'react';

class Equipe extends Component{
  render(){
    return(
      <div>
        <h3>Nome:</h3>
        <p>{this.props.nome}</p>
        <h3>Cargo:</h3>
        <p>{this.props.cargo}</p>
        <h3>Idade:</h3>
        <p>{this.props.idade}</p>
        <hr/>
      </div>
    )
  }
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Wallace" cargo="Analista de TI" idade="25"></Equipe>
    </div>
  )
}

export default App;