import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/Portfolio/MyPortfolio';
import Login from './Pages/Login/Login';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<MyPortfolio />} />
        <Route path="login" element={<Login />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
