import React from 'react'
import UserForm from '@components/Organisms/UserForm';
import { LoginPageButton, LoginPageTitle } from '@utils/constants';

const Login = () => {
return (
    <>
      <UserForm
        buttonName={LoginPageButton}
        TitleName={LoginPageTitle}
      />
    </>
  );
};

export default Login;
