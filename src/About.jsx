import React from 'react';
import { useNavigate } from 'react-router-dom';

function About(props) {
    let navigate = useNavigate()
    return (
        <div>
            <h1>About component</h1>
            <button onClick={()=> { navigate('/') }}>Home</button>            
        </div>
    );
}

export default About;