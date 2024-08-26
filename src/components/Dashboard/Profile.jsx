import { useContext, useEffect, useState } from "react";
import { LoaderContext, UserContext } from "../store/AppContext";
import useRequestResorce from "../store/useRequestresource";
import toast from "react-hot-toast";


// import useLocalStorage from "../../utils/localStorage";

const Profile = () => {
    
   const [profileImage, setProfileImage] = useState(null);
   const [profileView, setProfileView] = useState(null);


     const handleFileChange = (e) => {
      e.preventDefault()
    const file = e.target.files?.[0];
    console.log(file);
    
    if (file) {
      setProfileImage(file)
      const reader = new FileReader();
      reader.onload = () => {
        setProfileView(reader.result);
      };
      reader.readAsDataURL(file);      
    }
  };
  const  handleUpdate=async()=>{
   
  //  console.log(userData);
   

  }
   const {getUserData}=useRequestResorce()
  const {userData}=useContext(UserContext)
  const {setIsLoading}=useContext(LoaderContext)
  // const {booked}=useOutletContext()
  const getUser=async()=>{
      setIsLoading(true)
      await getUserData()
      .then((res)=>
      {
        if(res?.statusCode!== 200 ){
          toast.error(res.error) }
        setIsLoading(false) })
        setIsLoading(false)
      }

  useEffect(()=>{
    getUser()
  },[])

  return (
    <div className="flex-1 flex flex-col justify-center items-center self-center">
      <div>
      <div className=" h-[397px] flex-col justify-start items-start gap-[59px] inline-flex">
    <div className="self-stretch h-[397px] flex-col justify-start items-start gap-[58px] flex">
        <div className="justify-start items-center gap-[185px] inline-flex">
            <div className="w-[342px] flex-col justify-start items-start gap-[11px] inline-flex">
                <div className="text-[#1b1d1f] text-[35px] font-semibold font-['SF UI Display'] leading-[53px]">Complete your <br/>Profile</div>
                <div className="self-stretch text-[#6c7072] text-base font-medium font-['SF UI Display'] leading-[23px]">Fill the form below to complete your account creation </div>
            </div>

             <div className="relative w-[150px] h-[150px] md:w-[150px] md:h-[150px]">
              <input
                type="file"
                id="profile-image"
                accept="image/*"
                className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                onChange={handleFileChange}
              />
              <div className="w-full h-full rounded-full bg-amber-200 flex items-center justify-center">
                <img
                  id="profile-img"
                  className="w-full h-full rounded-full object-cover object-top "
                  src={
                    profileView
                      ? (profileView )
                      : userData?.logo
                  }
                  alt="Profile"
                />
              </div>
              <div className="absolute bottom-2 right-2 w-7 h-7 bg-pink-950 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>


        </div>
        <div className="self-stretch h-44 flex-col justify-start items-start gap-[34px] flex">
            <div className="self-stretch justify-start items-start gap-[39px] inline-flex">

                    <div className="w-80  self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                            <label className="text-[#344053] text-sm font-medium font-['SF UI Display'] leading-tight" htmlFor="profile-name">First Name</label>
                            <input 
                            disabled 
                            className="w-full px-3.5 py-2.5 bg-[#f7f7f7] rounded-lg hover:cursor-not-allowed shadow border border-[#cfd4dc] justify-start items-center gap-2 inline-flex  text-[#0f1728] text-base font-medium font-['SF UI Display'] leading-normal" 
                            id="profile-name" 
                            value={userData?.fullName?.split(' ')[0]} /> 
                    </div>
                    
                    <div className="w-80 self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                            <label className="text-[#344053] text-sm font-medium font-['SF UI Display'] leading-tight" htmlFor="profile-last-name">Last Name</label>
                            <input 
                            disabled 
                            className="w-full px-3.5 py-2.5 bg-[#f7f7f7] hover:cursor-not-allowed  rounded-lg shadow border border-[#cfd4dc] justify-start items-center gap-2 inline-flex  text-[#7c7b7b] text-base font-medium font-['SF UI Display'] leading-normal" 
                            id="profile-last-name" 
                            value={userData?.fullName?.split(' ')[1]} /> 
                    </div>
                
            </div>


            <div className="self-stretch justify-start items-start gap-[39px] inline-flex">
                    <div className="w-80 hover:cursor-not-allowed  self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                            <label className="text-[#344053] text-sm font-medium font-['SF UI Display'] leading-tight" htmlFor="profile-last-name">Email </label>
                            <input 
                            disabled 
                            className="w-full px-3.5 py-2.5 hover:cursor-not-allowed  bg-[#f7f7f7] rounded-lg shadow border border-[#cfd4dc] justify-start items-center gap-2 inline-flex  text-[#7c7b7b] text-base font-medium font-['SF UI Display'] leading-normal" 
                            id="profile-last-name" 
                            placeholder="email@mail.com"
                            value={userData?.email} /> 
                    </div>

                  <div className="w-80 hover:cursor-not-allowed  self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                            <label className="text-[#344053] text-sm font-medium font-['SF UI Display'] leading-tight" htmlFor="profile-last-name">Phone Number </label>
                            <input 
                            disabled 
                            className="w-full px-3.5 py-2.5 hover:cursor-not-allowed  bg-[#f7f7f7] rounded-lg shadow border border-[#cfd4dc] justify-start items-center gap-2 inline-flex  text-[#7c7b7b] text-base font-medium font-['SF UI Display'] leading-normal" 
                            id="profile-last-name" 
                            placeholder="email@mail.com"
                            value={userData?.phoneNumber} /> 
                    </div>


                


            </div>
        </div>
    </div>
     
</div>
      </div>
      <button 
      onClick={handleUpdate}
          className="w-[50%]  self-center mx-auto mt-5 h-12 bg-pink-950 rounded-md text-white text-lg font-semibold"
           type="submit" >
          UPDATE
        </button>
    </div>
  );
};

export default Profile;
