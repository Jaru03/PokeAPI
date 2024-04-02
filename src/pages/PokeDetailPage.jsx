import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import Header from "../components/shared/Header"
import './style/PokeDetailPage.css'
import PokeStats from "../components/PokeDetailPage/PokeStats"
import PokeMovements from '../components/PokeDetailPage/PokeMovements'

const PokeDetailPage = () => {

  const {name} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [ pokemon, getPokemon ] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [name])

  console.log(pokemon)

  return (
    <div className="w-full relative">

      <Header/>

      <PokeStats pokemon={pokemon}/>

      <PokeMovements movements={pokemon}/>
    </div>
  )
}

export default PokeDetailPage