'use client';

import { useState } from 'react';

const useToggleTodoCompleted = (
  initialValue: boolean,
  id: string
) => {
  const [completed, setCompleted] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  const toggle = async () => {
    const newCompleted = !completed;
    setCompleted(newCompleted);
    setLoading(true);

    await fetch(`/api/todos/${id}/completed`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: newCompleted }),
    });

    setLoading(false);
  };

  return { completed, toggle, loading };
};

export default useToggleTodoCompleted ;