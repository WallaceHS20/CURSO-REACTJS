import React, {Component} from 'react';
// import Membro from './eventos/membros.js'

import Feed from './listas/'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id: 1, name: 'Wallace', idade: 15, curtidas: 25},
        {id: 2, name: 'Julio', idade: 18, curtidas: 28},
        {id: 3, name: 'Davi', idade: 19, curtidas: 35},
        {id: 4, name: 'Lucas', idade: 23, curtidas: 85},
        {id: 5, name: 'Pedro', idade: 17, curtidas: 1}
      ]
    }

  }

  render(){
    return(
      <div>
        {this.state.feed.map((item) => {
          return(
            <div>
              <Feed key={item.id} name={item.name} idade={item.idade} curtidas={item.curtidas}></Feed>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;