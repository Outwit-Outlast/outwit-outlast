import React from 'react';

interface LoginTrigger {
  showComponent: boolean;
}

const Login: React.FC<LoginTrigger> = ({ showComponent }) => {
  return (
    <div className='popup'>{showComponent && <h3>Register Component</h3>}</div>
  );
};

export default Login;
