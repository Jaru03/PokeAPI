import { useRef } from "react"
import { setTrainer } from "../../store/states/trainer.slice"
import { useDispatch } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

const FormTrainer = () => {

    const trainerInput = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainer(trainerInput.current.value.trim()));
        navigate('/pokedex')
    }

  return (
    <form className="sd:w-1/2 max-w-800 w-4/5 h-16 py-20 " onSubmit={handleSubmit}>
        <input className=" w-2/3 h-10 shadow-lg text-center rounded-s-lg" ref={trainerInput} type="text" placeholder="Enter your name"/>
        <button className="w-2/6 h-10 shadow-lg text-slate-200 rounded-e-lg bg-red-600">Let's Starts</button>
    </form>
  )
}

export default FormTrainer