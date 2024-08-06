// src/components/ManageHall.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Paper, Grid, Typography, CssBaseline, Drawer, Toolbar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BarChartIcon from '@mui/icons-material/BarChart';
import Header from './Header';

// Utility function to generate random image URL
const getRandomImageUrl = () => {
  const images = [
    'https://image.shutterstock.com/image-photo/beautiful-decorated-indian-wedding-hall-260nw-2038499025.jpg',
    'https://image.shutterstock.com/image-photo/interior-decorated-indian-wedding-hall-260nw-2038499035.jpg',
    'https://image.shutterstock.com/image-photo/decorated-hall-indian-wedding-260nw-2038499027.jpg',
    // Add more URLs from the given website
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const drawerWidth = 180;

const ManageHall = () => {
  const [halls, setHalls] = useState([]);
  const [selectedHall, setSelectedHall] = useState(null);

  const handleSave = (hall) => {
    if (selectedHall) {
      setHalls(halls.map((h) => (h.id === hall.id ? hall : h)));
      setSelectedHall(null);
    } else {
      hall.id = Date.now();
      hall.image = getRandomImageUrl();
      setHalls([...halls, hall]);
    }
  };

  const handleEdit = (hall) => {
    setSelectedHall(hall);
  };

  const handleDelete = (id) => {
    setHalls(halls.filter((hall) => hall.id !== id));
  };

  const handleCancel = () => {
    setSelectedHall(null);
  };

  return (
    <div>
        <div>
            <Header/>
        </div>
    
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default', mt: 1 }}>
        
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          
        }}
      >
        {/* <Toolbar /> */}
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/users">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button component={Link} to="/managehall">
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Halls" />
          </ListItem>
          <ListItem button component={Link} to="/reports">
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <Toolbar /> */}
        <Typography variant="h4" gutterBottom>
          Manage Halls
        </Typography>
        <HallForm selectedHall={selectedHall} onSave={handleSave} onCancel={handleCancel} />
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {halls.map((hall) => (
            <Grid item xs={12} sm={6} md={4} key={hall.id}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">{hall.name}</Typography>
                <img src={hall.image} alt={hall.name} style={{ width: '100%', height: 'auto' }} />
                <Typography>Location: {hall.location}</Typography>
                <Typography>Amenities: {hall.amenities}</Typography>
                <Typography>Rating: {hall.rating}</Typography>
                <Typography>Pricing: {hall.pricing}</Typography>
                <Typography>Accommodation: {hall.accommodation}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button variant="outlined" color="primary" onClick={() => handleEdit(hall)}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => handleDelete(hall.id)}>
                    Delete
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    </div>
  );
};

const HallForm = ({ selectedHall, onSave, onCancel }) => {
  const [hall, setHall] = useState({
    name: '',
    location: '',
    amenities: '',
    rating: '',
    pricing: '',
    accommodation: '',
  });

  useEffect(() => {
    if (selectedHall) {
      setHall(selectedHall);
    }
  }, [selectedHall]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHall({ ...hall, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(hall);
    setHall({ name: '', location: '', amenities: '', rating: '', pricing: '', accommodation: '' });
  };

  return (
    <Paper sx={{ padding: 2, mb: 3 }}>
      <Typography variant="h6">{selectedHall ? 'Edit Hall' : 'Add Hall'}</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={hall.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="location"
          label="Location"
          value={hall.location}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="amenities"
          label="Amenities"
          value={hall.amenities}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="rating"
          label="Rating"
          type="number"
          value={hall.rating}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="pricing"
          label="Pricing"
          value={hall.pricing}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="accommodation"
          label="Accommodation"
          type="number"
          value={hall.accommodation}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            {selectedHall ? 'Update' : 'Add'}
          </Button>
          {selectedHall && (
            <Button onClick={onCancel} variant="outlined" color="secondary">
              Cancel
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default ManageHall;
