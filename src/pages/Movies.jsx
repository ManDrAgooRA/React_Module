import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { setCurrentPage } from '../store/actions'
import MovieCard from './MovieCard';
import Loader from './../components/UI/Loader/Loader';
import MyPagination from '../components/UI/MyPagination';
import Search from '../components/Search';
import { fetchGenres, fetchFilterByGener, fetchFoundMovies } from './../store/thunk';
import Aside from '../components/Aside';

export default function Movies() {
    const dispatch = useDispatch();
    const { movies, isLoading, totalPages, selectedGener, sortString, searchString, selectedLanguage } = useSelector((state) => state.movies)
    const [searchValue, setSearchValue] = useState('')
    const [page, setPage] = useState()

    useEffect(() => {

        if (movies.length) {
            dispatch(fetchFilterByGener(selectedGener.join(','), sortString, selectedLanguage, 1))
        }

    }, [dispatch, selectedGener, sortString, selectedLanguage, movies.length])

    useEffect(() => {
        let localStoragePage = JSON.parse(localStorage.getItem('currentPageLocalStorage'))

        if (searchString) {
            fetchFoundMovies(searchString, localStoragePage)
            setPage(localStoragePage)

        } else if (localStoragePage) {
            dispatch(fetchGenres())
            dispatch(fetchFilterByGener(selectedGener.join(','), sortString, selectedLanguage, localStoragePage))
            setPage(localStoragePage)

        } else {
            dispatch(fetchGenres())
            dispatch(fetchFilterByGener(selectedGener.join(','), sortString, selectedLanguage, 1))
            setPage(1)
        }

    }, [page, dispatch, searchString, selectedGener, sortString, selectedLanguage])

    const changePage = (event, value) => {
        setPage(value)
        setCurrentPage(value)
        localStorage.setItem('currentPageLocalStorage', JSON.stringify(value))
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <Grid container spacing={2} sx={{ my: 4 }}>

                <Grid item xs={12} lg={12}>
                    <Search setPage={setPage} page={page} searchValue={searchValue} setSearchValue={setSearchValue} />
                </Grid>

                <Grid item xs={12} lg={3}
                    sx={{
                        padding: 0,
                        fontSize: '14px',
                    }}
                >
                    <Aside />
                </Grid>
                <Grid container spacing={2} item lg={9} >
                    {movies.map((movie) => {
                        return (
                            <Grid key={uuidv4()} item xs={12} lg={3} >
                                <MovieCard movie={movie}></MovieCard>
                            </Grid>
                        )
                    })}
                </Grid>

                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <MyPagination count={totalPages} page={page} changePage={changePage} />
                </Grid>
            </Grid>
        </>
    )
}
