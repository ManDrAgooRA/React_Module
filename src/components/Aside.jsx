import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import MyButton from './UI/Button/MyButton';
import { setSortString, setSelecetdFilter, setSelectedLanguage } from '../store/actions'
import FilterContainer from './FilterContainer';
import Sort from './Sort';

export default function Aside() {
    const dispatch = useDispatch();
    const [searchDisabled, setSearchDisabled] = useState(true);
    const { sortString, selectedGener, selectedLanguage } = useSelector((state) => state.movies)

    useEffect(() => {
        setSearchDisabled(true)
        if (selectedGener.length || sortString || selectedLanguage) {
            setSearchDisabled(false)
        }

    }, [selectedGener, sortString, selectedLanguage])

    const handleReset = () => {
        dispatch(setSelecetdFilter([]))
        dispatch(setSortString(''))
        dispatch(setSelectedLanguage(''))
    }

    return (
        <>
            <Sort />
            <FilterContainer />
            <MyButton fullWidth sx={{ my: 2 }} disabled={searchDisabled} onClick={handleReset}>Reset filters</MyButton>
        </>
    )
}