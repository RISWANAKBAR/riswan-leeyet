import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './profile.css'

export default function () {
    const [files, setfiles] = useState()
    const token = localStorage.getItem("token")
    const [otp, setotp] = useState()
    console.log(token)


    const sendotp = (e) => {
        console.log(e.target.name)
        console.log(e.target.name)
        const { name, value } = e.target
        setotp({
            [name]: value
        })

    }
    console.log(otp)
    const readotp = () => {
        axios.post('https://api.oopacks.com/api/auth/sendotp',otp)
            .then(respon=>console.log(respon))


    }



    





    const submit = (ev) => {
        ev.preventDefault()
        if (files) {
            const filedata = new FormData();
            console.log("token",token);

            filedata.append("files", files)
            fetch("https://api.oopacks.com/api/test/upload/", {
                method: 'PUT',
                body:filedata,
                headers: {
                    // 'Content-Type':"application/json",
                    'Authorization': "Bearer" + token

                }


            })
                .then(response => response.json())
                .then(res => console.log(res))

        }
    }
    return (
        <div>

            <div class="login-card">

                <h2>profile</h2>
                <h3>Enter your details</h3>
                <form className="login-form" onSubmit={submit}>
                    <input type={'text'} placeholder='adress'></input>
                    <input type={"file"} onChange={(e) => { setfiles(e.target.files[0]) }} />
                    <input type={"text"} name='phonenumber' placeholder='enter your phonenumber for otp' onChange={sendotp}></input>
                    <button onClick={readotp}>send otp</button>

                    <button type="submit">LOGIN</button>


                </form>
            </div>
        </div>
    )
}
