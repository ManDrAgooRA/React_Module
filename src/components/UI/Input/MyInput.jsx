import React, { forwardRef } from 'react'
import { TextField } from '@mui/material'

const MyInput = forwardRef((props, ref) => {
    return (
        <TextField {...props} fullWidth inputRef={ref} sx={{ mb: 2 }} />
    )
})

export default MyInput