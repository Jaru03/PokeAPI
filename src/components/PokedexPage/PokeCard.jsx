import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './style/PokeCard.css'

const PokeCard = ({pokeInfo}) => {

    const [pokemon, getPokemon] = useFetch(pokeInfo.url)

    useEffect(() => {
      getPokemon()
    }, [])

    const navigate = useNavigate()

    const handlePokemonDetail = () => {
      navigate(`/pokedex/${pokeInfo.name}`)
    }

    

  return (
    <article className={`w-full max-w-72 border-8 border-solid border-${pokemon?.types[0].type.name}  rounded-2xl cursor-pointer`} onClick={handlePokemonDetail}>
      <header className={`bg-violet-500 bg-${pokemon?.types[0].type.name} w-full relative aspect-2 rounded-t-md`}>
        <img className="absolute w-1/2 top-8 left-1/2 -translate-x-50" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className="mt-14">
        <h3 className={` text-center capitalize text-xl font-bold color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <ul className="flex gap-4 justify-center font-semibold capitalize">
          {
            pokemon?.types.map(typeInfo => (
              <li className="type" key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))
          }
        </ul>
      </section>
      <hr className="my-3 border border-solid border-default-transparent w-3/4 m-auto" />
      <section className="px-4 pt-4 pb-8 font-semibold">
        <ul className="list">
          {
            pokemon?.stats.map(statInfo => (
              <li className="flex flex-col items-center" key={statInfo.stat.url}>
                <span className="uppercase text-xs text-center text-slate-400">{statInfo.stat.name.split('-').join(' ')}</span>
                <span className={`font-normal text-xl color-${pokemon?.types[0].type.name}`}>{statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard