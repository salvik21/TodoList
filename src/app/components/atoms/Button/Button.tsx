import React from 'react';


export type ButtonAtomProps = {
  type?: 'submit' | 'button' | 'reset';
  label: string;
  className?: string;
};

const ButtonAtom = ({
  type = 'submit',
  label,
  className = '',
}: ButtonAtomProps) => {
  return (
    <button type={type} className={`btn btn-primary ${className}`}>
      {label}
    </button>
  );
}

export default ButtonAtom;