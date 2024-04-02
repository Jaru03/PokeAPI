import FooterHome from "../components/HomePage/FooterHome"
import FormTrainer from "../components/HomePage/FormTrainer"

const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative">
        
        <img className="sm:w-1/2 w-4/5" src='../../pokedex.png' alt="" />
        <h1 className="text-4xl text-red-600 font-bold pt-8">¡Hi trainer!</h1>
        <p className="sm:text-xl text-lg px-4 text-center">To see the pokemon's information tell me your trainer name</p>
        <FormTrainer/>
        <FooterHome/>
    </div>
  )
}

export default HomePage