import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import Foot from '../Footer/Foot';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const data = [
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/7904/3_2/960/jpg/banquet-hall-pinnacle-grand-hotel-banquets-banquet-hall-124_15_297904-159361984124061.webp',
    title: 'Pinnacle Grand Hotel & Banquets',
    location: 'Sola, Ahmedabad',
    accommodation: '50-1000',
    rating: 4.3,
    price: '7000-50000',
    about: 'They have all types of event spaces that you can choose from for your grand night and have the function in the most memorable way.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/0570/3_2/960/jpg/a09i9323_15_440570-169873150995671.webp',
    title: 'Hotel German Palace',
    location: 'Airport Gandhinagar Highway, Ahmedabad',
    accommodation: '100-700',
    rating: 4.2,
    price: '35000-80000',
    about: 'Known for its excellent catering services and beautiful interiors.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/4196/3_2/960/png/decorative-details_v4.webp',
    title: 'Zesty Treat',
    location: 'Ranip, Ahmedabad',
    accommodation: '100-800',
    rating: 4.6,
    price: '25000-160000',
    about: 'Zesty Treat is an ideal venue space based in the city of Ahmedabad where you can host a plethora of pre-wedding and wedding functions. The venue is easily accessible from all parts of the city that can be highly advantageous to you and your guests as well.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/4432/3_2/960/png/originality_v2.webp',
    title: 'Splash The Fun World',
    location: 'Sarkhej, Ahmedabad',
    accommodation: '100-300',
    rating: 4.2,
    price: '25000-60000',
    about: ' This banquet hall makes for a perfect spot for hosting a themed based wedding or a wedding party given to the tranquility which is a gift of its perfect location.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/5844/3_2/960/jpg/img-0593_15_115844-159343027296346.webp',
    title: 'Hotel Le Grande Residency',
    location: 'Ambavadi, Ahmedabad',
    accommodation: '150-300',
    rating: 3.8,
    price: '15000-30000',
    about: 'At Le Grande Residency, Ellis Bridge, Ahmedabad, you can look forward to an enjoyable time, replete with impeccable service. The staff puts in a lot of effort to make your event truly memorable.',
  },
];

const Ahmedabad = () => {
  const navigate = useNavigate();

  const renderPapers = () => {
    return data.map((item, index) => (
      <Grid item xs={12} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper
          sx={{
            p: 2,
            mt: 2,
            mb: 2,
            width: 700, // Fixed card width
            flexGrow: 1,
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#fff',
            display: 'flex',
            flexDirection: 'row',
            fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif', // Apply the font family
          }}
        >
          <Grid container direction="row" alignItems="center">
            <Grid item xs={4}>
              <ButtonBase
                sx={{
                  width: '100%',
                  height: '100%',
                  '&:hover': {
                    backgroundColor: 'transparent', // Removes the default hover effect
                    '&:focus': {
                      outline: 'none',
                    },
                  },
                }}
              >
                <Img alt={item.title} src={item.imgSrc} />
              </ButtonBase>
            </Grid>
            <Grid item xs={8} sx={{ paddingLeft: 2 }}>
              <Typography 
                gutterBottom 
                variant="subtitle1" 
                component="div" 
                align="left" 
                sx={{ fontWeight: 700 }} // Increased font weight for the title
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="left" gutterBottom>
                <StarIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.rating}
              </Typography>
              <Typography variant="body2" align="left" gutterBottom>
                <LocationOnIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.location}
              </Typography>
              <Typography variant="body2" align="left" gutterBottom>
                <AccountBalanceIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.about}
              </Typography>
              <Typography variant="body2" align="left" gutterBottom>
                <PeopleIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.accommodation}
              </Typography>
              <Typography variant="body2" align="left" gutterBottom>
                <CurrencyRupeeIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.price}
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => { navigate("/bookingform") }}>
                Book
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    ));
  };

  return (
    <div>
      <Header />
      <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
        {renderPapers()}
      </Grid>
      <Foot/>
    </div>
  );
};

export default Ahmedabad;
