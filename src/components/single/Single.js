import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Single = (props) => {
    const{name,id} = props.ami;
    let navigate = useNavigate();
    const showbybutton = ()=>{
        const path = `friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>name is : {name}</h2>
            <Link to={`/home/`+id}>dynamic</Link>
            <button onClick={showbybutton}>user id :{id}</button>
        </div>
    );
};

export default Single;