import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import ProtectedLayout from './components/ProtectedLayout';

import Home from './pages/home/Home';
import Setting from './pages/setting/Setting';
import Student from './pages/student/Student';
import StudentDetail from './pages/student/StudentDetail'; // Импортируем компонент страницы студента
import Login from './pages/login/Login';
import FAQ from './pages/faq/Faq';

import LogOut from './components/LogOut';
import NotFound from './pages/NotFound';
import FirstLoginPage from './pages/FirstLoginPage/FirstLoginPage';
import Profile from './pages/profile/Profile/Profile'; // Импортируем компонент Profile
import Top from './pages/profile/Top/Top'; // Импортируем компонент Top
import Qa from './pages/profile/Qa/Qa'; // Импортируем компонент Qa
import Stats from './pages/profile/Stats/Stats'; // Импортируем компонент Stats

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedLayout />}>
            <Route index element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/:id" element={<StudentDetail />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/help" element={<FAQ />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="top" element={<Top />} />
              <Route path="qa" element={<Qa />} />
              <Route path="stats" element={<Stats />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/FirstloginPage" element={<FirstLoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
