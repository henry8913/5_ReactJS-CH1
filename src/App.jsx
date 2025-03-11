import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="footer">
      <h2>Intro to React</h2>
      <ol>
        <li>
          <strong>Cos'è ReactJS?</strong>
          <p>È una libreria per fare le interfacce degli utenti, non un framework.</p>
        </li>
        <li>
          <strong>ReactJS è un framework, non una libreria.</strong>
          <p>Falso! È una libreria.</p>
        </li>
        <li>
          <strong>Il file package.json contiene...</strong>
          <p>Molte informazioni utili, come ad esempio l'elenco di tutte le dipendenze richieste dall'applicazione.</p>
        </li>
        <li>
          <strong>Create-react-app è l'unico modo possibile per creare un'applicazione React.</strong>
          <p>Falso, ci sono altri modi per creare un'app React oltre create-react-app.</p>
        </li>
        <li>
          <strong>Qual è il comando da lanciare nel terminale per creare una nuova create-react-app con nome "test"?</strong>
          <p><code>npx create-react-app test</code></p>
        </li>
        <li>
          <strong>Cos'è un componente React?</strong>
          <p>Un blocco di logica/contenuto riutilizzabile all'interno dell'applicazione.</p>
        </li>
        <li>
          <strong>Un componente React può venire creato in tre modi: come funzione, classe o interfaccia.</strong>
          <p>Falso.</p>
        </li>
        <li>
          <strong>Le props sono frammenti di informazione assegnati all'invocazione di un componente React, utili al fine di rendere il componente dinamico e più riutilizzabile.</strong>
          <p>Vero, le props servono a rendere le cose dinamiche.</p>
        </li>
        <li>
          <strong>Le props possono essere passate solamente da un componente genitore ad un componente figlio, non è possibile fare il contrario.</strong>
          <p>Vero.</p>
        </li>
        <li>
          <strong>Da dove possono venire recuperate le props all'interno di un componente React creato come classe?</strong>
          <p>Possono essere recuperate all'interno dell'oggetto <code>this</code>, dentro un sotto-oggetto chiamato <code>props</code>.</p>
        </li>
      </ol>
    </div>
    </>
  )
}

export default App
