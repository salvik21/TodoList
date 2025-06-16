"use server";

import { revalidatePath } from 'next/cache';
import prisma from '../../utils/db';
import { redirect } from 'next/navigation';

export const addTask = async (formData: FormData) => {
    const title = formData.get('addTodo') as string;
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

export const deleteTodo = async (formData: FormData) => {
    const id = formData.get('todoId') as string;
    await prisma.todo.delete({
    where: { id },
  });
  revalidatePath('/');
}

export const getTodoById = async (id: string) => {
return prisma.todo.findUnique({
    where: { id },
  });
}

export const editTodo = async (formData: FormData) => {
    const id = formData.get('id') as string;;
    const title = formData.get('title') as string;;
    const completed = formData.get('completed');

    if (!id || !title) {
        throw new Error("ID and title are required");
    }
    
    await prisma.todo.update({
        where: { id },
        data: { title, completed: completed === 'on' },
    });

    redirect("/");
}