import React from 'react'
import Button from '@mui/material/Button';

export default function MyButton({ children, ...props }) {
    return (
        <Button {...props} variant="contained">{children}</Button>
    )
}
