import axios from 'axios'

const FetchData = async (props) => {
    try {
        const  counter  = props
        let counterplus = counter + 20
        let resultado = await axios.get(
            'https://pokeapi.co/api/v2/pokemon?offset=' +
                counterplus +
                '&limit=' +
                20,
        )
        const { results } = resultado.data
        return results.map((x) => x.name)
    } catch (error) {
        console.log(error.message)
    }
}

export default FetchData
