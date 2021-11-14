import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedLanguage } from '../../store/actions'
import { fetchLangaugeList } from '../../store/thunk'

export default function FilterByLanguage() {
    const { languageList, selectedLanguage } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        if (languageList.length === 0) {
            dispatch(fetchLangaugeList())
        }
    }, [dispatch, languageList.length])

    const handleChange = (event) => {
        dispatch(setSelectedLanguage(event.target.value));
    };

    return (
        <>
            <hr />
            <Typography sx={{ my: 2 }}>Language</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedLanguage}
                    label="Language"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {languageList.map((item) => {
                        return <MenuItem key={uuidv4()} value={item.iso_639_1}>{item.english_name}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </>
    )
}
