import PokeCard from './PokeCard'

const ListPokemons = ({pokemons}) => {
  return (
    <div className='flex flex-wrap justify-center gap-4 mx-4'>
        {
            pokemons?.map(pokeInfo => (
                <PokeCard 
                key={pokeInfo.url}
                pokeInfo={pokeInfo}
                />
            ))
        }
    </div>
  )
}

export default ListPokemons