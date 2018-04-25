import React from 'react';

export const CardForm = ({ children, props }) => (
    <div className="card text-center" style={{width: "18rem"}}>
        <h1 className="h3 mb-3 font-weight-normal">Find Friends</h1>
        
        { children }
    </div>
);

