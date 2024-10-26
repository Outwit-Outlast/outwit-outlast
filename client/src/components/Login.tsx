import { useState } from 'react';

interface LoginProps {
  showComponent: boolean;
  login: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ showComponent, login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(username, password);
  };

  return (
    <div className='popup'>
      {showComponent && (
        <form onSubmit={loginSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
