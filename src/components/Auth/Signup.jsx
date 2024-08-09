import {useContext, useState} from 'react'
import Button from '../Button'
import { PropTypes } from "prop-types";
import { UserContext } from '../store/AppContext';
import toast from 'react-hot-toast';
const Signup = ({toggleForm}) => {
    
    const [email,setEmail]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [termsOfUse,setTermsOfUse]=useState('checked')

    const {userData,setUserData}=useContext(UserContext)
    const handleSignUp=async(e)=>{
        e.preventDefault()
        if(!email || !username || !phoneNumber || !password || !confirmPassword){
            toast.error('All fields are required')
            return
        }
         if(confirmPassword !== password){
            toast.error('Passwords do not match')
            return
         }
      
        await setUserData(()=>({ email,username,password,phoneNumber,confirmPassword}))
        toast.success('Account created successfuly')
        toggleForm()
        console.log(userData);
        
    }
  return (
    <form className=" w-full flex flex-col gap-5 justify-center items-center py-7" >
        <span className='w-full flex items-center justify-between gap-5'>

        <div  className=" w-full flex-1 flex flex-col items-start justify-between ">
        <label htmlFor='email' className="capitalize">Email * </label>
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

        <div  className=" w-full flex-1 flex flex-col items-start justify-between">
        <label htmlFor='username' className="capitalize">
        Username *
        </label>
        <input
        required
        className="w-full px-1 outline-none rounded-lg border-[#ccc] border-[1px] text-[14px]"
        placeholder={`Username`}
        id='username'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        </span>



        <span className='w-full flex items-center justify-between gap-5 '>
            <div  className=" w-full flex-1 flex flex-col items-start justify-between ">
            <label htmlFor='password' className="capitalize">
            Password *
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

            <div  className=" w-full flex-1 flex flex-col items-start justify-between ">
            <label htmlFor='phone_number' className="capitalize">
            Phone Number *
            </label>
            <input
            required
            className="w-full px-1 outline-none rounded-lg border-[#ccc] border-[1px] text-[14px]"
            placeholder={`Phone Number`}
            id='phone_number'
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
            </div>

        </span>
        <span className='w-full flex items-center justify-between '>
            <div  className=" w-full flex-1 flex flex-col items-start justify-between ">
            <label htmlFor='confirm_password' className="capitalize">
            Confirm Password *
            </label>
            <input
            required
            className="w-full px-1 outline-none rounded-lg border-[#ccc] border-[1px] text-[14px]"
            placeholder={`Confirm Password`}
            id='confirm_password'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            </div> 
            <div  className=" w-full flex-1 flex items-center justify-center ">
            
            <input
            required
            className="w-full outline-none rounded-lg border-[#ccc] border-[1px] text-[14px]"
            placeholder={``}
            id='terms_of_use'
            type="checkbox"
            value={termsOfUse}
            checked={termsOfUse}
            onChange={(e) => setTermsOfUse(e.target.checked)}
            />
            <label htmlFor='terms_of_use' className="capitalize cursor-pointer text-[12px]">
            Agree to Terms and conditions
            </label>
            </div> 

        </span>

        <div className="w-full flex flex-col items-center justify-between gap-3">
            <Button text='Sign Up' onClick={handleSignUp} styles='w-full rounded-lg'  />     
            <p> Already have an account <span onClick={toggleForm} className=" text-btn-bg cursor-pointer font-bold"> Signin</span> </p>
        </div>

    </form>
  )
}
Signup.propTypes={
    toggleForm:PropTypes.func
}

export default Signup