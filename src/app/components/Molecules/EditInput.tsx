import React from 'react';
import { ChangeEvent } from 'react';
import Input from '../atoms/Input/Input';
import { EditButtonText } from '../../../../utils/constants';


export type EditProps = {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};


const EditInput = ({onChange, value}:EditProps) => {
    return (
        <>
            <Input
                value={value}
                onChange={onChange}
                name={EditButtonText}
                className="text-sm h-8 px-2 py-1 w-full border rounded bg-white" 
                required={true}/>
                
        </>
    )
}

export default EditInput