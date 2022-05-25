import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/Portfolio/MyPortfolio';
import Login from './Pages/Login/Login';
import NotFound from './Pages/Shared/NotFound';
import Blog from './Pages/Blog/Blog';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<MyPortfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
