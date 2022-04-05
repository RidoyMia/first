import React from 'react';
import { useParams } from 'react-router-dom';

const Dynamic = () => {
    const params = useParams();
    return (
        <div>
            <h4>Dynamikljjkljl;k {params.id}</h4>
        </div>
    );
};

export default Dynamic;