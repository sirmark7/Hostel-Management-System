import {useState} from 'react'
import Button from '../Button'
import { PropTypes } from "prop-types";
const Signup = ({toggleForm}) => {
    
    const [email,setEmail]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [termsOfUse,setTermsOfUse]=useState('checked')
    const handleSignUp=()=>{}
  return (
    <form >
        <span className='w-full flex items-center justify-between '>

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
        <label htmlFor='username' className="capitalize">
        Username
        </label>
        <input
        className="w-[80%] p-3 outline-none rounded-lg border-[#ccc] border-[1px]"
        placeholder={`Username`}
        id='username'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        </span>



        <span className='w-full flex items-center justify-between '>
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

            <div  className="flex items-center justify-between gap-3">
            <label htmlFor='phone_number' className="capitalize">
            Phone Number
            </label>
            <input
            className="w-[80%] p-3 outline-none rounded-lg border-[#ccc] border-[1px]"
            placeholder={`Phone Number`}
            id='phone_number'
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
            </div>

        </span>
        <span className='w-full flex items-center justify-between '>
            <div  className="flex items-center justify-between gap-3">
            <label htmlFor='confirm_password' className="capitalize">
            Confirm Password
            </label>
            <input
            className="w-[80%] p-3 outline-none rounded-lg border-[#ccc] border-[1px]"
            placeholder={`Confirm Password`}
            id='confirm_password'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            </div> 
            <div  className="flex items-center justify-between gap-3">
            <label htmlFor='terms_of_use' className="capitalize">
            Agree to Terms and conditions
            </label>
            <input
            className="w-[80%] p-3 outline-none rounded-lg border-[#ccc] border-[1px]"
            placeholder={``}
            id='terms_of_use'
            type="checkbox"
            value={termsOfUse}
            checked={termsOfUse}
            onChange={(e) => setTermsOfUse(e.target.checked)}
            />
            </div> 

        </span>

        <div>
            <Button text='Sign In' onClick={handleSignUp}  />     
            <p> Already have an account <span onClick={toggleForm} className=" text-btn-bg cursor-pointer font-bold">SignIn</span> </p>
        </div>

    </form>
  )
}
Signup.propTypes={
    toggleForm:PropTypes.function
}

export default Signup