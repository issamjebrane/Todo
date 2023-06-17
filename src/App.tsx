import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Todo } from './components/Todo';
import { TodoList } from './components/TodoList';
import { Nav } from './components/Nav';
import bgImage from "./images/bg-desktop-dark.jpg"

function App() {
  return (
    <div className="App bg-Very_Dark_Blue h-screen w-screen flex justify-center text-white py-20 relative font-sans text-xs sm:text-lg">
    <div className="w-full h-2/5 absolute top-0 left-0">
        <img src={bgImage} className="w-full h-full object-cover bg-center"  />
      </div>    
    <div className="xl:w-2/5 bg-red-700 z-1 sm:w-3/5">
        <Nav/>
        <Todo/>
      </div>
   
    </div>
  );
}

export default App;
