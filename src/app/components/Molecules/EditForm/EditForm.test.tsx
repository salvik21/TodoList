// EditForm.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditForm from './EditForm';
import { FormAtomProps } from '../../atoms/FormAtom/FormAtom';
import { InputAtomProps } from '../../atoms/Input/Input';
import { ButtonAtomProps } from '../../atoms/Button/Button';
import { CheckboxAtomProps } from '../../atoms/CheckboxAtom/CheckboxAtom';


// Mock all atomic components to isolate the test
jest.mock('../../atoms/FormAtom/FormAtom', () => (props: FormAtomProps) => <form {...props}>{props.children}</form>);
jest.mock('../../atoms/Input/Input', () => (props: InputAtomProps) => <input {...props} />);
jest.mock('../../atoms/Button/Button', () => (props: ButtonAtomProps) => <button {...props}>{props.label}</button>);
jest.mock('../../atoms/CheckboxAtom/CheckboxAtom', () => (props: CheckboxAtomProps) => <input type="checkbox" {...props} />);
jest.mock('../LabelText', () => () => <label>Completed</label>);

describe('EditForm', () => {
  const task = {
    id: '123',
    title: 'test task',
    completed: true,
  };

  it('renders the form with correct initial values', () => {
    render(<EditForm task={task} />);
    // Check the hidden input for id
    expect(screen.getByDisplayValue('123')).toHaveAttribute('name', 'id');
    // Check the input for title
    expect(screen.getByDisplayValue('test task')).toHaveAttribute('name', 'title');
    // Check if the checkbox is checked (completed is true)
    const checkbox = screen.getByRole('checkbox', { name: '' }); // name is not defined for the checkbox, so find by role
    expect(checkbox).toBeChecked();
    // Check if the update button is present
    expect(screen.getByRole('button', { name: /update/i })).toBeInTheDocument();
  });

  it('submits the form when the button is clicked', () => {
    render(<EditForm task={task} />);
    const button = screen.getByRole('button', { name: /update/i });
    fireEvent.click(button);
    // Here you could check if the action (editTodo) is called if it is mocked and passed as a prop
  });
});
