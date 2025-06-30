'use client';

import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import EditInput from './EditInput';
import { TodoInput } from '@/schemas/todo.schema';
import TodoCheckbox from './Checkbox/Checkbox';
import { useRouter } from 'next/navigation';
import { DeleteButtonName, EditButtonText, SaveButtonText } from '@/utils/constants'; // Importing the text for the edit button
import Button from '@atoms/Button/Button'; // Assuming you have a Button component in atoms

type TodoItemProps = {
  id: string;
  text?: string;
  value: string;//REname to title
  completed?: boolean;//Iscompleted
};

const TodoItem = ({ id, value, completed }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleSave = async (data: TodoInput) => {
    if (!data.title.trim()) return;
    console.log("Updating todo ID:", id); // Make sure it's defined
    try {
      const res = await fetch(`/api/todos/${id}/edit`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: data.title }),
      });


      if (!res.ok) throw new Error('Failed to update todo');

      const updatedTodo = await res.json();
      setIsEditing(false);
      router.refresh();


    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };


  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/todos/${id}/edit`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete todo');


      window.location.reload();
    } catch (error) {
      console.error('Error deleting todo:', error);
      // optionally show a toast
    }
  };

  const { register, handleSubmit, } = useForm<{ title: string }>({
    defaultValues: { title: value },
  });
  return (
    <div className="flex items-center justify-between w-full px-6 py-3 mb-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-4 flex-1">
        {isEditing ? (
          <EditInput register={register('title')} onSubmit={handleSubmit(handleSave)} />
        ) : (
          <>
            <TodoCheckbox id={id} completed={completed ?? false} />
            <span className="text-gray-800 text-base break-all w-full">
              {value}
            </span>
          </>
        )}
      </div>

      <div className="flex items-center gap-2 ml-4 shrink-0">
        {isEditing ? (
          <div>
      <Button
        label={SaveButtonText}
        className="bg-green-500 text-white px-3 py-1 rounded text-xs"
        onClick={handleSubmit(handleSave)} // Using the onClick prop passed from the parent component
        />
    </div>
        ) : (
          <div>
            <Button
              label={EditButtonText}
              className="bg-yellow-500 text-white px-3 py-1 rounded text-xs"
              onClick={() => setIsEditing(true)} // Using the onClick prop passed from the parent component
            />
          </div>
        )}
        <div>
          <Button
            label={DeleteButtonName}
            type="submit"
            className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold text-xs shadow transition duration-150"
            onClick={() => { if (confirm("Are you sure?")) handleDelete(); }}
          />
        </div>
      </div>
    </div>
  );


};
//
export default TodoItem;

