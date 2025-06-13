import React from 'react'
import { TodoForm } from '../Molecules/TodoForm'
import TodoList from '../Molecules/TodoList';   

const Todos = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4'>
        <TodoForm />
        <h1 className='text-2xl font-bold mb-4'>To do List</h1>
        <TodoList />
        
    </div>
  )
}

export default Todos;