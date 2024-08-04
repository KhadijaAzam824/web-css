import React from 'react'
import "./Signup.css";

// import{link}from"react-router-dom";
 

export default function Signup() {
    
    return (
        <div className="adduser">
            <h3>Sign up</h3>
            <form className="addUserForm">
                <div className="inputGroup">
                    <label htmlform="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        autoComplete="off"
                        placeholder="Enter your name"
                    />
                 </div>
                 <div className="inputGroup">
                    <label htmlform="Num">Num:</label>
                    <input
                        type="text"
                        id="Num"
                        autoComplete="off"
                        placeholder="Enter your Num"
                    />
                 </div>
                 <div className="inputGroup">
                    <label htmlform="Email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        autoComplete="off"
                        placeholder="Enter your email"
                    />
                    <button type="button" className="btn btn-Signup">Signup</button>

                 </div>
             </form>
             <div className="login">
                <p>Already have an account</p>
                {/* <link to="/login"type="submit" class="btn btn-primary">Login</link> */}
                <button to="/login"type="submit" class="btn btn-primary">Login</button>


             </div>
         </div>
     )
    };

