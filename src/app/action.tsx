"use server";

import { revalidatePath } from 'next/cache';
import prisma from '../../utils/db';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import { z } from 'zod';


const todoSchema = z.object({
  title: z.string().min(1),
});

export const addTask = async (title:string) => {
    await prisma.todo.create({
    data: {
      title: title,
    },
  });
 revalidatePath('/');
}



export async function POST(req: Request) {
  const body = await req.json();
  const parsed = todoSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const newTodo = await prisma.todo.create({
    data: { title: parsed.data.title },
  });

  return NextResponse.json(newTodo, { status: 201 });
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