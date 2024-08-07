
import { useParams } from "react-router-dom";
import { CustomerServiceNavItems } from '../components/utils/data';
import { useEffect ,useState} from "react";
const AboutPolicy = () => {
     const { serviceId } = useParams();
     const [data, setData] = useState([])

    useEffect(() => {
     const data = CustomerServiceNavItems.find(item => item.path === serviceId)
     setData(data)
        
    },[data, serviceId])

  return (
  
  <div className='flex text-left flex-col max-w-[90vw] flex-1 justify-start items-start md:ml-[8rem] ml-2'>
    
    <h2 className='absolute -top-5 left-0 uppercase'>  {data.name} </h2>
    <h2 className='text-[18px] mb-5 uppercase'>  {data.name} </h2>
     <div className=''>
        <p className='pr-5'>
        {data.text}
      </p>
    </div>
    </div>
  )
}


export default AboutPolicy