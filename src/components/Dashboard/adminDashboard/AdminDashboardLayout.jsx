
import { Outlet } from "react-router-dom"

import AdminNavbar from "./AdminNavbar"
import { useContext, useState, } from "react"
import { AllBookingsContext,HostelsContext, LoaderContext, UserListContext } from "../../store/AppContext"
import ModalCard from "../../ModalCard"
import RoomForm from "./RoomForm"
import UserForm from "./UserForm"
import BookingForm from "./BookingForm"
import useRequestResorce from "../../store/useRequestresource"

const AdminDashboardLayout = () => {
  const {signUp,createBooking,createRoom,updateRoom,updateUser,deleteBooking,deleteRoom,deleteUser}=useRequestResorce()
const {hostelData,setHostelData}=useContext(HostelsContext)
const {allBooked,setAllBooked}=useContext(AllBookingsContext)
const {userList,setUserList}=useContext(UserListContext)
const {setIsLoading}=useContext(LoaderContext)
const [showModal,setShowModal]=useState(false)
const [heading,setHeading]=useState("")
const [initialData,setInitialData]=useState(null)
//  const clearForm=()=>{
//   const form=  document.querySelector(".entity-form")
//       form.reset()
//       }
  
const handleModal=(status,heading,data)=>{
  setShowModal(status)
  // clearForm()
  setHeading(heading)
  data?setInitialData(data):setInitialData(null)
  }
 
  const handleSubmit=async(form,mode,type)=>{
    try {
        setIsLoading(true)
  if (mode ==='add'){
    if(type.toLowerCase()==='user'){
     const response = await signUp(form)
     setUserList([response.data,...userList])
     return ;
    }
    else if(type.toLowerCase()==='room'){    
     const response = await createRoom(form)
     setHostelData([response.data,...hostelData])
     return ;
  }
  else if(type.toLowerCase()==='booking'){
   const response = await createBooking(form)
   setAllBooked([response.data,...allBooked])
   return ;
  }
  }
  else if(mode==='edit'){
    if(type.toLowerCase()==='user'){
      if (form.password==='') {
        delete form.password
      }
      const userId=form._id
      delete form._id
      console.log(form);
     const response = await updateUser(form,userId)
     setUserList([response.data,...userList])
     return ;
    }
    else if(type.toLowerCase()==='room'){    
     const response = await updateRoom(form)
     setHostelData([response.data,...hostelData])
     return ;
  }
  else if(type.toLowerCase()==='booking'){
   const response = await createBooking(form)
   setAllBooked([response.data,...allBooked])
   return ;
  }
  }
    } catch (error) {
      console.log(error);
      
    }
    finally{

  setIsLoading(false)
    }
  
  }

  const handleDelete =async(href,item)=>{
       setIsLoading(true)
    try {
     let response;
        if(href.toLowerCase()==='user'){
          response=await deleteUser(item)
          const newList=userList.filter(user=>user._id!==item)
           setUserList([...newList])
          return;
        }
        if(href.toLowerCase()==='room'){
          response=await deleteRoom(item)
          const newList=hostelData.filter(room=>room._id!==item)
          setHostelData([...newList])
          return;
        }
        if(href.toLowerCase()==='booking'){
          response= await deleteBooking(item)
          console.log(response);
          
           const newList=allBooked.filter(booked=>booked._id!==item)
          setAllBooked([newList])
          return
        }
    } catch (error) {
      console.log(error);
      
    }
    finally{
        setIsLoading(false)
    }
   
  
  }
  return ( <div className="max-w-[1512px] m-auto pt-10">
              <header
              className="w-full relative h-[10vh] flex flex-col justify-start"
              style={{ border: "1px soloid red" }}
              >
                <AdminNavbar/>
              </header>
              <section className="max-w-[1512px]">
                 {/* <SideNav navItems={navItems} linkPreFix='/dashboard' icons={icons} />   */}
                <div className="text-black w-full relative h-full ">
                <Outlet context={{hostelData,allBooked,userList,showModal,handleModal,handleDelete}}/>
                </div>
                <ModalCard isActive={showModal} heading={initialData ? "Edit "+heading : "Add "+heading} handleIsActive={()=>setShowModal(false)}>
                  {heading==='Room'&& <RoomForm initialData={initialData} onSubmit={handleSubmit}  />}
                  {heading=== 'User' && <UserForm initialData={initialData} onSubmit={handleSubmit}  />}
                  {heading=== 'Booking' && <BookingForm initialData={initialData} onSubmit={handleSubmit} users={userList} rooms={hostelData}  />}
                </ModalCard>
              </section>
          </div>
  )
}

export default AdminDashboardLayout