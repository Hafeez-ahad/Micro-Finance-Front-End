
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';  // <-- Import Link
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { loanLogoPic } from '../../utils/constant/pic.js';
import './M.css';


const drawerWidth = 240;
const navItems = [
  { name: 'Calulator', path: '/loancalculator' },
  { name: 'Status', path: '/userstatusById' },
  { name: 'AdminLogin', path: '/adminLogin' },
  { name: 'Dashboard', path: '/adminpage' },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}></Typography>
      <Divider />
      <List className='navItem' >
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
             
              <Link to={item.path} style={{ textDecoration: 'none' }}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
 <MenuIcon
    sx={{
      // ✅ Make the icon big on mobile
      fontSize: { xs: '60px', sm: '40px' }, // big on mobile, normal on larger screens
      color: '#fff', // optional: enforce white color
    }}
  />          </IconButton>
          <Typography className='navbarPic' variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <img className='logoImg' src={loanLogoPic} alt="" />
          </Typography>
          <Box className='navbarNav' sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button className='btn-menu' key={item.name} sx={{ color: '#fff' }}>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'white' }}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
      <Drawer
  container={container}
  variant="temporary"
  open={mobileOpen}
  onClose={handleDrawerToggle}
  ModalProps={{
    keepMounted: true,
  }}
  sx={{
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      background: '  rgb(255, 255, 255)',
      padding: '20px 10px',
      boxSizing: 'border-box',
      borderRight: '1px solid #ccc',
    },
  }}
>
  <Box sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2 }}>
      Menu
    </Typography>
    <Divider />
    <List>
      {navItems.map((item, index) => (
        <ListItem key={item.name} disablePadding> 
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link
              to={item.path}
              style={{
                textDecoration: 'none',
                color: 'white',
                width: '100%',
                display: 'block',
                padding: '10px 0px',
                fontWeight: '600',
                fontSize: '16px',
                background: '  rgba(25, 107, 222, 0.921)',
                border: '4px solid  rgb(38, 255, 0)',
                borderRadius: '5px'


              }}
            >
              {item.name}
            </Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
</Drawer>

      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
