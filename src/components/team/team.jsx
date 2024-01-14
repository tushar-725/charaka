// Blog.jsx
import React from 'react';
import { Typography, CssBaseline, Box } from '@mui/material';
import teamBanner from '../../images/teamBanner.jpg';
import '../../App.css';
const bowlbyFont = "'Bowlby One SC', sans-serif";

const Team = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${teamBanner})`, // Replace with the actual path
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
      </div>
      <Box style={{ marginTop: '40px'}}>
        <Typography variant="h3" gutterBottom sx={{fontFamily: bowlbyFont}}>
          OUR TEAM
        </Typography>
        <Typography variant="body1">
          Stay tuned!
        </Typography>
      </Box>
    </div>
  );
};

export default Team;
