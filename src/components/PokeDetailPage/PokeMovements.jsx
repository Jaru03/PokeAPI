import './style/PokeMovements.css'

const PokeMovements = ({movements}) => {
  return (
    <section className="movements block w-4/5 rounded-xl py-4  ">
      <header className='flex items-center w-4/5 justify-between m-auto my-8'>
        <h2 className="text-3xl">Movements</h2>
        <hr className='w-2/3'/>
        <img className='pokeball text-default'  src="../../pokeball.png" alt="" />
      </header>

      <main className='flex m-auto  flex-wrap w-4/5 '>
        {
          movements?.moves.map(movement =>
            <div className='movement p-2 m-2' key={movement.move.url}>{movement.move.name}</div>
            )
          
        }
      </main>
    </section>
  )
}

export default PokeMovements