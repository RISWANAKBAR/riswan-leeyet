import React from 'react'
import './login.css'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';




export default function Login() {
    const [logindetails, setlogindetails] = useState()
    const succes=()=>toast("login success")


    const data = (e) => {
        console.log("name==>", e.target.name)
        console.log("value", e.target.value)
        const { name, value } = e.target

        setlogindetails({
            ...logindetails,
            [name]: value
        })
        console.log(logindetails)
    }

    const logindata = (event) => {
        event.preventDefault()

        axios.post("https://api.oopacks.com/api/test/login", logindetails)
            .then(resp => {console.log("resp", resp.data.tokens)
            if(resp.status==200){
                succes() 
                localStorage.setItem("token",JSON.stringify(resp.data.tokens))


            }
           

        
        
        }

            
            
            
            )

    }
    return (
        <div>
            <div class="login-card">
                <h2>Login</h2>
                <h3>Enter your credentials</h3>
                <form className="login-form">
                    <input type="text" placeholder="Username" onChange={data} name='emailorphonenumber' />
                    <input type="password" placeholder="Password" onChange={data} name='password' />
                    <a href="/forgotpassword">Forgot your password?</a>
                    <a href="/registration"> Not have a account||create account</a>
                    <a href="/profile"> update profile</a>

                    <button type="submit" onClick={logindata}>LOGIN</button>


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
