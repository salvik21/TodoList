import React from 'react'
import Form from '../atoms/FormAtom/FormAtom';
import Input from '../atoms/Input/Input';
import Link from '../atoms/Link/LinkAtom';
import Title from '../atoms/Title/Title';
import { BackButton, InputPlaceholderEmail, InputPlaceholderPassword } from '../../../../utils/constants';

type UserFormProps = {
  action?: (formData: FormData) => void;
  buttonName: string;
  TitleName: string;
};



const UserForm = ({ action, buttonName, TitleName }: UserFormProps) => {
  return (
        <>
          <Link
      href="/"
      text={ BackButton }
      className="
        inline-flex items-center gap-2
        px-4 py-2
        rounded-xl
        bg-blue-50
        text-blue-600
        font-semibold
        shadow
        hover:bg-blue-100
        hover:text-blue-700
        transition
        mb-8
        ml-8 
        mt-8 
      "
    />

          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mt-8">
              <Title className="text-2xl font-bold mb-6 text-center text-blue-700">{TitleName}</Title>
              <Form action={action} className="space-y-6">
                <div className="mb-5">
                  <Input
                    name="email"
                    type="email"
                    placeholder={InputPlaceholderEmail}
                    className="w-full border-2 border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
                  />
                </div>
                <div className="mb-6">
                  <Input
                    name="password"
                    type="password"
                    placeholder={InputPlaceholderPassword}
                    className="w-full border-2 border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl transition uppercase tracking-wider shadow"
                >
                  {buttonName}
                </button>
              </Form>
            </div>
          </div>
        </>
  )
}

export default UserForm