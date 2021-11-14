import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { useHistory } from 'react-router';
import { clearSeletedMovie } from '../store/actions';
import Loader from './../components/UI/Loader/Loader';
import CircularStatic from '../components/UI/CircularStatic';
import MyButton from './../components/UI/Button/MyButton';
import { fetchSelectedMovie } from '../store/thunk';

export default function MoviePage() {
    const history = useHistory();
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchSelectedMovie(id))
    }, [dispatch, id])

    const { selectedMovies, isLoadingCurrentMovie } = useSelector((state) => state.movies)

    if (isLoadingCurrentMovie) {
        return <Loader />
    }

    const handelerBack = () => {
        history.push(`${process.env.REACT_APP_REDIRECT_LINK}/movies`)
        dispatch(clearSeletedMovie())
    }

    return (
        <>
            <Grid container spacing={2}
                sx={{
                    my: 4
                }}
            >
                <Grid item xs={12} lg={4}>
                    <Box
                        sx={{ display: 'flex', height: '100%' }}
                    >
                        {selectedMovies.poster_path ?
                            <img src={`https://image.tmdb.org/t/p/w500${selectedMovies.poster_path}`} alt="poster"
                                style={{
                                    borderRadius: '14px',
                                    background: '#bebebe'
                                }}
                            />
                            :
                            <Skeleton sx={{ width: '100%', height: '100%' }} />
                        }

                    </Box>
                </Grid>

                <Grid item xs={12} lg={8}>
                    <MyButton onClick={handelerBack}
                        sx={{ my: 2 }}

                    >Back</MyButton>

                    <Box>
                        <Typography variant='h4' component='h4'>{selectedMovies.original_title}</Typography>
                        <Box sx={{ position: 'relative', width: '50px', height: '50px' }}>
                            <CircularStatic progress={Math.round(selectedMovies.vote_average * 10)} />
                        </Box>
                        <p>{selectedMovies.id}</p>
                        <p>original_language :{selectedMovies.original_language}</p>
                        <p>{selectedMovies.overview}</p>
                        <p>Genres:</p>
                        <ul>
                            {selectedMovies.genres.map((genre) => {
                                return <li key={genre.name}>{genre.name}</li>
                            })}
                        </ul>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

