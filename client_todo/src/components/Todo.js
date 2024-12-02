import React, { useEffect, useRef, useState } from 'react'

export default function Todo({todo,isNew = false, didSaved = ()=> {}}) {

  const inputText = useRef('') 
  const [isChecked,setIsCheck] = useState(false)


  useEffect(()=>{
    setIsCheck(todo?.isCheck ?? false)
  },[])


  

  const handleKeyPress = (event) =>{
    if (event.key === 'Enter') {
      console.log('KEY ENTER PRESSED', inputText.current.value)
      if (inputText.current.value != ''){
        didSaved(inputText.current.value,isChecked,isNew == false ? todo._id : null)
      }
      inputText.current.value = null
    }
  }

  const onAbort  = () => {
    console.log(`UNFORCUS`)
    if (inputText.current.value != ''){
      didSaved(inputText.current.value,isChecked,isNew == false ? todo._id : null) 
    }
    
    inputText.current.value = null
  }

  const didHover = ()=>{
    console.log('should show button delete')
  }
  
  const didSelectedChecked = (event) => {
    const checked = event.target.checked;
    setIsCheck(checked)
    console.log('isCheck selected', checked)

    if (inputText.current.value != ''){
      didSaved(inputText.current.value,checked, todo?._id)
    }
    
  }


  return (
    <div className=' border-b flex items-start justify-start'>
        <label className={` ${isChecked ? 'line-through': ''} flex items-center justify-items-start w-full` }  >
            <input onChange={didSelectedChecked} className='h-5 aspect-square bg-black mr-2' type='checkbox'  checked={isChecked} />
            {isNew  ? (
              <input onBlur={onAbort} onKeyDown={handleKeyPress} ref={inputText} type='text' className='flex-1 focus:outline-none'></input>
            ) : (
              <div> {todo?.name ?? 'NA'}</div>
            )}
            
        </label>
    </div>
  )
}
