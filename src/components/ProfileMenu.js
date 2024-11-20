import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../slices/authSlice';
import { Menu, MenuItem, IconButton, colors } from '@mui/material';

const ProfileMenu = ({onLogout}) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
    onLogout();
  };

  return (
    <div>
      <IconButton onClick={handleMenuOpen}>
        HI
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleMenuClose}>Hi, {currentUser?.name || 'Guest'}</MenuItem>
        {currentUser && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
      </Menu>
    </div>
  );
};

export default ProfileMenu;
