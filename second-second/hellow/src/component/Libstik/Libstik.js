import React, { useEffect, useState } from 'react';
import Cosmetics from '../Cosmetics/Cosmetics';

const Libstik = () => {
    const [consmetics,setCosmetics] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data));
    } ,[])
    return (
        <div>
            <h1 className=' py-3  my-3 text-center bg-primary text-light'>Our new site for ecommerce in react</h1>
            {
                consmetics.map(c=><Cosmetics consmetics={c} key={c.id}></Cosmetics>)
            }
        </div>
    );
};

export default Libstik;