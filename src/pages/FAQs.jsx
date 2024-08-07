
import FaqCard from '../components/FaqCard'
import { faqs } from '../components/utils/data'

const FAQs = () => {
  return (
     <div className='flex text-left max-w-xl flex-col w-[90vw] flex-1 justify-start items-start md:ml-[8rem] ml-2'>
    
    <h2 className='absolute -top-5 left-0 uppercase'>  HELP & FAQS </h2>
    <div className='w-full flex flex-col gap-10'>
      {
        faqs.map((item,i)=>(
          <div key={i}>
          <h3 className='py-4 font-medium text-[18px]' >{item.heading}</h3>

       { item.questions.map((question,i)=>(

        <FaqCard key={i} title={question.title} >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto aliquid necessitatibus exercitationem quae laudantium soluta labore architecto assumenda praesentium odio.</p>
        </FaqCard>
        ))}
      </div>
        ))
      }
      
    </div>
    </div>
    
  )
}

export default FAQs