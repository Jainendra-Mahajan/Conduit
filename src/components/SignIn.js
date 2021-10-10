import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';

const SignIn = () => {

    let history = useHistory();

    const [credentials, setCredentials] = useState({email : "" , password : ""});

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ email : credentials.email, password : credentials.password })
        });

        const json = await response.json();
        

        if(json.success){
            //save the token to localstorage
            localStorage.setItem('token' , json.authToken);
            history.push('/home')
        }
        else {
            alert("Invalid credentials");
        }
    }
        const onChange = (e)=>{
            setCredentials({...credentials , [e.target.name] : e.target.value})
        }

    return (
        <div className="col-md-6 offset-md-3 col-xs-12 my-5">
            <form onSubmit={handleSubmit}>
                <h1 style={{ color: "black", fontSize: "2.5rem", fontWeight: "400", textAlign: "center" }}>Sign In</h1>
                <p style={{ textAlign: "center" }}><Link style={{ color: "#5CB85C" }} to="/signup">Need an Account?</Link></p>
                <div className="mb-3">
                    <input type="email" onChange={onChange} value = {credentials.email} className="form-control" aria-describedby="emailHelp" placeholder="Email" name="email" ></input>

                </div>
                <div className="mb-3 my-3">
                    <input type="password" onChange={onChange} value={credentials.password} className="form-control" placeholder="Password" name="password" ></input>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" className="btn button-color">Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
