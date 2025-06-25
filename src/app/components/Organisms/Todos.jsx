import React from 'react'
import TodoForm  from '../Molecules/TodoForm/TodoForm';
import TodoList from '../Molecules/TodoList';   
import {TodoListTitleText} from '../../../../utils/constants';

const Todos = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4'>
        <TodoForm />
        <h1 className='text-2xl font-bold mb-4 mt-6'>{TodoListTitleText}</h1>
        <TodoList />
        
    </div>
  )
}

export default Todos;