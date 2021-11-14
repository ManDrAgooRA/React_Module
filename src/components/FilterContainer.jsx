import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterByGener from './Filters/FilterByGener';
import FilterByLanguage from './Filters/FilterByLanguage';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function FilterContainer() {

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Filters</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FilterByGener />
                    <FilterByLanguage />
                </AccordionDetails>
            </Accordion>
        </>
    )
}
