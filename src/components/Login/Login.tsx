import { exportDefaultDeclaration } from '@babel/types';
import React, { SetStateAction, useState } from 'react';
import { Container } from 'react-dom';
import './Login.css';
import PropTypes from 'prop-types';
import { number, string } from 'yargs';

async function loginUser(credentials: object){
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    
    }).then(data => data.json());
}

export default function Login ({setToken}: any) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const token = await loginUser({
            username, 
            password
        });
        console.log(setToken);
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <h1> Please Log in</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p> Username </p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p> Passowrd </p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>        
    );

}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
