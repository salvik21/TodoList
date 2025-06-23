import { editTodo } from '../../action';

import React from 'react';
import { getAllTodos } from '../../action';
import EditDeleteButton from './EditButton';
import { TodoListMessageText } from '../../../../utils/constants';
import TodoItem from './TodoItem';


const TodoList = async () => {
  const AllTodos = await getAllTodos();

  if (AllTodos.length === 0) {
    return (
      <p className="mt-8 font-medium text-lg text-gray-500">{TodoListMessageText}</p>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <ul>
        {AllTodos.map((todo) => (
          <li key={todo.id}>
            <TodoItem id={todo.id} value={todo.title}  />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;