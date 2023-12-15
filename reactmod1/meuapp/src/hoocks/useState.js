import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import Membro from './eventos/membros.js'

function App(){

  //DEFININDO AS STATES
  const [tarefas, setTarefas] = useState([])
  const [input, setInput] = useState([''])

  //EXECUTA ASSIM QUE O COMPONENTE CARREGAR NA TELA
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefa')
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, [])
  

  //EXECUTA APÓS QUALQUER ALTERAÇÃO
  useEffect(() => {
    localStorage.setItem('tarefa', JSON.stringify(tarefas))
  }, [tarefas])

  //EXECUÇÃO INDIVIDUAL APÓS ALTERAÇÃO 
  const totaltarefas = useMemo(() => tarefas.length, [tarefas]);

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input])
  }, [input, tarefas])

  return(
    <div>
      <h1>oi</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li>{tarefa}</li>
        ))}
      </ul>

      <br/><br/>

      <input type='text' onChange={e => setInput(e.target.value)}></input>
      <button onClick={handleAdd}> Adicionar </button> <br/>

      <p>Você tem: {totaltarefas}</p>

    </div>
  )
}

export default App;