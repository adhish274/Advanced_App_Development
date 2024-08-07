import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled
} from '@mui/material';
import {
  LocalizationProvider,
  MobileDatePicker,
  TimePicker,
} from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import Header from './Header';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './footer.css';

import background from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/background.jpg'
import Foot from './Footer/Foot';
// Styled component for hoverable images
const HoverableImageListItem = styled(ImageListItem)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, filter 0.3s ease',
  '&:hover img': {
    transform: 'scale(1.1)',
    filter: 'brightness(80%)',
  },
  '& img': {
    width: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease, filter 0.3s ease',
  }
}));

const BookingForm = () => {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);

  return (
    <div style={{ fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif' }}>
      <Header />
     
        <Container maxWidth="lg" sx={{ mt: 10, position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ width: '100%' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                  {itemData.map((item) => (
                    <HoverableImageListItem key={item.img}>
                      <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </HoverableImageListItem>
                  ))}
                </ImageList>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom color="primary.main" fontWeight="bold">
                  Booking Form
                </Typography>
                <Typography variant="h7" gutterBottom fontWeight="bold" color="red">
                  Experience something new every moment
                </Typography>
              </Box>
              <Card sx={{ mt: 4 }}>
                <CardContent>
                  <Box component="form">
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="First Name" variant="outlined" />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Last Name" variant="outlined" />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField required fullWidth label="E-mail" variant="outlined" type="email" />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField required fullWidth label="Number of Guests" variant="outlined" type="number" />
                      </Grid>
                      <Grid item xs={12}>
                        <Select fullWidth displayEmpty defaultValue="">
                          <MenuItem value="" disabled>
                            Please Select
                          </MenuItem>
                          <MenuItem value="Birthday">Birthday</MenuItem>
                          <MenuItem value="Wedding">Wedding</MenuItem>
                          <MenuItem value="Conference">Conference</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <MobileDatePicker
                            label="Arrival Date"
                            value={arrivalDate}
                            onChange={(newValue) => setArrivalDate(newValue)}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <TimePicker
                            label="Arrival Time"
                            value={arrivalTime}
                            onChange={(newValue) => setArrivalTime(newValue)}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <MobileDatePicker
                            label="Departure Date"
                            value={departureDate}
                            onChange={(newValue) => setDepartureDate(newValue)}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField fullWidth label="Special Requests" variant="outlined" multiline rows={4} />
                      </Grid>
                      <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Button variant="contained" color="primary" size="large">
                          Make Payment
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      
      
        <Foot/>
      </div>
  );
};

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1601482441062-b9f13131f33a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1533120921505-7f40f5237ee1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1588963200960-44cf8e2b6fed?q=80&w=3125&auto=format&fit=crop&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1670529774543-98dd1e0f84d1?q=80&w=3086&auto=format&fit=crop&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Coffee',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?q=80&w=3086&auto=format&fit=crop&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Storage',
  },
];

export default BookingForm;
