import React from 'react';
import Button from '../atoms/Button/Button';
import { SaveButtonText } from '../../../../utils/constants'; // Importing the text for the edit button

type SaveProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // onClick handler for the button
};

const SaveButton = ({ onClick }: SaveProps) => {
  return (
    <div>
      <Button
        label={SaveButtonText}
        className="bg-green-500 text-white px-3 py-1 rounded text-xs"
        onClick={onClick} // Using the onClick prop passed from the parent component
        />
    </div>
  )
}

export default SaveButton;