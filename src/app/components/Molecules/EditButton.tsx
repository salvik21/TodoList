import React from 'react';
import EditButton from './TodoItem';
import { EditButtonText } from '../../../../utils/constants'; // Importing the text for the edit button
import DeleteButton from './DeleteButton/DeleteButton';
// Removed unnecessary import of EditButton from constants

type Props = {
  todosId: string;
  value: string;
};

const EditDeleteButton = ({ todosId, value,  }: Props) => {
  return (
    <div >
      <EditButton id={todosId} text={EditButtonText} value={value} />
      <DeleteButton id={todosId} />
    </div>
  );
};

export default EditDeleteButton;
// <DeleteForm id={todosId} />