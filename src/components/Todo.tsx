import React, { ChangeEvent, KeyboardEventHandler, useState } from 'react'
import {FaTimes} from "react-icons/fa"
type todoType ={
  id:number,
  input:string,
  checked:boolean
}

export const Todo = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [items,setItems] = useState<todoType[]>([])
  const [isItems,setIsItems] = useState<boolean>(false)
  const [input,setInput] = useState("")
  
  const handleCheckboxClick = ():void=>{
    setIsChecked(!isChecked)
  }

  const handlChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
      setInput(()=>(e.target.value))
      //console.log(input)
  }

  const handleKeyPress = (e:React.KeyboardEvent<HTMLInputElement>):void=>{
    if(e.key === "Enter"){
      setIsItems(true)
      setItems((items)=>([...items,{id:items.length,input:input,checked:true}]))
      setInput('')
      e.currentTarget.blur()
    }
  }

  const handleDelete = (id:number)=>{
    const filteredTodo = items.filter((item)=>item.id!=id)
    setItems(filteredTodo)
  }

  return (
    <div className='flex flex-col gap-7 font-normal text-Dark_Grayish_Blue mt-10'>
        <div className="bg-Very_Dark_Desaturated_Blue p-4 flex items-center gap-4 ">
            <div className={`w-8 h-8  rounded-full flex items-center justify-center border border-gray-400 cursor-pointer ${
            isChecked ? " bg-gradient-to-r from-gradient-check-background-0 to-gradient-check-background-1" : ''
          }`}     
          onClick={handleCheckboxClick}
          >
            {isChecked && <span className="text-white">✓</span>}
          </div>

          <input type='text' value={input} className='flex-1 bg-Very_Dark_Desaturated_Blue focus:outline-none focus:border-non' placeholder='Create a new todo...'
            onChange={handlChange}
            onKeyDown={handleKeyPress}
          />
      
        </div>

          <div>
          {
            isItems && items.map( (todo,id)=>(
                <div className="bg-Very_Dark_Desaturated_Blue p-4 flex items-center gap-4 border-b-[0.1px] border-Darker_Grayish_Blue" key={id}>
                    <div className={`w-8 h-8 rounded-full border border-gray-400 cursor-pointer ${
                      isChecked ? " bg-gradient-to-r from-gradient-check-background-0 to-gradient-check-background-1" : ''
                       }`}     
                    onClick={handleCheckboxClick}
                    >
                    {isChecked && <span className="text-white">✓</span>}
                    </div>
                     <p  className='flex-1 m-0 cursor-pointer'>{todo.input}</p>
                     <div onClick={()=>handleDelete(id)} className='cursor-pointer'>
                       <FaTimes />
                     </div>
                 </div>
            )
            )            
          }
          {
            isItems && (
              <div className="bg-Very_Dark_Desaturated_Blue flex items-center justify-between p-3 text-sm">
                <span>{items.length} items left</span>
                <ul className='flex gap-2  m-0'>
                  <li className='cursor-pointer'>All</li>
                  <li className='cursor-pointer'>Active</li>
                  <li className='cursor-pointer'>Completed</li>
                </ul>
                <button>
                  Clear Completed
                </button>
              </div>
            )
          }
        </div>
        
    </div>
  )
}
