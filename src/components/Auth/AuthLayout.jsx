
import {PropTypes} from "prop-types";   
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate} from "react-router-dom";
const AuthLayout = () => {
  const [oldUser,setOldUser]=useState(true)
  const push=useNavigate()
  const handleFormToggle=()=>(setOldUser(prev=>!prev))
 const handleIsActive=()=>(push('/hostels'))
  return (
    <div className="bg-slate-500 h-[100vh] flex justify-center items-center">
      <div className=" w-[590px] h-[490px] m-auto flex flex-col items-center justify-start p-10 border-2 border-btn-bg bg-background-color rounded-xl">
        <div className='flex py-2 justify-between w-full border-b-[1px] border-text-color-trans'>
              <img src="/logo.svg" alt="logo" height="40" width="48" />
              <h1 className='text-[16px]'> { oldUser?'Signin to Book Hostel' :'Create Account to Book Hostel'}</h1>
              <AiOutlineClose className='text-[18px] cursor-pointer ' onClick={handleIsActive}/>
          </div>
          <div className=" h-full w-full flex-1 flex justify-center items-center ">
            {
              oldUser?<Login toggleForm={handleFormToggle} />:<Signup toggleForm={handleFormToggle} />
            }
          </div>
      </div>
    </div>
  );
}; 
AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
