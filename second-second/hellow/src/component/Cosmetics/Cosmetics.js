import React from 'react';
import { addtocart, removedb } from '../../utility/calcutation';

const Cosmetics = (props) => {
    const {id,name,price} = props.consmetics;
    const add = (id) =>{
       addtocart(id)
    }
    const Remove = id =>{
        removedb(id);
    }
    return (
        <div className='text-center bg-warning py-5 px-5 mt-1'>
            <h1>name of product is : {name} </h1>
            <h1>product price is : {price}</h1>
            <h5> product of id is : {id} </h5>
            <button onClick={() =>{add(id)}}>Add to cart</button>
            <button onClick={() => Remove(id)}>Remove </button>
        </div>
    );
};

export default Cosmetics;