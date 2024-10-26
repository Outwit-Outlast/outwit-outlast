import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

interface LoginVerify {
  (username: string, password: string): Promise<void>;
}

const LoginPageContainer = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const navigate = useNavigate();

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleShowRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const login: LoginVerify = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8080/user/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Not authorized');
      } else {
        navigate('/dash');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div className='buttons-login'>
        <button onClick={handleShowLogin}>Sign in</button>
        <button onClick={handleShowRegister}>Sign up</button>
      </div>
      <Login showComponent={showLogin} login={login} />
      <Register showComponent={showRegister} />
    </div>
  );
};

export default LoginPageContainer;
