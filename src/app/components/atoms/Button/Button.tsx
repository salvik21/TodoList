import React from 'react';


export type ButtonAtomProps = {
  type?: 'submit' | 'button' | 'reset';
  label: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  type = 'submit',
  label,
  className = '',
  onClick,
}: ButtonAtomProps) => {
  return (
    <button type={type} className={`btn btn-primary ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;