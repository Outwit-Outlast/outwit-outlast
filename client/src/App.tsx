import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import LoginPageContainer from './containers/LoginPageContainer';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<LoginPageContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
