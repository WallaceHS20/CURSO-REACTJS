import React, { useCallback, useEffect, useMemo, useState } from 'react';
// let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

import './css/style.css'

function App() {

  const [nutri, setNutri] = useState([])

  useEffect(() => {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          console.log('====================================');
          setNutri(json)
          console.log('====================================');
        })
    }

    loadApi();

  }, [])

  return (
    <div>
      <header>
        <h1>REACT NUTRICIONAL</h1>
      </header>
      <div className='corpo'>
        {nutri.map((item) => {
          return (
            <article key={item.id}>
              <h3>{item.titulo}</h3>
              <div className='capa'>
                <img src={item.capa}></img>
              </div>
              <p>{item.subtitulo}</p>
              <a href={item.categoria}>Acessar</a>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default App;