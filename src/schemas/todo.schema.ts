// src/schemas/todo.schema.ts
import { z } from 'zod';


export const todoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  completed: z.boolean().optional(),
});

export type TodoInput = z.infer<typeof todoSchema>;