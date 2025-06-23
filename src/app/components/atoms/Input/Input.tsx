import React, { forwardRef, InputHTMLAttributes } from 'react';

export type InputAtomProps = InputHTMLAttributes<HTMLInputElement>;

const InputAtom = forwardRef<HTMLInputElement, InputAtomProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={className}
        {...props}
      />
    );
  }
);

InputAtom.displayName = 'InputAtom';
export default InputAtom;
