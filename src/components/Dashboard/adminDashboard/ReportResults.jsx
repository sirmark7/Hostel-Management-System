import { PropTypes } from "prop-types";
import { useOutletContext } from "react-router-dom";
import ButtonAdmin from "../../ButtonAdmin";
import { BiCloudDownload, BiPlus, BiPrinter } from "react-icons/bi";
import downloadCSV from "../../store/downloadCSV";
const ReportResults = () => {
    const {handleModal,reportData}=useOutletContext()
    const bookings=[...reportData]

  return (
    <div >
         <span className='flex w-full gap-2 justify-end pb-4' >
    <ButtonAdmin styles='flex justify-center gap-2 p-2' onClick={()=>downloadCSV(bookings)} type='button'>
         <BiCloudDownload className='text-2xl text-main-color'/>
         Save Report
       </ButtonAdmin> 
       <ButtonAdmin styles='flex justify-center gap-2 p-2' onClick={()=>handleModal(true,'Report')} type='button'>
         <BiPlus className='text-2xl text-main-color'/>
         Generate Report
       </ButtonAdmin> 
       </span>
   { !bookings || bookings.length === 0?
    <p>No bookings found for the selected date range.</p>
    :
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="text-left py-2 px-4 border">User</th>
          <th className="text-left py-2 px-4 border">Room</th>
          <th className="text-left py-2 px-4 border">Hostel</th>
          <th className="text-left py-2 px-4 border">Category</th>
          <th className="text-left py-2 px-4 border">Booking Date</th>
          <th className="text-left py-2 px-4 border">Price</th>

        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking._id}>
            <td className="py-2 px-4 border">{booking.user.fullName}</td>
            <td className="py-2 px-4 border">{booking.room.name}</td>
            <td className="py-2 px-4 border">{booking.room.hostel}</td>
            <td className="py-2 px-4 border">{booking.room.category}</td>
            <td className="py-2 px-4 border">{new Date(booking.bookingDate).toLocaleDateString()}</td>
            <td className="py-2 px-4 border">${booking.room.price}</td>
          </tr>
        ))}
      </tbody>
    </table>}
    </div>
  );
};
ReportResults.propTypes = {
  bookings: PropTypes.array,
}
export default ReportResults;
