import LoginForm from "./login-form"

const Login = () => {
  return (
    <div className="py-3">
      <div className="mb-8">
        <h1 className="mb-1 font-bold text-purple-600">Sign-in</h1>
        <p>Please enter your <span className="text-purple-600">credentials</span> to sign in</p>
      </div>
        <LoginForm/>
    </div>
  )
}

export default Login