import React from 'react';

export type InputAtomProps = {
  type?: string;
  name: string;
  id?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
};

const InputAtom = ({
  type = 'text',
  name,
  id,
  className = '',
  placeholder,
  required = false,
  defaultValue,
}: InputAtomProps) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={className}
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...(required ? { required: true } : {})}
    />
  );
}

export default InputAtom;
