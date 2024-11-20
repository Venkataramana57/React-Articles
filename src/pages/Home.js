import React from 'react';
import { Box,Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          
          {!currentUser && 'Welcome to Articles.'}

					{currentUser ? `Welcome Mr. ${currentUser.name}` : <Button variant="contained" component={Link} to="/login">
            Login Here
          </Button>}
        </Typography>

        <Typography variant="body1" gutterBottom>
          This is a sample application.

					<span>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</span>
        </Typography>

        {currentUser && <Button fullWidth variant="contained" component={Link} to="/articles" sx={{ mt: 3, mb: 2 }}>
          Articles
        </Button>}
      </Container>
    </Box>
  );
};

export default Home;
