import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { Grid } from '@mui/material';
import { fetchFavoriteMoives } from '../store/thunk'
import Loader from './../components/UI/Loader/Loader'
import MovieCard from './MovieCard'
import MyPagination from './../components/UI/MyPagination';
import { setCurrentFavoritePage } from './../store/actions';

export default function Favorites() {
    const { user } = useSelector((state) => state.user)
    const { favoritesMovies, isLoadingFavoritesMovies, currentPage, totalPages } = useSelector((state) => state.favoriteMoives)
    const [favoritePage, setFavoritePage] = useState(currentPage);
    const dispatch = useDispatch()

    useEffect(() => {
        let pageLocal = JSON.parse(localStorage.getItem('currentFavoritesPageLocalStorage'))

        if (pageLocal) {
            setFavoritePage(pageLocal)
            setCurrentFavoritePage(pageLocal)
            dispatch(fetchFavoriteMoives(localStorage.getItem('session_id'), user.id, pageLocal))
        } else {
            setFavoritePage(currentPage)
            setCurrentFavoritePage(currentPage)
            dispatch(fetchFavoriteMoives(localStorage.getItem('session_id'), user.id, currentPage))
        }

    }, [dispatch, favoritePage, currentPage, user.id])


    const changePage = (event, value) => {
        setFavoritePage(value)
        setCurrentFavoritePage(value)
        localStorage.setItem('currentFavoritesPageLocalStorage', JSON.stringify(value))
    }

    if (isLoadingFavoritesMovies) {
        return <Loader />
    }

    return (
        <>
            <Grid container spacing={2} sx={{ my: 4 }}>
                {favoritesMovies.map((favoritesMovie) => {
                    return <Grid key={uuidv4()} item xs={12} md={3}>
                        <MovieCard movie={favoritesMovie}></MovieCard>
                    </Grid>
                })}
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <MyPagination count={totalPages} page={favoritePage} changePage={changePage} />
                </Grid>
            </Grid>

        </>
    )
}
