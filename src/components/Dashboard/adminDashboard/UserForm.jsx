import { useState, useEffect } from 'react';
import { PropTypes } from "prop-types";


const UserForm = ({ initialData, onSubmit}) => {
const [mode,setMode]=useState("add")
const formDataValues={
  fullName:"",
  email:"",
  phoneNumber:"",
  password:"",
  role:"user" // default role
  }
  
  const [formData, setFormData] = useState(formDataValues);

  useEffect(() => {
      if (initialData) {
        setMode('edit')
      setFormData({
        ...initialData,
        password: '',  // Keep password empty for security if editing
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(mode==='edit'){
        const modifiedData = {};
        const userId=initialData._id
    for (const key in formData) {
      if (formData[key] !== initialData[key]) {
        modifiedData[key] = formData[key]; // Add only changed fields
      }
    }

    // Submit only modified fields
    if (Object.keys(modifiedData).length > 0) {
        modifiedData._id=userId        
     await onSubmit(modifiedData,mode,'user');
    } else {
      console.log("No changes to submit.");
    }
    }
    else{
    await onSubmit(formData,mode,'user'); 
    }
    setFormData(formDataValues)
  };

  return (
    <form onSubmit={handleSubmit} className=" entity-form p-6 w-full rounded-lg  mx-auto">
      <h2 className="text-xl font-bold text-primary-color mb-4">
        {initialData ? "Edit User" : "Add User"}
      </h2>

      <label className="block text-secondary-color mb-2">Full Name</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-4"
        placeholder="Enter full name"
      />

      <label className="block text-secondary-color mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-4"
        placeholder="Enter email"
      />
      <label className="block text-secondary-color mb-2">Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-4"
        placeholder="Enter phone number"
      />

      <label className="block text-secondary-color mb-2">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-4"
        placeholder={initialData ? "Leave blank to keep current password" : "Enter password"}
      />

      <label className="block text-secondary-color mb-2">Role</label>
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full p-2 border border-gray-color rounded mb-4"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button type="submit" className="w-full p-3 bg-btn-bg hover:bg-btn-bg-hover text-white rounded">
        {initialData ? "Update User" : "Add User"}
      </button>
    </form>
  );
};
UserForm.propTypes = {
  initialData:PropTypes.object,
  onSubmit:PropTypes.func
}
export default UserForm;
