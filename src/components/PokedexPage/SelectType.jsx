import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const SelectType = ({setTypeSelected}) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [types, getTypes] = useFetch(url)

    useEffect(() => {
        getTypes()
    }, [])
    
    const handleChange = e => {
      setTypeSelected(e.target.value)
    }

  return (
    <select className="capitalize h-full sm:w-2/5 w-4/5 sm:px-4 sm:py-0 p-4 shadow-md rounded-xl" onChange={handleChange}>
        <option value={'allPokemons'}>All Pokemons</option>
            {
                types?.results.map(type => (
                    <option value={type.url} key={type.url}>{type.name}</option>
                ))
            }
    </select>
  )
}

export default SelectType