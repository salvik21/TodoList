import React from 'react';


export type ButtonAtomProps = {
  type?: 'submit' | 'button' | 'reset';
  label: string;
  className?: string;
};

export default function ButtonAtom({
  type = 'submit',
  label,
  className = '',
}: ButtonAtomProps) {
  return (
    <button type={type} className={`btn btn-primary ${className}`}>
      {label}
    </button>
  );
}