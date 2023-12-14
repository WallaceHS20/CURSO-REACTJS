import React, { useState } from 'react';
// import Membro from './eventos/membros.js'

function App(){

  const [tarefas, setTarefas] = useState(['pagar dentista', 'estudar', 'dormir'])
  const [nome] = useState('wallace')
  const [input, setInput] = useState([''])

  function handleAdd(){
    setTarefas([...tarefas, input])
    alert(tarefas)
  }

  return(
    <div>
      <h1>oi</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li>{tarefa}</li>
        ))}
      </ul>
      <h3>{nome}</h3>
      <br/><br/><br/>

      <input type='text' onChange={e => setInput(e.target.value)}></input>
      <button onClick={handleAdd}> Adicionar </button>

    </div>
  )
}

export default App;