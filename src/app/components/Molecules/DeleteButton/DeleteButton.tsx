'use client';
import React from 'react';
import ButtonAtom from '@atoms/Button/Button';
import { DeleteButtonName } from '@utils/constants';

type DeleteButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


const DeleteButton = ({ onClick}:DeleteButtonProps) => {
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
        onClick={onClick}
      />
    
    </div>
  );
};

export default DeleteButton;

