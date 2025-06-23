'use client';
import React from 'react'
import ButtonAtom from '../atoms/Button/Button';
import { useState } from 'react';
import { deleteTodo, editTodo } from '../../action';
import EditInput from './EditInput';

type TodoItemProps = {
  id: string;
  text?: string;
  value: string;
};

const TodoItem = ({ id,  value}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(value);

  const handleSave = () => {
    setIsEditing(false);
    editTodo(id, editedText); 
  };

return (
  <div className="flex items-center justify-between w-full px-4 py-2 rounded shadow bg-white">
    <div className="flex-1">
      {isEditing ? (
        <EditInput  
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span className="text-sm h-8 px-2 py-1 w-full  rounded bg-white inline-flex items-center">{value}</span>
      )}
    </div>

  
    <div className="flex gap-2 ml-4 shrink-0">
      {isEditing ? (
        <ButtonAtom
          label="Save"
          className="bg-green-500 text-white px-3 py-1 rounded text-xs"
          onClick={handleSave}
        />
      ) : (
        <ButtonAtom
          label="Edit"
          className="bg-yellow-500 text-white px-3 py-1 rounded text-xs"
          onClick={() => setIsEditing(true)}
        />
      )}
    </div>
  </div>
);

};

export default TodoItem;

