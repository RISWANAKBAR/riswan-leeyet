import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Navigate,useNavigate} from 'react-router-dom'


export default function Forgot() {
    const navigate=useNavigate()
    const [forgot, setforgot] = useState()

    const changepassword = (e) => {
        console.log(e.target.name)
        console.log(e.target.name)
        const { name, value } = e.target

        setforgot({
            ...forgot,
            [name]: value
        })
        console.log(forgot)
    }

    const newpassword = (event) => {
        event.preventDefault()
        axios.put("https://api.oopacks.com/api/test/forgotpassword",forgot)
            .then(password =>{ console.log("password", password)
        })


    }


    return (
        <div>
            <div class="login-card">
                <h2>Create new password</h2>

                <form class="login-form">
                    <input type="text" placeholder="Username" onChange={changepassword} name='emailorphonenumber' />
                    <input type="password" placeholder="Enter new password" onChange={changepassword} name='password' />

                    <button type="submit" onClick={newpassword}>Change Password</button>
                </form>
            </div>
        </div>
    )
}
