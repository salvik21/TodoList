'use client'
import React from 'react';
import { TodoListMessageText } from '@/utils/constants';
import TodoItem from './TodoItem';



interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoListClientProps {
  todos: Todo[];
}

const TodoListClient: React.FC<TodoListClientProps> = ({ todos }) => {
  if (!todos || todos.length === 0) return <p>{TodoListMessageText}</p>;

  return (
    <div className="w-full max-w-md mx-auto">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem id={todo.id} value={todo.title}  />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListClient;