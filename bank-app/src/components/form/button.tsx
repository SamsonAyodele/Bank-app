interface ButtonProps{
    text: string
}

const Button = ({text}: ButtonProps) => {
  return (
   <button
    type="submit"
    className="text-white bg-purple-700 hover:bg-purple-800b font-medium rounded-lg text-small w-full sm:w-auto px-5 py-2.5 text-center"
    >
    {text}
   </button>
  )
}

export default Button