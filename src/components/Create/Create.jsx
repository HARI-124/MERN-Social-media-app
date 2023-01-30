import React,{useState} from 'react'
import {FaPlusCircle} from "react-icons/fa";
import Form from '../Form/Form';
const Create = () => {

    const [plus,setPlus] = useState(false);
  
function handleClick(){
    setPlus(!plus);
}

    return (
    <div>
        <div className='absolute left-1/2 top-[100px] mb-5 flex gap-2'>
            <h3
        className='text-2xl font-semibold'
        >Create Post</h3>
            <div className='flex justify-center items-center'>
            <FaPlusCircle onClick={handleClick}>
            </FaPlusCircle>
            </div>
        
        </div>
        {
      plus? (<div className='transition duration-500'>
        <Form>

      </Form>
      </div>) : (<div></div>)
    }
    </div>
   
  )
}

export default Create