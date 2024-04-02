import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
  
    const [response, setResponse] = useState()

    const getApi = () => {
        axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }

    const getApiTypes = (urlTypes) => {
        axios.get(urlTypes)
        .then(res => {
            const obj = {
                results: res.data.pokemon.map(poke => poke.pokemon)
            }
            setResponse(obj)
        })
    }

    return [response, getApi, getApiTypes]
}

export default useFetch