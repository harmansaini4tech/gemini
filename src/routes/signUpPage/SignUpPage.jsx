import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import "./signUpPage.css"

const SignUpPage = () => {
  return (
    <div><SignUp path="/sign-up" /></div>
  )
}

export default SignUpPage