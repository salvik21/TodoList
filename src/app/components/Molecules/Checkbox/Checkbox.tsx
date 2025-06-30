'use client';

import useToggleTodoCompleted  from './useToggleTodoCompleted';
import React from 'react';
import InputAtom from '@atoms/Input/Input';

type TodoCheckboxProps = {
  id: string;
  completed: boolean;
};

const TodoCheckbox = ({ id, completed }: TodoCheckboxProps) => {
  const { completed: isCompleted, toggle, loading } = useToggleTodoCompleted(completed, id);

  return (
    <InputAtom
      type="checkbox"
      checked={isCompleted}
      onChange={toggle}
      disabled={loading}
    />
  );
};

export default TodoCheckbox;