import { useEffect, useState } from "react"
import { Button, Typography } from "@mui/material"

import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"



const Login = (props) => {

    const [users, setUsers] = useState([])

    const initAccout = { email: '', password: '' }
    const [inputAccount, setInputAccount] = useState(initAccout)

    const [loginFailed, setLoginFailed] = useState(false)

    const [inputEmail, setInputEmail] = useState()
    const [inputPassword, setInputPassword] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(json => setUsers(json))
    }, [])

    const handleInputChangeEmail = (e) => {
        e.preventDefault()
        setInputEmail(e.target.value)

    }

    const handleInputChangePassword = (e) => {
        e.preventDefault()
        setInputPassword(e.target.value)

    }

    const handleLogin = (e) => {
        e.preventDefault()
        // console.log(inputAccount)
        const found = users.find(user => {
            return user.email === inputEmail;
        });

        if (found) {
            console.log('found', found)
            if (found.password === inputPassword) {
                console.log('coorect')
                setLoginFailed(false)
                navigate(`/list-users`)
            }
            else {
                setLoginFailed(true)
            }
        }

    }

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
            <Box sx={{ mt: '20%' }}>
                <Box >Login</Box>
                <Box >
                    <form>
                        <Box sx={{ mt: 2 }}>
                            <input name="email" placeholder="email" onChange={handleInputChangeEmail} />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <input name="password" placeholder="password" onChange={handleInputChangePassword} />
                        </Box>
                    </form>
                    {loginFailed && <Typography> Email or Password is failed </Typography>}
                    <Button onClick={handleLogin}>
                        Login
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Login