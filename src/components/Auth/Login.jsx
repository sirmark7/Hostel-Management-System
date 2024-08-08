import { useState } from "react"
import Button from "../Button";
import { PropTypes } from "prop-types";

const Login = ({toggleForm}) => {
  
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleLogin=()=>{}
  return (
    <form >
         <div  className="flex items-center justify-between gap-3">
                <label htmlFor='email' className="capitalize">Email </label>
                <input
                  className="w-[80%] p-3 outline-none rounded-lg border-[#ccc] border-[1px]"
                  placeholder={`Email`}
                  id='email'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(()=> e.target.value)}
                />
              </div>
         <div  className="flex items-center justify-between gap-3">
                <label htmlFor='password' className="capitalize">
                  Password
                </label>
                <input
                  className="w-[80%] p-3 outline-none rounded-lg border-[#ccc] border-[1px]"
                  placeholder={`Password`}
                  id='password'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
               <Button text='Sign In' onClick={handleLogin}  />     
               <p> Don&apos;t have an account <span onClick={toggleForm} className=" text-btn-bg cursor-pointer font-bold">Sign Up</span> </p>
              </div>




    </form>
  )
}

Login.propTypes={
    toggleForm:PropTypes.function
}

export default Login