import  { useState, useEffect } from 'react';
import { PropTypes } from "prop-types";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import toast from 'react-hot-toast';
const RoomForm = ({ initialData, onSubmit }) => {
    const [starsCount, setStarsCount] = useState(1);
    const starMax=5
    console.log(initialData);
    
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    oldPrice:0,
    category: '',
    occupancy: '',
    slot:'',
    location: '',
    hostel: '',
    images:[],
    facilities:'',
    stars:0,
    description: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({...initialData,facilities:initialData.facilities.join(", "),stars:initialData.stars.reduce((a, b) => a + b, 0)});
    setStarsCount(initialData.stars.length);
    }
  }, [initialData]);
console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);  // Pass formData to the parent component or API call
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form  p-6 rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold text-primary-color mb-4">
        {initialData ? "Edit Room" : "Add Room"}
      </h2>

      <label className="block text-text-color mb-1">Room Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-2"
        placeholder="Enter room name"
      />
      <label className="block text-text-color mb-1">Hostel Name</label>
      <input
        type="text"
        name="hostel"
        value={formData.hostel}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-2"
        placeholder="Enter hostel name"
      />
        <label className="block text-text-color mb-1">Location</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-2"
        placeholder="Enter location"
      />

  <label className="block text-text-color mb-1">Category</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-2"
        placeholder="Enter category"
      />

      <span className='grid grid-cols-2 gap-2'>
        <span>
      <label className="block text-text-color mb-1">Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-2"
        placeholder="Enter price"
      />
    </span>
    <span>
      <label className="block text-text-color mb-1">Occupancy</label>
      <input
        type="number"
        name="occupancy"
        value={formData.occupancy}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-2"
        placeholder="Enter occupancy"
      />
      </span>
        </span>
         <label className="block text-text-color mb-1">Facilities {"(Seperate with comma ',')"}</label>
      <input
        type="text"
        name="facilities"
        value={formData.facilities}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-2"
        placeholder="Enter Room facilities"
      />
       <label className="block text-text-color mb-1">Stars Rating</label>
      <div className="action-btn flex justify-center mb-2 items-center w-fit p-2 border-[1px] border-gray-color ">
            <span
              onClick={() => starsCount > 1 && setStarsCount((prev) => prev - 1)}
              className="flex-2 px-5 cursor-pointer "
              name='slot'
            >
              <AiOutlineMinus className="text-[14px]" />
            </span>
            <span className="flex flex-3 p-1"> {initialData?formData.stars:starsCount}</span>

            <span
              onClick={() =>
                starsCount &&
                starsCount < starMax?
                setStarsCount((prev) => prev + 1)
                :toast.error('stars limit reached')
              }
              className="flex-2 px-5 h-full cursor-pointer"
              name='stars'
            >
              <AiOutlinePlus className="text-[14px]" />
            </span>
      </div>
      <label className="block text-text-color mb-2">Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-4"
        placeholder="Enter room description"
      ></textarea>

      <button type="submit" className="w-full p-3 bg-btn-bg hover:bg-btn-bg-hover text-white rounded">
        {initialData ? "Update Room" : "Add Room"}
      </button>
    </form>
  );
};
RoomForm.propTypes={
  initialData:PropTypes.object,
  onSubmit:PropTypes.func
}
export default RoomForm;
