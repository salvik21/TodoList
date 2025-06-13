'use client';

import React from 'react';

import ButtonAtom from '../../atoms/Button/Button';
import InputAtom from '../../atoms/Input/Input';
import FormAtom from '../../atoms/FormAtom/FormAtom';
import CheckboxAtom from '../../atoms/CheckboxAtom/CheckboxAtom';
import LabelText from '../LabelText';
import { editTodo } from '../../../action';

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type EditFormProps = {
  task: Task;
};

export default function EditForm({ task }: EditFormProps) {
  const { id, title, completed } = task;

  return (
    <FormAtom action={editTodo}>
      <InputAtom type="hidden" name="id" defaultValue={id} />

      <InputAtom
        name="title"
        defaultValue={title}
        required
        className="
          border-2
          border-accent
          rounded-xl
          bg-accent/10
          focus:ring-2
          focus:ring-accent
          focus:border-accent
          transition
          w-full
          px-4
          py-2
          text-lg
          mb-8
        "
      />

      <div className="form-control my-10 flex items-center gap-4">
        <LabelText />
        <CheckboxAtom
          id="completed"
          name="completed"
          defaultChecked={completed}
          className="
            checkbox
            checkbox-accent
            border-accent
            focus:ring-accent
            w-6
            h-6
          "
        />
      </div>

      <ButtonAtom
        label="Update"
        className="
          btn-block
          btn-lg
          bg-blue-600
          text-white
          font-bold
          rounded-xl
          shadow-lg
          hover:bg-blue-700
          hover:scale-105
          focus:outline-none
          focus:ring-4
          focus:ring-blue-300
          transition
          duration-150
          uppercase
          tracking-wider
          mt-4
        "
      />
    </FormAtom>
  );
}

