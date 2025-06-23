'use client';
import React from 'react';
import { deleteTodo } from '../../../action';
import ButtonAtom from '../../atoms/Button/Button';
import { DeleteButtonName } from '../../../../../utils/constants';


const DeleteButton = ({ id }: { id: string }) => {
  return (
    <div>
      <ButtonAtom
        label={DeleteButtonName}
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
        onClick={() => deleteTodo(id)}
      />
    
    </div>
  );
};

export default DeleteButton;

