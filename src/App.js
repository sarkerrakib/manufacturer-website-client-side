import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/Portfolio/MyPortfolio';
import Login from './Pages/Login/Login';
import NotFound from './Pages/Shared/NotFound';
import Blog from './Pages/Blog/Blog';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReview from './Pages/Dashboard/MyReview';
import Services from './Pages/Home/Services';
import Details from './Pages/Details.js/Details';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services/:id" element={
        <RequireAuth>
          <Details />
        </RequireAuth>
        } />
        {/* //nested routes */}
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>

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
