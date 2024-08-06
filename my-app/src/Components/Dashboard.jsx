import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Container,
  Divider,
  Typography,
  MenuItem,
  Drawer,
  CssBaseline,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  ListSubheader,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Event as EventIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  AccountBalance as AccountBalanceIcon,
  RecentActors as RecentActorsIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

const drawerWidth = 240;

const data = [
  { name: 'AUG-1', sales: 12000 },
  { name: 'AUG-2', sales: 30000 },
  { name: 'AUG-3', sales: 10000 },
  { name: 'AUG-4', sales: 15000 },
  { name: 'AUG-5', sales: 20000 },
  { name: 'AUG-6', sales: 24000 },
  { name: 'AUG-7', sales: 22000 },
  { name: 'AUG-8', sales: 21000 },
  { name: 'AUG-9', sales: 20000 },
];

const recentOrders = [
  { date: '16 Mar, 2019', name: 'Elvis Presley', shipTo: 'Tupelo, MS', paymentMethod: 'VISA •••• 3719', saleAmount: 312.44 },
  { date: '16 Mar, 2019', name: 'Paul McCartney', shipTo: 'London, UK', paymentMethod: 'VISA •••• 2574', saleAmount: 866.99 },
  { date: '16 Mar, 2019', name: 'Tom Scholz', shipTo: 'Boston, MA', paymentMethod: 'MC •••• 1253', saleAmount: 100.81 },
  { date: '16 Mar, 2019', name: 'Michael Jackson', shipTo: 'Gary, IN', paymentMethod: 'AMEX •••• 2000', saleAmount: 654.39 },
  { date: '15 Mar, 2019', name: 'Bruce Springsteen', shipTo: 'Long Branch, NJ', paymentMethod: 'VISA •••• 5912', saleAmount: 212.79 },
];

// ToggleColorMode component to switch between light and dark mode
function ToggleColorMode({ mode, toggleColorMode }) {
  return (
    <Button
      onClick={toggleColorMode}
      color="inherit"
      variant="outlined"
      sx={{ ml: 1 }}
    >
      {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
}

ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

function AppHeader({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2, // Add margin top to create space between top of the page and header
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            bgcolor:
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.4)'
                : 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow:
              theme.palette.mode === 'light'
                ? '0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)'
                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              ml: '-18px',
              px: 0,
            }}
          >
            <img
              src={
                'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
              }
              style={logoStyle}
              alt="logo of sitemark"
            />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <MenuItem
                onClick={() => scrollToSection('features')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="body2" color="text.primary">
                  Features
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection('testimonials')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="body2" color="text.primary">
                  Testimonials
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection('highlights')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="body2" color="text.primary">
                  Highlights
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection('pricing')}
                sx={{ py: '6px', px: '12px' }}
              >
                
                <Typography variant="body2" color="text.primary">
                  FAQ
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              alignItems: 'center',
            }}
          >
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            <Button
              color="primary"
              variant="text"
              size="small"
              component="a"
              href="/material-ui/getting-started/templates/sign-in/"
              target="_blank"
            >
              Sign in
            </Button>
            <Button
            fontWeight="bold"
              color="primary"
              variant="contained"
              size="small"
              component="a"
              href="/material-ui/getting-started/templates/sign-up/"
              target="_blank"
            >
              Sign up
            </Button>
          </Box>
          <Box sx={{ display: { sm: '', md: 'none' } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: '30px', p: '6px' }}
            >
              <MenuIcon />
            </Button>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{ sx: { pb: '30px' } }}
            >
              <List sx={{ pt: 0 }}>
                <ListSubheader
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'background.default',
                    py: 1,
                  }}
                >
                  <img
                    src={
                      'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                    }
                    style={logoStyle}
                    alt="logo of sitemark"
                  />
                  <Box sx={{ flexGrow: 1 }} />
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={toggleDrawer(false)}
                    sx={{ minWidth: '30px', p: '6px', mx: 1 }}
                  >
                    <MenuIcon />
                  </Button>
                </ListSubheader>
                <ListItem button onClick={() => scrollToSection('features')}>
                  <ListItemText primary="Features" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection('testimonials')}>
                  <ListItemText primary="Testimonials" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection('highlights')}>
                  <ListItemText primary="Highlights" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection('pricing')}>
                  <ListItemText primary="Pricing" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection('faq')}>
                  <ListItemText primary="FAQ" />
                </ListItem>
                <Divider sx={{ my: 1 }} />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    px: 2,
                    gap: 3,
                    flexWrap: 'wrap',
                  }}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    component="a"
                    href="/material-ui/getting-started/templates/sign-up/"
                    target="_blank"
                  >
                    Sign up
                  </Button>
                  <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    component="a"
                    href="/material-ui/getting-started/templates/sign-in/"
                    target="_blank"
                  >
                    Sign in
                  </Button>
                  <ToggleColorMode
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                  />
                </Box>
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

AppHeader.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

function DashboardContent() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default', mt: 1 }}> {/* mt: 8 to provide space for the AppBar */}
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 180, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Toolbar />
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
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 1 }}> {/* mt: 8 to match the space created by AppBar */}
        <Toolbar />
        <Typography variant="h3" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 340,transition: '0.3s',
                  '&:hover': {
                    boxShadow: 6,
                  }, }}>
            <Typography variant="h4" gutterBottom>
                  Booking Graph
                </Typography>
              <ResponsiveContainer>
                <LineChart
                  data={data}
                  margin={{
                    top: 16,
                    right: 16,
                    bottom: 0,
                    left: 24,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis>
                    <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
                      Sales (₹)
                    </Label>
                  </YAxis>
                  <Tooltip />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 340,transition: '0.3s',
                  '&:hover': {
                    boxShadow: 6,
                  }, }}>
            <Typography variant="h3" gutterBottom>
                  Booking Sales
                </Typography>
                <Typography component="p" variant="h4">
                  $3,024.00
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ flex: 1 }}>
                  on 15 March, 2019
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Recent Orders
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell align="right">Sale Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recentOrders.map((order) => (
                        <TableRow key={order.date + order.name}>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.name}</TableCell>
                          <TableCell>{order.shipTo}</TableCell>
                          <TableCell>{order.paymentMethod}</TableCell>
                          <TableCell align="right">{order.saleAmount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default function Dashboard({ mode, toggleColorMode }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppHeader mode={mode} toggleColorMode={toggleColorMode} />
      <DashboardContent />
    </Box>
  );
}

Dashboard.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};