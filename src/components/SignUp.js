import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const SignUp = () => {
    const history = useHistory();
    const [user, setUser] = useState({ username: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ username: user.username, email: user.email, password: user.password })
        });

        const json = await response.json();
        console.log(json);

        if(json.success){
            localStorage.setItem('token' , json.authToken)
            history.push('/');
        }
        else {
            alert("Check Credentials")
        }
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div className="col-md-6 offset-md-3 col-xs-12 my-5">
            <form onSubmit={handleSubmit}>
                <h1 style={{ color: "black", fontSize: "2.5rem", fontWeight: "400", textAlign: "center" }}>Sign Up</h1>
                <p style={{ textAlign: "center" }}><Link style={{ color: "#5CB85C" }} to="/signin">Have an Account?</Link></p>
                <div className="mb-3">

                    <input type="text" name="username" value={user.username} onChange={onChange} className="form-control" aria-describedby="emailHelp" placeholder="Username" minLength="5" required></input>

                </div>
                <div className="mb-3">

                    <input type="email" name="email" value={user.email} onChange={onChange} className="form-control" aria-describedby="emailHelp" placeholder="Email" required></input>

                </div>
                <div className="mb-3 my-3">
                    <input type="password" name="password" value={user.password} onChange={onChange} className="form-control" placeholder="Password" minLength="5" required></input>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" className="btn button-color">Sign Up</button>
                </div>
            </form>
        </div>)
}

export default SignUp
