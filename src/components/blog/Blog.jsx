// Blog.jsx
import React from 'react';
import { Container, Typography, CssBaseline, Box } from '@mui/material';
import blogBanner from '../../images/blog2.jpg';
import '../../App.css';
const bowlbyFont = "'Bowlby One SC', sans-serif";

const Blog = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${blogBanner})`, // Replace with the actual path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#260251',
        }}
      >
        <CssBaseline />
        <Box>
          <Typography variant='h2' fontSize='70px' component="div" sx={{fontFamily: bowlbyFont}}>
            Blogs...
          </Typography>
        </Box>
      </div>
      <Container style={{ marginTop: '40px'}}>
        <Typography variant="h4" gutterBottom sx={{fontFamily: bowlbyFont}}>
          Coming Soon...
        </Typography>
        <Typography variant="body1">
          Stay tuned!
        </Typography>
      </Container>
    </div>
  );
};

export default Blog;
