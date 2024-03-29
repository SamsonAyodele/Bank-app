import ForgotPasswordForm from "./forgot-password-form"


const ForgotPassword = () => {
  return (
    <div className="py-3">
      <div className="mb-8">
        <h1 className="mb-1 font-bold text-purple-600">Forgot password</h1>
        <p>Please enter your email address to receive a verification code</p>
      </div>
        <ForgotPasswordForm/>
    </div>
  )
}

export default ForgotPassword