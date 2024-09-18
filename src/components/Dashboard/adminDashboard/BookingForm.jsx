import { useState, useEffect } from 'react';
import { PropTypes } from "prop-types";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import toast from 'react-hot-toast';

const BookingForm = ({ users, rooms, initialData, onSubmit }) => {
  const [slots, setSlot] = useState(1);
  const [mode, setMode] =useState('add')
  const formDataValues={ 
    userId: '',
    roomId: '',
    slot:''}
  const [formData, setFormData] = useState(formDataValues);
  console.log(initialData);
  
  
  const [selectedRoom, setSelectedRoom] = useState(null); // To store the selected room's info

  useEffect(() => {
    if (initialData) {
      setMode('edit')
      
      setFormData(initialData);
      const selectedRoomData = rooms.find(room => room.id === initialData.roomId);
      setSelectedRoom(selectedRoomData);
      setSlot(selectedRoomData.slot)
      setFormData({  
    userId: initialData.user._id,
    roomId: initialData.room._id,
    slot:initialData.room.slot
    }); 
      // Set initial room image if editing
    }else{
      setMode('add')
      setFormData(formDataValues)
    }
  }, [initialData, rooms]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // If room is selected, update the preview image
    
    if (name === 'roomId') {
      const selectedRoomData = await rooms.find(room => room._id === value);
      setSelectedRoom(selectedRoomData);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    delete formData.bookingDate
    formData.slot=slots
     if(mode==='edit'){
        const bookingId=initialData._id
      if(Number(selectedRoom.slot)!==Number(formData.slot)){
        formData.newSlot=formData.slot-selectedRoom.slot
      }else{
        formData.newSlot=1
      }
      formData.slot=formData.slot+formData.newSlot
      formData.bookingId=bookingId
    const modifiedData = {...formData};    
     await onSubmit(modifiedData,mode,'booking');
    }
    else{
    
    await onSubmit(formData,mode,'booking'); 
    setFormData(formDataValues)
    }
  };

  return (
    <>
    
 {mode==='add' ?   
  <form onSubmit={handleSubmit} className="entity-form p-6 rounded-lg h-full  mx-auto">
      <h2 className="text-xl font-bold text-primary-color mb-4">
        {initialData ? "Edit Booking" : "Create Booking"}
      </h2>

      {/* Select input for users */}
      <label className="block text-text-color mb-2">Select User</label>
      <select
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-4"
      >
        <option value="">-- Select User --</option>
        {users?.map(user => (
          <option key={user.id} value={user._id}>
            {user.fullName}
          </option>
        ))}
      </select>

      {/* Select input for rooms */}
      <label className="block text-text-color mb-2">Select Room</label>
      <select
        name="roomId"
        value={formData.roomId}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-4"
      >
        <option value="">-- Select Room --</option>
        {rooms?.map(room => (
          <option key={room.id} value={room._id}>
            {room.name} - ${room.price}
          </option>
        ))}
      </select>

      {/* Room Image Preview */}
      {selectedRoom && 
        <div  className='flex  gap-1'>
        {selectedRoom?.images.length > 0 && selectedRoom?.images.map((image,i) =>(
          <div className="mb-4"key={i} >
            <label className="block text-text-color mb-2">Room Preview{i+1}</label>
            <div className="w-32 h-32 border border-gray-color rounded overflow-hidden">
              <img
                src={'../../../server/src/uploads/'+image}
                alt={selectedRoom?.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
      ))}
        </div>
      }

      {/* slots */}
      <label className="block text-text-color  mb-2">Slots Available <span className='text-text-color'>{selectedRoom?.slot}</span></label>
       <div className="action-btn flex justify-center mb-2 items-center w-fit  border-[1px] border-gray-color ">
            <span
              onClick={() => selectedRoom?.slot > 1 && setSlot((prev) => prev - 1)}
              className="flex-2 px-5 cursor-pointer "
              name='slot'
            >
              <AiOutlineMinus className="text-[14px]" />
            </span>
            <span className="flex flex-3 p-1"> {slots}</span>

            <span
              onClick={() =>
                selectedRoom &&
                slots < selectedRoom?.slot?
                setSlot((prev) => prev + 1)
                :toast.error('occupancy limit reached')
              }
              className="flex-2 px-5 h-full cursor-pointer"
              name='slot'
            >
              <AiOutlinePlus className="text-[14px]" />
            </span>
      </div>
      {
        selectedRoom?.available?
      <button type="submit" className="w-full p-3 bg-btn-bg hover:bg-btn-bg-hover text-white rounded">
        {initialData ? "Update Booking" : "Create Booking"}
      </button>
      :
      <button type="button" className="w-full p-3 bg-btn-bg hover:bg-btn-bg-hover text-white rounded">
        Selected Room Not available
      </button>
      }
    </form>
    :
    <form onSubmit={handleSubmit} className="entity-form p-6 rounded-lg h-full  mx-auto">
      <h2 className="text-xl font-bold text-primary-color mb-4">
        {initialData ? "Edit Booking Slot" : "Create Booking"}
      </h2>

      {/* Select input for users */}
      <label className="block text-text-color mb-2">Select User</label>
      <select
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-4"
        disabled
      >
        <option value="">-- Select User --</option>
        {users?.map(user => (
          <option key={user.id} value={user._id}>
            {user.fullName}
          </option>
        ))}
      </select>

      {/* Select input for rooms */}
      <label className="block text-text-color mb-2">Select Room</label>
      <select
        name="roomId"
        value={formData.roomId}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-4"
        disabled
      >
        <option value="">-- Select Room --</option>
        {rooms?.map(room => (
          <option key={room.id} value={room._id}>
            {room.name} - ${room.price}
          </option>
        ))}
      </select>

      {/* Room Image Preview */}
      {selectedRoom && 
        <div  className='flex  gap-1'>
        {selectedRoom?.images.length > 0 && selectedRoom?.images.map((image,i) =>(
          <div className="mb-4"key={i} >
            <label className="block text-text-color mb-2">Room Preview{i+1}</label>
            <div className="w-32 h-32 border border-gray-color rounded overflow-hidden">
              <img
                src={'../../../server/src/uploads/'+image}
                alt={selectedRoom?.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
      ))}
        </div>
      }

      {/* slots */}
       <label className="block text-text-color  mb-2">Slots Available <span className='text-text-color'>{selectedRoom?.slot}</span></label>
       <div className="action-btn flex justify-center mb-2 items-center w-fit  border-[1px] border-gray-color ">
            <span
              onClick={() => selectedRoom?.slot > 1 && setSlot((prev) => prev - 1)}
              className="flex-2 px-5 cursor-pointer "
              name='slot'
            >
              <AiOutlineMinus className="text-[14px]" />
            </span>
            <span className="flex flex-3 p-1"> {slots&&slots}</span>
            <span
              onClick={() =>
                selectedRoom &&
                slots < selectedRoom?.slot?
                setSlot((prev) => prev + 1)
                :toast.error('occupancy limit reached')
              }
              className="flex-2 px-5 h-full cursor-pointer"
              name='slot'
            >
              <AiOutlinePlus className="text-[14px]" />
            </span>
      </div>
      {
       
      <button type="submit" className="w-full p-3 bg-btn-bg hover:bg-btn-bg-hover text-white rounded">
        Update Booking
      </button>
      
      }
    </form>
    }
    </>

  );
};

BookingForm.propTypes = {
  users: PropTypes.array.isRequired,
  rooms: PropTypes.array.isRequired,
  initialData: PropTypes.object,
  onSubmit: PropTypes.func
}

export default BookingForm;
