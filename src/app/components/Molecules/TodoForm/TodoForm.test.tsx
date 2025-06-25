// TodoForm.test.tsx
/*import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoForm } from './TodoForm';
import { FormAtomProps } from '../../atoms/FormAtom/FormAtom';
import { InputAtomProps } from '../../atoms/Input/Input';
import { ButtonAtomProps } from '../../atoms/Button/Button';

// Mock all atom components to keep the test isolated
jest.mock('../../atoms/FormAtom/FormAtom', () => (props: FormAtomProps) => <form {...props}>{props.children}</form>);
jest.mock('../../atoms/Input/Input', () => (props: InputAtomProps) => <input {...props} />);
jest.mock('../../atoms/Button/Button', () => (props: ButtonAtomProps) => <button {...props}>{props.label}</button>);

describe('TodoForm', () => {
  it('renders the form with correct initial elements', () => {
    render(<TodoForm />);

    // Checks if the input with the correct placeholder exists
    expect(screen.getByPlaceholderText(/add a new todo/i)).toBeInTheDocument();

    // Checks if the button exists
    expect(screen.getByRole('button', { name: /add todo/i })).toBeInTheDocument();
  });

  it('submits the form when the button is clicked', () => {
    render(<TodoForm />);
    const button = screen.getByRole('button', { name: /add todo/i });
    fireEvent.click(button);
  });
});
*/