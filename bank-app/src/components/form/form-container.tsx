import React, { ReactNode } from 'react'

interface FormContainerProps{
    children:ReactNode
}

const FormContainer= ({children}: FormContainerProps) => {
  return (
    <div>
        <form className='lg:w-8/12 w-11/12 mx-auto p-3 my-4 text-left'>
            <div className='grid gap-6 mb-6 md:grid-cols-1'>{children}</div>
        </form>
    </div>
  )
}

export default FormContainer