import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { setSortString } from '../store/actions'
// import {setSortString} from ''

export default function Sort() {
    const dispatch = useDispatch();
    const { sortString } = useSelector((state) => state.filter)

    const handleChange = (event) => {
        dispatch(setSortString(event.target.value));
    };

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Sort Results By</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label">choose sort param</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={sortString}
                        onChange={handleChange}
                        label="choose sort param"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'popularity.desc'}>Popularity Descending</MenuItem>
                        <MenuItem value={'popularity.asc'}>Popularity Ascending</MenuItem>
                        <MenuItem value={'vote_average.desc'}>Rating Descending</MenuItem>
                        <MenuItem value={'vote_average.asc'}>Rating Ascending</MenuItem>
                        <MenuItem value={'primary_release_date.asc'}>Release Data Ascending</MenuItem>
                        <MenuItem value={'primary_release_date.desc'}>Release Data Descending</MenuItem>
                    </Select>
                </FormControl>
            </AccordionDetails>
        </Accordion>
    )
}
