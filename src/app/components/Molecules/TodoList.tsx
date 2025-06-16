import React from 'react';
import { getAllTodos } from '../../action';
import EditDeleteButton from './EditDeletButton';
import ListAtom from '../atoms/ListAtom/ListAtom';
import ListItemAtom from '../atoms/ListItemAtom/ListItemAtom';
import { TodoListMessageText } from '../../../../utils/constants';


const TodoList = async () => {
  const AllTodos = await getAllTodos();

  if (AllTodos.length === 0) {
    return (
      <p className="mt-8 font-medium text-lg text-gray-500">{TodoListMessageText}</p>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <ListAtom>
        {AllTodos.map((todo) => (
          <ListItemAtom
            key={todo.id}
            className="
              flex justify-between items-center
              bg-white
              p-4
              rounded-xl
              mb-3
              shadow-sm
              hover:shadow-lg
              transition
              duration-150
              group
            "
          >

            <div className={`text-lg capitalize transition truncate max-w-[70%] ${todo.completed ? 'line-through text-gray-400 opacity-70' : 'text-gray-800'
              }`}>

              {todo.title}
            </div>

            <EditDeleteButton todosId={todo.id} />
          </ListItemAtom>
        ))}
      </ListAtom>
    </div>
  );
};

export default TodoList;
