import PokeStat from './PokeStat'
import './style/PokeStats.css'

const PokeStats = ({pokemon}) => {

  return (
    <div className="stats mx-auto">
      <header className={`header bg-violet-500 bg-${pokemon?.types[0].type.name} aspect-2 rounded-t-md`}>
        <img className="img absolute left-1/2 -translate-x-50" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <main className='main'>
        <section className='state'>
          <h2 className='mx-auto mt-12 mb-8 text-3xl id border border-solid'>#{pokemon?.id}</h2>
          <article className="flex items-center justify-evenly my-4">
            <hr className='w-2/6'/>
            <h3 className='text-3xl capitalize'>{pokemon?.forms[0].name}</h3>
            <hr className='w-2/6'/>
          </article>
          <article className='flex justify-center gap-8 text-xl'>
            <p className='flex flex-col items-center'><span className='text-lg'>Peso</span><span>{pokemon?.weight}</span></p>
            <p className='flex flex-col items-center'><span className='text-lg'>Altura</span><span>{pokemon?.height}</span></p>
          </article>
          <article className='types flex w-full '>
            <div className={` flex flex-col w-1/2`}>
                <h3 className='text-center text-2xl py-4'>Types</h3>
              <div className='flex justify-center  capitalize gap-4 sm:gap-12'>
                
                  
                  {
                    pokemon?.types.map(types => (
                      <p className={` text-white inline-block text-center sm:w-5/12 w-full p-1 font-semibold bg-${types.type.name}`} key={types.type.url}>{types.type.name}</p>
                      ))
                    }
                </div>
            </div>
            <div className='flex flex-col w-1/2'>
                <h3 className='text-center text-2xl py-4'>Skills</h3>
              <div className=' flex justify-center  capitalize gap-4 sm:gap-12'>

                  {
                    pokemon?.abilities.map(skills => (
                      <p className='inline-block sm:w-5/12 w-full p-1 border-2 font-semibold border-solid text-center' key={skills.ability.url}>{skills.ability.name}</p>
                      ))
                    }
                </div>
            </div>
          </article>
        </section>
        <section className='mt-8'>
          <div className='flex items-center mx-12 my-4 justify-between'>
            <h2 className='font-bold text-4xl'>Stats</h2>
            <hr className='w-3/4 '/>
            <img className='pokeball text-default'  src="../../pokeball.png" alt="" />
          </div>
          <article className='flex flex-col mx-12 gap-y-8'>
            {
              pokemon?.stats.map(stats => (
                
                <PokeStat key={stats.stat.url} statName={stats.stat.name} statValue={stats.base_stat}/>
                
              ))
            }
          </article>
        </section>
      </main>
    </div>
  )
}

export default PokeStats