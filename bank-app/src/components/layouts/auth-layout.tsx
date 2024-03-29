import Logo from "../../assets/images/logo.jpg"
import View from "../../views/View"

const AuthLayout = () => {
  return (
    <div className='w-full min-h-screen pt-5 pb-5' style={{backgroundImage: "linear-gradient(to right, #8a2be2, #4b0082)"}}>
      <div className="w-8/12 lg:w-3/12 mx-auto p-2 lg:p-5 min-h-30 flex flex-row bg-white justify-center item-center rounded-md">
        <img className="lg:w-1/12 w-2/12" src={`${Logo}`} alt="logo" />
        <h3 className="ml-2 font-bold text-purple-600">MY BANK</h3>
      </div>

      <div className="lg:w-6/12 w-11/12 min-h-100 mx-auto bg-white my-5 py-2 text-center rounded-md">
        <View/>
      </div>
    </div>



  )
}

export default AuthLayout