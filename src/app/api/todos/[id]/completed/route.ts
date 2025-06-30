import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { completed } = await req.json()

  try {
    const updatedTodo = await prisma.todo.update({
      where: { id: params.id },
      data: { completed },
    })

    return NextResponse.json(updatedTodo)
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка при обновлении' }, { status: 500 })
  }
}



