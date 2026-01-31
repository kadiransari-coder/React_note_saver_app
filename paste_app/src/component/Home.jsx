import React from 'react'
import { useState } from 'react'
import {  useSearchParams } from 'react-router'
import {useDispatch} from 'react-redux'
import { addTopastes, UpdateTopastes } from '../redux/pasteSlice'
const home = () => {
  const [title,settitle]=useState('');
  const [value,setValue]=useState();
  const [searchParams,setparams] = useSearchParams();
  const pasteId=searchParams.get("pasteId");
  const dispatch  = useDispatch();

  function PasteButton(){
    const paste = {
    title: title,
    content: value,
    _id: pasteId || Date.now().toString(45),
    createdAt: new Date().toISOString(),
    }


  


  if(pasteId){
  //update
    dispatch(UpdateTopastes(paste))
  }else{
  //create
  dispatch(addTopastes(paste))
  }

  }
  return (
    <div className='flex flex-col gap-3'>

      <div className='flex flex-row gap-4'>
      <input 
      className='border border-black p-3'
      type="text" 
      placeholder='Enter title'
      value={title}
      onChange={(e) => settitle(e.target.value)}
      />

      <button onClick={PasteButton}>
        {
          pasteId ?"Update My paste" : "Create My Paste"
          
        }
      </button>
</div>
      <textarea 
      className='border border-black p-3'
      value={value}
      placeholder='Enter content'
      onChange={(e)=>setValue(e.target.value)}
      rows={20}
      ></textarea>
    </div>

  )
}

export default home
