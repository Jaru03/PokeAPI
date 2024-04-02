import './style/PokeStat.css'

const PokeStat = ({statName, statValue}) => {

    const limitPorcentaje = 150
    const valuePorcentaje = 0.01 * statValue
    const STATSPORCENTAJE = `${100 * valuePorcentaje}%`


  return (
    <div className="">
        <div className="flex justify-between font-semibold">
            <p className="capitalize">{statName}</p>
            <p>{statValue}/{limitPorcentaje}</p>
        </div>

        <div className="porcentajeBar relative w-full border solid">
            <div style={{width:STATSPORCENTAJE}} className=" limitPorcentarjeBar absolute h-full"></div>
        </div>
    </div>
  )
}

export default PokeStat