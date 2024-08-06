import React from 'react';
import { Container, Grid, Typography, Card, CardContent, IconButton, Box, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from './Header';
import './HomePage.css';

import Footer from './Footer';

const cardStyle = {
  boxShadow: 3,
  transition: '0.3s',
  '&:hover': {
    boxShadow: 6,
  },
  textAlign: 'center',
  height: '100%', // Ensure the height is consistent
};

const Contact = () => {
  return (
      <div>
        <div>
          <Header/>
        </div>

    <Container maxWidth="md" style={{ padding: '2rem 0' }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Contact HallSpace Booking System
      </Typography>
      <Divider style={{ margin: '1rem 0', backgroundColor: '#000', height: '2px' }} />
      <Typography variant="h6" align="center" paragraph>
        Whether you are curious about HallSpace features, want to learn more about a free trial, or just have a general question for us we are more than happy to answer any queries you may have. You can contact our team using the details below or fill out our contact form and send a request to our team.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card sx={cardStyle}>
            <CardContent>
              <HomeIcon fontSize="large" color="primary" />
              <Typography variant="h6" component="h2" gutterBottom>
                HallSpace Ltd.
              </Typography>
              <Typography variant="body1">
                C-5 Block, SKCET, Kuniyamuthur, Coimbatore, TamilNadu
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={cardStyle}>
            <CardContent>
              <PhoneIcon fontSize="large" color="primary" />
              <Typography variant="h6" component="h2" gutterBottom>
                01929 509 846
              </Typography>
              <Typography variant="body1">
                Feel free to Contact at us between
                (mon - fri 9am to 5pm)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={cardStyle}>
            <CardContent>
              <EmailIcon fontSize="large" color="primary" />
              <Typography variant="h6" component="h2" gutterBottom>
                info@hallspace.in
              </Typography>
              <Box>
                <IconButton color="primary" href="https://facebook.com">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary" href="https://twitter.com">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary" href="https://instagram.com">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
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
  );
};

export default Contact;