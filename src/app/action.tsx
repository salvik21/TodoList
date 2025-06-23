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

export const deleteTodo = async (id: string) => {
  if (!id) {
    throw new Error("ID is required");
  }
    await prisma.todo.delete({
    where: { id },
  });
  revalidatePath('/');
}

export const getTodoById = async (id: string) => {
  if (!id) {
    throw new Error("ID is required");
  }
  return prisma.todo.findUnique({
    where: { id },
  });
}

export const editTodo = async (id: string, editedText: string) => {
    
    if (!id || !editedText) {
        throw new Error("ID and title are required");
    }
    
    await prisma.todo.update({
        where: { id },
        data: { title: editedText },
    });

    redirect("/");
}