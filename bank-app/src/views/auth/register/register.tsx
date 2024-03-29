import RegisterForm from "./register-form"


const Register = () => {
  return (
    <div className="py-3">
    <div className="mb-8">
      <h1 className="mb-1 font-bold text-purple-600">Sign-up</h1>
      <p>Welcome to <span className="text-purple-600">MY BANK</span></p>
    </div>
     <RegisterForm/>
  </div>
  )
}

export default Register