import "./style/Header.css" 

const Header = () => {
  return (
    <div className='h-52 relative w-full'>
            <img className='img-banner w-96 absolute top-16 left-28' src="../pokedex.png" alt="" />
        <div className='w-full h-32 bg-red-600'>
        </div>
        <div className='w-full h-12 bg-zinc-950'>

        </div>
        <div className='principal absolute bg-black rounded-full flex items-center justify-center' >
            <div className='secundaria bg-white rounded-full flex items-center justify-center'>
                <div className='semi bg-black rounded-full flex items-center justify-center'>
                    <div className='puntito bg-puntito rounded-full'>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header