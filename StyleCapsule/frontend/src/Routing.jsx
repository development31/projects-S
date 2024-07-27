import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import RecoveryCode from './components/RecoveryCode/RecoveryCode';
import ResetPassword from './components/ResetPassword/ResetPassword';

import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProfileAvatar from './components/ProfileAvatar/ProfileAvatar';
import ProfileBody from './components/ProfileBody/ProfileBody';
import PageNotFound from './components/PageNotFound/PageNotFound';

// Layout Component
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// App Component
const Routing = () => {
  return (
    <Router>
      <Routes>

        {/* Routes that do not require Navbar and Footer */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/recovery-code" element={<RecoveryCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        

        {/* Routes that require Navbar and Footer */}
        <Route element={<MainLayout />} >
              
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/edit-profile-avatar" element={<ProfileAvatar />} />
              <Route path="/edit-profile-body" element={<ProfileBody />} />
              <Route path="*" element={<PageNotFound />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default Routing;
