import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
// Проверьте, что путь к db.ts совпадает с реальным расположением файла
import prisma from '../../utils/db';

export async function POST(req: Request) {
  const body = await req.json();

  // Простая ручная валидация
  if (!body || typeof body.title !== 'string' || body.title.trim() === '') {
    return NextResponse.json(
      { error: 'Поле title обязательно и должно быть строкой' },
      { status: 400 }
    );
  }

  const newTodo = await prisma.todo.create({
    data: { title: body.title},
  });

  revalidatePath('/');

  return NextResponse.json(newTodo, { status: 201 });
}
