"use server";

import { revalidatePath } from 'next/cache';
import prisma from '../../utils/db';
import { redirect } from 'next/navigation';

export const addTask = async (formData) => {
    const title = formData.get('addTodo');
    await prisma.todo.create({
    data: {
      title: title,
    },
  });
 revalidatePath('/');
}

export const getAllTodos = async () => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: 'desc'
    },
  });
}

export const deleteTodo = async (formData) => {
    const id = formData.get('todoId');
    await prisma.todo.delete({
    where: { id },
  });
  revalidatePath('/');
}

export const getTodoById = async (id) => {
return prisma.todo.findUnique({
    where: { id },
  });
}

export const editTodo = async (formData) => {
    const id = formData.get('id');
    const title = formData.get('title');
    const completed = formData.get('completed');
    
    await prisma.todo.update({
        where: { id },
        data: { title, completed:
        completed === 'on',
         },
    });
    
    redirect  ("/");     
}