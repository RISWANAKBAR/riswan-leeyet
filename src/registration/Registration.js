import React from 'react'
import './registration.css'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom'



export default function Registration() {
    const navigate = useNavigate()
    const [details, setdetails] = useState()
    const [files, setfiles] = useState()
    const [imagesdata, setimagesdata] = useState()

    var patternmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneno = /^\d{10}$/;

    const collectdetails = (e) => {
        console.log("details", e.target.name)
        console.log("details", e.target.value)
        const { name, value } = e.target

        setdetails({
            ...details,
            [name]: value

        })
        console.log("data===>", details)
    }
    console.log("hh", imagesdata, files)
    const getdetails = (event) => {
        event.preventDefault()
        console.log(details);
        
        if (details.emailorphonenumber.match(patternmail) || details.emailorphonenumber.match(phoneno)) {
        axios.post("https://api.oopacks.com/api/test/register", details)
            .then(response => {
                console.log("response===>", response);
                toast("registration completed", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/")



            })
        }
        else{
            alert('wrong data')
        }





        // axios.post("https://api.oopacks.com/api/test/register", details)
        //     .then(response => {
        //         console.log("response===>", response);
        //     })




    }





    return (
        <div>
            <div className="login-card">
                <h2>Registration</h2>
                <h3>Enter your credentials</h3>
                <form className="login-form">
                    <input type="text" placeholder="Firstname" onChange={collectdetails} name="firstName" />
                    <input type="text" placeholder="lastname" onChange={collectdetails} name="lastName" />
                    <input type="email" placeholder="Email" onChange={collectdetails} name="emailorphonenumber" />
                    {/* <input type="number" placeholder="phonenumber" onChange={collectdetails} name="phonenumber" /> */}
                    <input type="password" placeholder="Password" onChange={collectdetails} name="password" />

                    <button type="submit" onClick={getdetails}>REGISTER</button>
                    <a href='/'>if you have a account|please login  </a>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    )
}
