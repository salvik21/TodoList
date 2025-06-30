import React from 'react'
import UserForm from '@components/Organisms/UserForm';
import { RegisterPageButton, RegisterPageTitle } from '@utils/constants';


const Register = () => {
  return (
    <>
      <UserForm
        buttonName={"RegisterPageButton"}
        TitleName={"RegisterPageTitle"}
      />
    </>
  );
};

export default Register;
