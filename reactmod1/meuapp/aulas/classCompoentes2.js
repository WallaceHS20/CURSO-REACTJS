import React, {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: "Matheus",
      contador: 0
    }
    
    this.somar = this.somar.bind(this);
    this.subtrair = this.subtrair.bind(this);
    
  }


  somar() {
    let state = this.state
    state.contador += 1
    this.setState(state) 
  }

  subtrair() {
    let state = this.state
    state.contador -= 1
    this.setState(state) 
  }

  render(){
    return(
      <div>
        <button onClick={this.subtrair}>-</button>{this.state.contador}<button onClick={this.somar}>+</button>
      </div>
    )
  }
}

export default App;