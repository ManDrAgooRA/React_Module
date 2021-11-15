import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MyInput from './UI/Input/MyInput'
import MyButton from './UI/Button/MyButton'
import { fetchFoundMovies } from '../store/thunk'
import { setSearchtString } from './../store/actions';
import { useSelector } from 'react-redux';

export default function Search({
    setPage,
    page,
}) {
    const dispatch = useDispatch()
    const { searchString } = useSelector((state) => state.filter)
    const [searchValue, setSearchValue] = useState()

    useEffect(() => {
        if (searchString) {
            dispatch(fetchFoundMovies(searchString, page))
        }

    }, [page, dispatch, searchString])


    const schema = yup.object().shape({
        search: yup
            .string()
            .required(),
    })

    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            search: searchString,
        }
    })

    const onSubmit = ({ search }) => {
        if (search) {
            dispatch(fetchFoundMovies(searchValue, page))
            dispatch(setSearchtString(search))
        } else {
            setPage(1)
            // dispatch(setSearchtString(''))
        }
    };

    const handlerReset = () => {
        setSearchValue('')
        localStorage.removeItem('searchValue')
        localStorage.setItem('currentPageLocalStorage', 1)
        dispatch(setSearchtString(null))

        setPage(1)
    }

    const checkValue = (value) => {
        if (value.length === 0) {
            handlerReset()
        }
    }

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <MyInput
                    {...register("search")}
                    placeholder='Enter flim name'
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                        checkValue(e.target.value)
                    }}
                    error={!!errors.search}
                    helperText={errors?.search?.message}
                />
                <Box>
                    <MyButton type='submit' sx={{ marginRight: 2 }}>Search</MyButton>
                    <MyButton type='reset' onClick={handlerReset}>Reset</MyButton>
                </Box>
            </form>

        </Box>

    )
}

Search.propTypes = {
    setPage: PropTypes.func,
    page: PropTypes.number,
}

Search.defaultProps = {
    page: 1,
    setPage: () => { },
}