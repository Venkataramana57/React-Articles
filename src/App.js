import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Articles from './pages/articles/List';
import NewArticle from './pages/articles/NewArticle';
import ArticleDetails from './pages/articles/Details';
import ProfileMenu from './components/ProfileMenu';
import EditArticle from './pages/articles/EditArticle';

function App() {
  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Articles
          </Typography>

          <ProfileMenu onLogout={handleLogout} />
        </Toolbar>
      </AppBar>

      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/articles' element={<Articles />}></Route>
          <Route path='/new-article' element={<NewArticle />}></Route>
          <Route path='/articles/:id' element={<ArticleDetails/>}></Route>
          <Route path='/articles/:id/edit' element={<EditArticle/>}></Route>
          <Route path='*' element={<NoPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
