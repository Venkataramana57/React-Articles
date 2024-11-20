import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, TextField, Typography, Link, Grid, Container } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { login } from '../../slices/authSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Login = () => {
  const dispatch = useDispatch();
	const navigate = useNavigate();
  const emailRef = useRef();
	const pwdRef = useRef();
  const isUserLoggedin = useSelector((state) => state.auth.isLoggedin);
  useEffect(() => {
    if(isUserLoggedin) {
      navigate('/');
    }
  }, [isUserLoggedin]);
	
	const handleSubmit = e => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = pwdRef.current.value;

		if(!email || !password) {
			alert('Please enter email and password')
			return;
		}

		dispatch(login({email, password}));
	}

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
						inputRef={emailRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
						inputRef={pwdRef}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} to="/forgot-password" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
