import React from 'react'
import { useSelector } from 'react-redux';

export default function UserInformation() {
    const { user } = useSelector((state) => state.user)

    return (
        <div>
            <p>{user.id}</p>
            <p>{user.username}</p>
            <p>{user.iso_3166_1}</p>

        </div>
    )
}
