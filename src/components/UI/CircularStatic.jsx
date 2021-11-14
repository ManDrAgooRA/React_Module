import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
    const [ratingColor, setRatingColor] = useState('#21d07a')

    useEffect(() => {

        if (props.value < 70 && props.value > 40) {
            setRatingColor('#d2d531')
        }

        if (props.value < 40 && props.value > 1) {
            setRatingColor('#fa0203')
        }


    }, [setRatingColor, props.value])

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#212121',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
            }}
        >
            <CircularProgress variant="determinate" {...props} sx={{ color: `${ratingColor}` }} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="#f3e5f5" >
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

export default function CircularStatic({ progress }) {
    return <CircularProgressWithLabel value={progress} />;
}

CircularStatic.propTypes = {
    progress: PropTypes.number
}

CircularStatic.defaultProps = {
    progress: 0
}