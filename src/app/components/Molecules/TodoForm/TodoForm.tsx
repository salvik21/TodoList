'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@atoms/Button/Button';
import InputAtom from '@atoms/Input/Input';
import FormAtom from '@atoms/FormAtom/FormAtom';
import {
  AddTodoButtonForm,
  TodoFormInputPlaceholder,
} from '@utils/constants';
import { useRouter } from 'next/navigation';



const todoSchema = z.object({
  title: z.string().min(1, 'Поле обязательно'),
});

type TodoInput = z.infer<typeof todoSchema>;

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoInput>({
    resolver: zodResolver(todoSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: TodoInput) => {
    const res = await fetch('/api/', {
      method: 'POST',
      body: JSON.stringify({ title: data.title }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      reset();
      router.refresh();
    } else {
      const err = await res.json();
      console.error('Ошибка при добавлении задачи:', err);
    }
  };

  return (
    <FormAtom
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl"
    >
      <div className="w-full mb-8">
        <InputAtom
          placeholder={TodoFormInputPlaceholder}
          {...register('title')}
          required
          className="
            border-2 border-blue-500
            bg-blue-50
            rounded-xl
            focus:ring-2 focus:ring-blue-400 focus:border-blue-600
            transition
            w-full px-4 py-2 text-lg
            mb-2
            shadow-sm
          "
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>
      <div className="w-full flex justify-end">
        <Button
          label={AddTodoButtonForm}
          type="submit"
          className="
            bg-blue-600
            text-white
            font-bold
            rounded-xl
            px-6 py-2
            shadow-md
            hover:bg-blue-700
            hover:scale-105
            focus:outline-none
            focus:ring-4 focus:ring-blue-300
            transition
            duration-150
            uppercase
            tracking-wider
          "
        />
      </div>
    </FormAtom>
  );
};

export default TodoForm;
