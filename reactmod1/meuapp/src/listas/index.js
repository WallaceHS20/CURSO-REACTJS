import React, { Component } from "react";

class Feed extends Component{
    render(){
        return(
            <div key={this.props.key}>
            <h3>Nome:</h3>
            <p>{this.props.name}</p>
            <h3>idade:</h3>
            <p>{this.props.idade}</p>
            {this.props.curtidas > 1 ?
            <h3>Curtidas</h3> : <h3>Curtida</h3> }
            <p>{this.props.curtidas}</p>
            <hr/>
          </div>
        )
    }
}

export default Feed;