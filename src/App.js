import './App.css'
import React, { useState } from 'react'
import PokemonName from './components/PokemonName'
import FetchData from './components/FetchData'

function App() {
    const [poke, setPoke] = useState([])
    const [counter, setCounter] = useState(0)

    const llamarApi = async () => {
        try {
            if (counter < 990) {
              const names = await FetchData(counter)
              console.log(names)
              setPoke(names)
              setCounter(counter + 20) 
            } else setCounter(0)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="App">
            <h1>Pokemon API</h1>
            <button onClick={llamarApi}>Presione aqui</button>
            <PokemonName poke={poke} />
        </div>
    )
}

export default App
