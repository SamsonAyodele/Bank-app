import ResetPasswordForm from "./reset-password-form"



const ResetPassword = () => {
  return (
    <div className="py-3">
      <div className="mb-8">
        <h1 className="mb-1 font-bold text-purple-600">Set a new password</h1>
        <p>Your new password must be different from the previous one</p>
      </div>
       <ResetPasswordForm/>
    </div>
  )
}

export default ResetPassword