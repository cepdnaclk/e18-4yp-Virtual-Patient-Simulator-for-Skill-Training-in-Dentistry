import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Tooltip, ListItemIcon } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddBox from '@mui/icons-material/AddBox';
import Logout from '@mui/icons-material/Logout';
import Login from '@mui/icons-material/Login';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#ffffff',
    color: 'black',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    borderRadius: '20px',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
        margin: '16px',
        width: 'auto', // Set the width to auto or a specific value as needed
    },
    [theme.breakpoints.down('xs')]: {
        margin: 0, // Full width on small screens
        borderRadius: 0, // Remove border radius on small screens if desired
    },
}));

// ... rest of the component


const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
});

const NavbarButton = styled(Button)({
    margin: '0 8px',
});

const Navbar = ({ username }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Logout logic
        handleMenuClose();
        console.log('User logged out');
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <AccountCircle fontSize="small" />
                </ListItemIcon>
                {username}
            </MenuItem>
            <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );

    return (
        <StyledAppBar position="static">
            <StyledToolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Virtual Patient Simulator
                </Typography>
                <div>
                    {username ? (
                        <>
                            <NavbarButton startIcon={<Login />} color="inherit" onClick={() => console.log('Sign Up')}>
                                Sign Up
                            </NavbarButton>
                            <NavbarButton startIcon={<AddBox />} color="inherit" onClick={() => console.log('Create case')}>
                                Create Case
                            </NavbarButton>
                            <Tooltip title="Account settings">
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <NavbarButton startIcon={<AccountCircle />} color="inherit" onClick={() => console.log('Log In')}>
                                Log In
                            </NavbarButton>
                        </>
                    )}
                </div>
            </StyledToolbar>
            {renderMenu}
        </StyledAppBar>
    );
};

export default Navbar;
