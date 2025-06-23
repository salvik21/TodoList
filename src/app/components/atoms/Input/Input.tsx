import React from 'react';
import { ChangeEvent } from 'react';

export type InputAtomProps = {
  type?: string;
  value?: string;
  name: string;
  id?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputAtom = ({
  type = 'text',
  name,
  value = '',
  id,
  className = '',
  placeholder,
  required = false,
  defaultValue,
  onChange,
}: InputAtomProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      className={className}
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...(required ? { required: true } : {})}
    onChange={onChange}
    />
  );
}

export default InputAtom;
