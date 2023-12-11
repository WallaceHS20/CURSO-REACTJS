import React, {Component} from 'react';
// import Membro from './eventos/membros.js'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      status : false
    }

    this.logar = this.logar.bind(this);
    this.sair = this.sair.bind(this);

  }

  logar(){
    let state = this.state;
    state.status = true;
    this.setState(state)
  }

  sair(){
    let state = this.state;
    state.status = false;
    this.setState(state)
  }

  render(){
    return(
      <div>
        {

        this.state.status ?

          <div>
            <h1>Bem vindo Wallace!</h1>
            <button onClick={this.sair}>Sair</button>
          </div> :

          <div>
            <h1>Logar no sistema</h1>
            <button onClick={this.logar}>Entrar</button>
          </div>
        }

      </div>
    )
  }
}

export default App;