import React,{useState} from 'react'
import InputText from '../tools/InputText'
import FileBase from "react-file-base64";
import { useDispatch } from 'react-redux';
import {createPost} from "../../actions/posts"
const Form = () => {
  const [postData,setData]=useState({
    creator:'',title:'',message:'',tags:'',selectedFile:'',
  });
  
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(createPost(postData));
  }
  
  const clear = (e) =>{
    console.log(clear)
  }

  return (
    <div className='absolute left-2/3 flex flex-col gap-5 font-playfair items-center justify-center z-60 '>
    <h3
    className='text-2xl font-semibold'
    >Creating a memory</h3>
    <form autoComplete='off' noValidate onSubmit={(e)=> handleSubmit(e)}>
    <InputText
    placeholder="creator"
    value= {postData.creator}
    onchange={(e)=> setData(...postData,e.target.value)}
    >
    </InputText>
    <InputText
    placeholder="title"
    value= {postData.title}
    onchange={(e)=> setData(...postData,e.target.value)}
    >
    </InputText>
    <InputText
    placeholder="message"
    value= {postData.message}
    onchange={(e)=> setData(...postData,e.target.value)}
    >
    </InputText>
    
    <InputText
    placeholder="tags"
    value= {postData.tags}
    onchange={(e)=> setData(...postData,e.target.value)}
    >
    </InputText>
    <div className='m-2 mb-6 font-opensans'>
  <FileBase type = "file" multiple = "false" onDone = {({base64})=> setData({...postData,selectedFile: base64})}
  >

  </FileBase>
    </div>
    
    
    <div className='ml-auto mr-auto flex justify-center gap-2'>
    <button className='h-[50px] w-[120px] bg-red rounded cursor-pointer' type='submit' onClick={(e)=> handleSubmit(e)}>
      Submit
    </button>
    <button className='h-[50px] w-[120px] bg-grey rounded ' onClick={clear}>
      Clear
    </button>
    </div>
   
    </form>
    
    </div>
  )
}

export default Form