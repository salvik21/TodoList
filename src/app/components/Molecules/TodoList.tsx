import { getAllTodos } from '@/app/action';
import TodoListClient from './TodoListClient';

const TodoList = async () => {
  const todos = await getAllTodos();
  return <TodoListClient todos={todos} />
}

export default TodoList
