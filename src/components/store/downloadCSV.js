
const convertToCSV = (objArray) => {
 const data=objArray?.map((item)=>({
    userName:item?.user?.fullName,
    phoneNumber:item?.user?.phoneNumber,
    email:item?.user?.email,
    role:item?.user?.role,
    roomAvailable:item?.room?.available,
    roomName:item?.room?.name,
    roomCategory:item?.room?.category,
    roomPrice:item?.room?.price,
    occupancy:item?.room?.occupancy,
    slots:item?.room?.slot,
    rating:item?.room?.stars.reduce((a, b) => a + b, 0),
    hostel:item?.room?.hostel,
    bookingDate:item?.bookingDate.split('T')[0]
    }))
    const array = [Object.keys(data[0])].concat(data);
    
    return array.map(row => {
      return Object.values(row)
        .map(value => `"${value}"`)  // Wrap each value in double quotes
        .toString();
    }).join('\n');
  };

  const downloadCSV = (data) => {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'report-data.csv');
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  export default downloadCSV;