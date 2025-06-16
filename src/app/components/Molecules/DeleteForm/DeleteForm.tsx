'use client';
import React from 'react';
import { deleteTodo } from '../../../action';
import ButtonAtom from '../../atoms/Button/Button';
import InputAtom from '../../atoms/Input/Input';
import FormAtom from '../../atoms/FormAtom/FormAtom';
import { DeleteButton } from '../../../../../utils/constants';

const DeleteForm = ({ id }: { id: string }) => {
  return (
    <FormAtom action={deleteTodo}>
      <InputAtom type="hidden" name="todoId" defaultValue={id} />
      <ButtonAtom
        label={DeleteButton}
        type="submit"
        className="
          px-3 py-1
          rounded-lg
          bg-red-500
          hover:bg-red-600
          text-white
          font-semibold
          text-xs
          shadow
          transition
          duration-150
        "
      />
    </FormAtom>
  );
};

export default DeleteForm;

