import React, { useState } from 'react';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types'
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import CircularStatic from '../components/UI/CircularStatic';
import * as api from '../apis'


export default function MovieCard({ movie }) {
    const { user } = useSelector((state) => state.user)
    const history = useHistory()
    const [snackMessage, setIsSnackMessage] = useState('Added to favorite list')
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const redirectHandler = () => {
        history.push(`/movies/${movie.id}`)
    }

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const addToFavorite = async (newState) => {
        api.fetchAddToFavoriteApi(user.id, localStorage.getItem('session_id'), movie.id)
        let status = await api.checkFavoriteFilmApi(movie.id, localStorage.getItem('session_id'))

        if (!status) {
            setState({ open: true, ...newState });
        } else {
            setIsSnackMessage('deleted')
            setState({ open: true, ...newState });
        }
    }

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={snackMessage}
                action={action}
                key={vertical + horizontal}
            />
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    '&:hover': {
                        boxShadow: '5px 7px 12px 0px rgba(34, 60, 80, 0.29)'
                    }
                }}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: 0
                    }}>

                    {movie.poster_path ?
                        <Box
                            sx={{
                                position: 'relative',
                                paddingBottom: '400px',
                                background: '#bebebe',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}
                            onClick={redirectHandler}
                        >
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.original_title}`}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    top: 0,
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </Box>
                        :

                        <Box
                            sx={{
                                position: 'relative',
                                height: '400px',
                                background: '#bebebe',
                                padding: '26px 20px 0 20px',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}
                            onClick={redirectHandler}
                        >
                            <Skeleton
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    top: 0,
                                    width: '100%',
                                    height: '100%',

                                }} />
                        </Box>
                    }


                    <Box
                        sx={{
                            padding: '26px 20px 0 20px',
                            position: 'relative'
                        }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '-24px',
                            }}
                        >
                            <CircularStatic progress={Math.round(movie.vote_average * 10)} />
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >

                            <Box>
                                <Typography color="text.primary"
                                    sx={{
                                        fontWeight: 'bold',
                                        transition: '.4s',
                                        '&:hover': {
                                            color: '#1e88e5',
                                            cursor: 'pointer'
                                        }
                                    }}
                                    onClick={redirectHandler}

                                >
                                    {movie.original_title}
                                </Typography>
                                <Typography color="text.secondary">
                                    {movie.release_date}
                                </Typography>
                            </Box>

                            <CardActions disableSpacing onClick={() => addToFavorite({
                                vertical: 'top',
                                horizontal: 'right',
                            })}>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                        </Box>
                    </Box>
                </CardContent>
            </Card >
        </>
    );
}

MovieCard.defaultProps = {
    movie: {}
}

MovieCard.propTypes = {
    movie: PropTypes.object
}