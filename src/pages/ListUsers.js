import { useEffect, useState } from "react"


import { Box, Typography } from "@mui/material"
import TableUsers from "../component/TableUsers"

const ListUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(json => setUsers(json))
    }, [])

    return (
        <Box sx={{ mt: 1, maxWidth: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <TableUsers allUsers={users} />
            </Box>

        </Box>
    )
}

export default ListUsers