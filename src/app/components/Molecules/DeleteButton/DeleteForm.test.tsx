// DeleteForm.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteForm from './DeleteButton';
import { FormAtomProps } from '../../atoms/FormAtom/FormAtom';
import { InputAtomProps } from '../../atoms/Input/Input';
import { ButtonAtomProps } from '../../atoms/Button/Button';

// Mock all atomic components to keep the test isolated
jest.mock('../../atoms/FormAtom/FormAtom', () => (props: FormAtomProps) => <form {...props} />);
jest.mock('../../atoms/Input/Input', () => (props: InputAtomProps) => <input {...props} />);
jest.mock('../../atoms/Button/Button', () => (props: ButtonAtomProps) => <button {...props}>{props.label}</button>);


describe('DeleteForm', () => {

  it('renders the form with the id', () => {
    render(<DeleteForm id="123" />);
    // Check if the Delete button is rendered
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
    // Check if the hidden input with value '123' and name 'todoId' exists
    expect(screen.getByDisplayValue('123')).toHaveAttribute('name', 'todoId');
  });

  // Optionally, you can test the form submit:
  it('calls the delete function on submit', () => {
    // If you pass a delete function as a prop, you can mock and test it here
    render(<DeleteForm id="123" />);
    const button = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(button);
    // Your checks can go here (e.g., was an action called?)
  });
});
