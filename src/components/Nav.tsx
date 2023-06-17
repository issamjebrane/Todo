import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

export const Nav = () => {

    const className = "text-2xl"

    const [currentIcon,setCurrentIcon] = useState(<FaSun size='1.5rem'/>);
  
    const todo :string = "todo"

  const addingSpace = (str:string) : string =>{
    return str.toUpperCase().split('').join(' ')
  }

  return (
   <nav className='flex justify-between gap-44 items-center'>
        <h1 className="font-bold">{addingSpace(todo)}</h1>
        <button className="focus:outline-none">
        {currentIcon}
        </button>
   </nav>
    )
}
