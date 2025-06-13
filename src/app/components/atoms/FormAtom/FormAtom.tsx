import React from 'react';

export type FormAtomProps = {
  action?: (formData: FormData) => void;
  children: React.ReactNode;
  className?: string;
};

export default function FormAtom({ action, children, className = '' }: FormAtomProps) {
  return (
    <form action={action} className={`flex flex-col gap-4 ${className}`}>
      {children}
    </form>
  );
}
