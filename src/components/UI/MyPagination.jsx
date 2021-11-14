import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as PropTypes from 'prop-types'

export default function MyPagination({ page, count, changePage }) {

    return (
        <Stack spacing={2}>
            <Pagination count={count} page={page} onChange={changePage} />
        </Stack>
    )
}

MyPagination.propTypes = {
    page: PropTypes.number,
    count: PropTypes.number,
    changePage: PropTypes.func,
}

MyPagination.defaultProps = {
    page: 1,
    count: 1,
}
