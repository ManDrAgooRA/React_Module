import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './Loader.scss'

export default function Loader() {
    return (
        <div className='loader-wrapper'>
            <CircularProgress />
        </div>
    );
}
