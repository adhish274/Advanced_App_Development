import React from 'react';
import { Box, Grid, Typography, Icon } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WineBarIcon from '@mui/icons-material/WineBar';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Header from '../Header';

const events = [
  { icon: <RestaurantIcon />, label: 'Banquets', color: 'red' },
  { icon: <EmojiEventsIcon />, label: 'Celebrations', color: 'orange' },
  { icon: <MusicNoteIcon />, label: 'Concerts', color: 'blue' },
  { icon: <BusinessCenterIcon />, label: 'Conferences', color: 'orange' },
  { icon: <BusinessCenterIcon />, label: 'Corporate Events', color: 'green' },
  { icon: <MonetizationOnIcon />, label: 'Fundraisers', color: 'red' },
  { icon: <SchoolIcon />, label: 'Galas and Proms', color: 'green' },
  { icon: <GroupIcon />, label: 'Meetings', color: 'red' },
  { icon: <WineBarIcon />, label: 'Parties', color: 'blue' },
  { icon: <HandshakeIcon />, label: 'Receptions', color: 'orange' },
  { icon: <Diversity3Icon />, label: 'Reunions', color: 'red' },
  { icon: <FavoriteIcon />, label: 'Weddings', color: 'blue' },
];

const AboutUs = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
    <Box sx={{ padding: '20px', textAlign: 'center', fontFamily: 'Quicksand, "Helvetica Neue", Arial, sans-serif' }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" />
      <Typography variant="h7" gutterBottom sx={{ color: 'red', fontWeight: 'bold' ,fontFamily: 'Quicksand, "Helvetica Neue", Arial, sans-serif' }}>
        PERFECT FOR BANQUET/RECEPTION HALLS AND WEDDING VENUES
      </Typography>
      <Typography variant="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 'medium', fontFamily: 'Quicksand, "Helvetica Neue", Arial, sans-serif' }}>
        Manage any kind of event that your venue books
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {events.map((event, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
            <Box
              sx={{
                borderRadius: '50%',
                width: '70px',
                height: '70px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: `${event.color}.100`,
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                mb: 1,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
                },
            }}
            >
              <Icon sx={{ fontSize: '35px', color: event.color }}>{event.icon}</Icon>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'regular',fontFamily: 'Quicksand, "Helvetica Neue", Arial, sans-serif' }}>{event.label}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
    <div>
    <footer className='outer-footer'>
              <div class="footer-content">
                  <h3>HallSpace</h3>
                  <p>Your one-stop solution for booking halls for events, meetings, and more.</p>
                  <ul class="socials">
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
              </div>
              <div class="footer-bottom">
                  <p>&copy; 2024 HallSpace. Designed by Team8</p>
              </div>
            </footer>
    </div>
        </div>
  );
};

export default AboutUs;
