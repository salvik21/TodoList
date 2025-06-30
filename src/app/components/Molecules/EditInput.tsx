import React from 'react';
import { ChangeEvent } from 'react';
import Input from '@atoms/Input/Input';
import { EditButtonText } from '@utils/constants';
import { UseFormRegister } from 'react-hook-form';
import { UseFormRegisterReturn } from 'react-hook-form';


export type EditProps = {
  register: UseFormRegisterReturn;
   onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void; 
};


const EditInput = ({register, onSubmit}:EditProps) => {
    return (
        <>
            <form onSubmit={onSubmit}>
            <Input
              className="w-full px-4 py-2 text-lg mb-4 border-2 border-blue-500 bg-blue-50 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-600 transition shadow-sm"
              {...register}
              required= {true}
            />
          </form>
        </>
    )
}

export default EditInput