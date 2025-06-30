import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = await context.params; // <- destructure from context
  const { title } = await req.json();
  if (!id || !title?.trim()) {
    return NextResponse.json(
      { error: 'ID and title are required' },
      { status: 400 }
    );
  }

  try {
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { title: title.trim() },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error('Failed to update todo:', error);
    return NextResponse.json(
      { error: 'Something went wrong while updating the todo' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }

) {
  const { id } = await context.params;
  if (!id) {
    return NextResponse.json(
      { error: 'ID is required' },
      { status: 400 }
    );
  }
  try {
    await prisma.todo.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete todo' },
      { status: 500 }
    );
  }
}