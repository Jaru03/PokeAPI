import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import ListPokemons from "../components/PokedexPage/ListPokemons";
import SelectType from "../components/PokedexPage/SelectType";
import Header from "../components/shared/Header";

const PokedexPage = () => {
    //useStates
    const [pokeSearch, setPokeSearch] = useState('')
    const [typeSelected, setTypeSelected] = useState('allPokemons')
    const [limit, setLimit] = useState(20)

    //useRef
    const inputSearch = useRef()
    
    //useSelector
    const trainer = useSelector(state => state.trainer)
    
    //URL
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
    
    //CustomHook / useFetch
    const [pokemons, getPokemons, getPokeByTypes] = useFetch(url)
    
  
    useEffect(() => {
        if (typeSelected === 'allPokemons') {
            getPokemons()
        } else {
            getPokeByTypes(typeSelected)
        }
    }, [typeSelected, url])


    const handleSubmit = e => {
        e.preventDefault()
        setPokeSearch(inputSearch.current.value.trim().toLowerCase())
    }

    const pokemonsFilteres = pokemons?.results.filter(poke => {
        return poke.name.includes(pokeSearch)
    })

    return (
    <div className="bg-fondo pb-4">

        <Header/>
        <header className="w-11/12 p-6 text-center text-balance m-auto">
            <p className="text-left text-lg font-semibold"><span className="text-red-600 font-semibold capitalize">Welcome {trainer}</span>, here you can find your favorite pokemon</p>
        </header>
        
        {/* Formulario de seleccion de tipos */}
        
        <div className="flex sm:flex-row flex-col items-center gap-4 w-full h-12 m-auto justify-evenly sm:mb-16 mb-24">

            <form className="sm:w-5/12 w-4/5 h-full " onSubmit={handleSubmit}>
                <input className="h-full p-4 w-2/3 shadow-md rounded-s-xl text-center" placeholder="Enter a Pokemon name" ref={inputSearch} type="text"/>
                <button className="h-full w-2/6 bg-red-600 rounded-e-xl shadow-md font-semibold text-white">Search</button>
            </form>
            
            {/* Selector de Tipos */}
            <SelectType setTypeSelected={setTypeSelected}/>
        </div>
        
        {/* Lista de Pokemons */}
        <ListPokemons pokemons={pokemonsFilteres}/>
    
    </div>
  );
};

export default PokedexPage;
