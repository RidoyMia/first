import React, { useEffect, useState } from 'react';
import Single from '../single/Single';

const Home = () => {
    const [user,setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data));
    },[])
    return (
        <div>
            {
                user.map(u => <Single ami={u}></Single>)
            }
        </div>
    );
};

export default Home;