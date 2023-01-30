import React from 'react'

const InputText = (props) => {
  return (
    <div >
    <textarea placeholder={props.placeholder} className="w-[300px] border-4 border-red outline-none">
    
    </textarea>
    </div>
  )
}

export default InputText;