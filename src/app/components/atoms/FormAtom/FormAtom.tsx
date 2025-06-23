import React from 'react';

export type FormAtomProps = {
  action?: (formData: FormData) => void;
  children: React.ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

const FormAtom = ({ action,onSubmit, children, className = '' }: FormAtomProps) => {
  return (
    <form onSubmit={onSubmit} action={action} className={`flex flex-col gap-4 ${className}`}>
      {children}
    </form>
  );
}

export default FormAtom;
