import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import ListUsers from './pages/ListUsers';

import ButtonAppBar from './component/Navbar';

function App() {
  return (
    <>
      <ButtonAppBar />
      <Router>
        <Routes>
          <Route path='*' element={<Login />} />

          <Route path='/list-users' element={<ListUsers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
