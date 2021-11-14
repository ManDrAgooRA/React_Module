import React from 'react'
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { setSelecetdFilter } from '../../store/actions';

export default function FilterByGener() {
    const { genres, selectedGener } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    const handleToggle = (value) => {
        const currentIndex = selectedGener.indexOf(value);
        const newChecked = [...selectedGener];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        dispatch(setSelecetdFilter(newChecked))
        if (newChecked.length === 0) {
            dispatch(setSelecetdFilter([]))
        }
    }

    return (
        <>
            <Typography>By gener</Typography>
            <hr />
            {genres.map((gener) => {
                return (
                    <FormControlLabel
                        key={uuidv4()}
                        control={
                            <Checkbox
                                onChange={() => handleToggle(gener.id)}
                                checked={selectedGener.indexOf(gener.id) === -1 ? false : true}
                            />
                        }
                        label={gener.name}
                    />
                )

            })}
        </>
    )
}
