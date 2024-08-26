import { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { LoaderContext, UserListContext } from '../../store/AppContext';
import toast from 'react-hot-toast';

const UserDetails= () => {
        const { userId } = useParams();
        const {setIsLoading}=useContext(LoaderContext)
        const {userList}=useContext(UserListContext)
        const [user,setUser]=useState()

         const handleGetuser =useCallback(async () => {
    setIsLoading(true);
    try {
      const response = userList.find((user)=>user._id === userId );
      setUser(response);
    } catch (error) {
      toast.error("Error loading user");
    } finally {
      setIsLoading(false);
    }
  },[])

  
  useEffect(() => {
    if (!user) {
      handleGetuser();
    }
  }, []);
  return (
    <div>
      {user&&user}
    </div>
  )
}

export default UserDetails
