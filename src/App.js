import './App.css'
import React, { useState } from 'react'
import PokemonName from './components/PokemonName'
import axios from 'axios'

function App() {
    const [poke, setPoke] = useState([])
    const [counter, setCounter] = useState(0)

    const llamarApi = async () => {
        try {
            if (counter < 990) {
                let counterplus = counter + 20
                let resultado = await axios.get(
                    'https://pokeapi.co/api/v2/pokemon?offset=' +
                        counterplus +
                        '&limit=' +
                        20,
                )
                const { results } = resultado.data
                const names = results.map((x) => x.name)
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
