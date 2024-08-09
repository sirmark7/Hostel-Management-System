import { useState, useContext, useEffect} from "react"
import Button from "../Button";
import { PropTypes } from "prop-types";
import { UserContext } from "../store/AppContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { userInfo } from "../utils/data";
const Login = ({toggleForm}) => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [forgotPassword,setForgotPassword]=useState(false)
    const {userData,setUserData}=useContext(UserContext)
    const route=useNavigate()
    const handleLogin=async(e)=>{
      e.preventDefault()
    
      if(userData){
        console.log(userData);
        
        const userEmail=userData.email
        const userPassword=userData.password
        if(userEmail==email && userPassword==password){
        toast.success('Login SuccessFull')
        route('/dashboard')
        }else{
        toast.error('Invalid Email or Password')
        setForgotPassword(true)
      }
      }
    }
useEffect(()=>{
  setUserData(userData)
},[])

  return (
    <form   className=" w-full flex flex-col gap-5 justify-center items-center p-20 ">
         <div  className=" w-full flex flex-col items-start justify-between">
                <label htmlFor='email' className="capitalize">Email </label>
                <input
                  required
                  className="w-full px-1 outline-none rounded-lg border-[#ccc] border-[1px] text-[14px]"
                  placeholder={`Email`}
                  id='email'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(()=> e.target.value)}
                />
              </div>
         <div  className="w-full flex flex-col items-start justify-between ">
                <label htmlFor='password' className="capitalize">
                  Password
                </label>
                <input
                  required
                  className="w-full px-1 outline-none rounded-lg border-[#ccc] border-[1px] text-[14px]"
                  placeholder={`Password`}
                  id='password'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className=" w-full flex flex-col items-center justify-between gap-3">
               <Button type='submit' text='Sign In' onClick={handleLogin} styles='w-full rounded-lg' />  
               <span className="flex flex-col justify-between items-end">
               <p> Don&apos;t have an account <span onClick={toggleForm} className=" text-btn-bg cursor-pointer font-bold"> Sign Up</span> </p>
                {forgotPassword&&  <p className=" text-btn-bg cursor-pointer font-bold">Forgot password?</p>}
                </span>   
              </div>




    </form>
  )
}

Login.propTypes={
    toggleForm:PropTypes.func
}

export default Login