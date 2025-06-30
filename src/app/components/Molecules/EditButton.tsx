import React from 'react';
import { EditButtonText } from '@utils/constants'; // Importing the text for the edit button
import Button from '@atoms/Button/Button';

// Removed unnecessary import of EditButton from constants

type EditProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // onClick handler for the button
};

const EditButton = ({ onClick }: EditProps) => {
  return (
    <div>
      <Button
        label={EditButtonText}
        className="bg-yellow-500 text-white px-3 py-1 rounded text-xs" 
        onClick={onClick} // Using the onClick prop passed from the parent component
        />
    </div>
  );
};

export default EditButton;
