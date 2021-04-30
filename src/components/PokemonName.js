import React from 'react'

const PokemonName = (props) => {
    const pokem = props.poke
    console.log(pokem)
    const pokemons = pokem.map((pName, index) => <div key={index}>{pName}</div>)
    return <>{pokemons}</>
}

export default PokemonName
