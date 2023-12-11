import React, {Component} from 'react';

class Membro extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: props.nome
    }

    this.logarUsuario = this.logarUsuario.bind(this);
    this.sairUsuario = this.sairUsuario.bind(this);

  }

  logarUsuario(){
    let state = this.state
    state.nome = 'Wallacezinhuuu'
    this.setState(state)
  }

  sairUsuario(){
    let state = this.state
    state.nome = 'Visitante'
    this.setState(state)
  }

  render(){
    return(
      <div>
        <h1>Olá {this.state.nome}</h1>
        <button onClick={() => this.logarUsuario('Wallacezinhouuioio')}>Logar</button>
        <button onClick={this.sairUsuario}>Sair</button>
      </div>
    )
  }
}

export default Membro; 