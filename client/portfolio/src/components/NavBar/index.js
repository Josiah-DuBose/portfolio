import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '90%',
    margin: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navList: {
    display: 'flex'
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.addEventListener('resize', setScreenWidth(window.innerWidth));
  }, [setScreenWidth]);

  return (
    <div className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Josiah DuBose
          </Typography>
          { screenWidth >= 1025 && 
            <List className={classes.navList}>
              <ListItem button>
                <ListItemText primary="Portfolio" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Pricing" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Contact" />
              </ListItem>
            </List> 
          }
          { screenWidth <= 1024 && 
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                aria-controls="nav-menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="nav-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Portfolio</MenuItem>
                <MenuItem onClick={handleClose}>Pricing</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Menu>
            </>
          }
        </Toolbar>
    </div>
  );
};

export default NavBar;
