import React, { Component } from 'react';
// import Membro from './eventos/membros.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      sexo: ''
    }

    this.trocaEmail = this.trocaEmail.bind(this)


  }

  trocaEmail(e) {
    let valorEmail = e.target.value;
    this.setState({ email: valorEmail });

  }

  render() {
    return (
      <div>
        email:
        <input type='text' value={this.state.email}
          onChange={this.trocaEmail}></input> <br /> <br />
        senha:
        <input type='password' value={this.state.senha}
          onChange={(e) => this.setState({ senha: e.target.value })}></input> <br /> <br />

        sexo:
        <select value={this.state.sexo} onChange={(e) => this.setState({ sexo: e.target.value })}>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>

        <div>
          <p>Meu e-mail: {this.state.email}</p>
          <p>Minha senha: {this.state.senha}</p>
          <p>Sexo meu é: {this.state.sexo}</p>
        </div>
      </div>
    )
  }
}

export default App;