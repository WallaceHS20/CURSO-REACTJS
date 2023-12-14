import React, { Component } from 'react';
// import Membro from './eventos/membros.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      sexo: '',
      erro: ''
    }

    this.cadastrar = this.cadastrar.bind(this)

  }

  cadastrar(event) {
    const {nome, email, senha, sexo} = this.state

    if(nome === "" || email === "" || senha === "" || sexo === ""){
      this.setState({erro: 'Campos vazios ou inválidos'})
    }
    else{
      alert(`Nome: ${nome}\nE-mail: ${email}\nSenha: ${senha}\nSexo: ${sexo}\n`)
    }

    event.preventDefault();

  }

  render() {
    return (
      <div>
        <h1>Novo usuário</h1>
        <form onSubmit={this.cadastrar}>

          {this.state.erro && <p>{this.state.erro}</p>}

          <label>Nome</label><br/>
          <input type='text'
            onChange={(e) => this.setState({ nome: e.target.value })}></input> <br/> <br/>

          <label>E-mail</label><br/>
          <input type='text'
            onChange={(e) => this.setState({ email: e.target.value })}></input> <br/> <br/>

          <label>Senha</label><br/>
          <input type='password'
          onChange={(e) => this.setState({ senha: e.target.value })}></input> <br/> <br/>
          
          <label>Sexo</label><br/>
          <select value={this.state.sexo} onChange={(e) => this.setState({ sexo: e.target.value })}>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
        </select> <br/> <br/>

        <button type='submit'>Enviar</button>

        </form>
      </div>
    )
  }
}

export default App;