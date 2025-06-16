import React from 'react';
import LinkAtom from '../atoms/Link/LinkAtom';
import DeleteForm from './DeleteForm/DeleteForm';
import { EditButton } from '../../../../utils/constants'; 

type Props = {
  todosId: string;
};

const EditDeleteButton = ({ todosId }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <LinkAtom
        href={`/${todosId}`}
        text={EditButton}
        className="
          px-3 py-1
          rounded-lg
          bg-yellow-400
          hover:bg-yellow-500
          text-white
          font-semibold
          text-xs
          shadow
          transition
          duration-150
        "
      />
      <DeleteForm id={todosId} />
    </div>
  );
};

export default EditDeleteButton;
