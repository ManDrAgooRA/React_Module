import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import ThemeSwitch from '../UI/Switch';
import MyButton from './../UI/Button/MyButton';
import { changeIsLogin } from '../../store/actions'

export default function Header() {
    const { isLogin, user } = useSelector((state) => state.user)
    const [setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const history = useHistory()
    const dispatch = useDispatch()


    useEffect(() => {
        if (localStorage.getItem('session_id')) {
            dispatch(changeIsLogin())
        }
    }, [dispatch])

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {isLogin ?
                <Box>
                    <MenuItem onClick={() => history.push('/movies')}>
                        <p>Movies</p>
                    </MenuItem>

                    <MenuItem onClick={() => history.push('/favorites')}>
                        <p>Favorites</p>
                    </MenuItem>

                    <MenuItem onClick={() => history.push('/userinformation')}>
                        <p>Account</p>
                    </MenuItem>
                </Box>
                :
                <Box>
                    <MyButton color="inherit" onClick={() => { history.push('/login') }} sx={{ mx: 1, bgcolor: 'primary.light' }}>Login</MyButton>
                    <MyButton color="inherit" onClick={() => { history.push('/signUp') }} sx={{ mx: 1, bgcolor: 'primary.light' }}>Sign Up</MyButton>
                </Box>
            }

        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <ThemeSwitch />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Film
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    {isLogin ?
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                '&:hover': {
                                    cursor: 'pointer'
                                },
                            }}
                        >
                            <nav>
                                <ul style={{
                                    display: 'flex',
                                }}>
                                    <li onClick={() => { history.push('/movies') }}>Movies</li>
                                    <li onClick={() => { history.push('/favorites') }}>Favorites</li>
                                </ul>
                            </nav>
                            <Box
                                sx={{ display: { xs: 'none', md: 'flex' } }}
                                onClick={() => { history.push('/userinformation') }}
                            >
                                <p>{user.username}</p>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Box>
                        </Box>
                        :
                        <Box>
                            <MyButton color="inherit" onClick={() => { history.push('/login') }} sx={{ mx: 1, bgcolor: 'primary.light' }}>Login</MyButton>
                            <MyButton color="inherit" onClick={() => { history.push('/signUp') }} sx={{ mx: 1, bgcolor: 'primary.light' }}>Sign Up</MyButton>
                        </Box>
                    }

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box >
    );
}