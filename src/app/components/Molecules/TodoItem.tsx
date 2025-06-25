'use client';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { deleteTodo, editTodo } from '../../action';
import EditInput from './EditInput';
import { TodoInput } from '@/schemas/todo.schema';
import EditButton from './EditButton';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton/DeleteButton';

type TodoItemProps = {
  id: string;
  text?: string;
  value: string;
};

const TodoItem = ({ id, value }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (data: TodoInput) => {
    if (!data.title.trim()) {
      return; // Prevent saving empty title
    }
    setIsEditing(false);
    editTodo(id, data.title);
    console.log('Todo updated:', id, data.title);
  };

  const { register, handleSubmit, } = useForm<{ title: string }>({
    defaultValues: { title: value },
  });
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 rounded shadow bg-white">
      <div className="flex-1">
        {isEditing ? (
          <EditInput
            register={register('title')}
            onSubmit={handleSubmit(handleSave)}
          />
        ) : (
        <span className="text-sm h-10 px-4 py-2 w-full rounded bg-white inline-flex items-center">{value}</span>
      )}
      </div>

      <div className="flex gap-2 ml-4 shrink-0">
        {isEditing ? (
          <SaveButton onClick={handleSubmit(handleSave)} />
        ) : (
          <EditButton onClick={() => setIsEditing(true)}
          />
        )
        
        }
        <DeleteButton onClick={() => deleteTodo(id)} />
      </div>
    </div>
  );

};
//
export default TodoItem;

