import React from 'react';

const AddFriend = ({ children, props }) => (

    <div className="card text-center" style={{width: "18rem"}}>
        <div className="card-body">
            <h4 className="card-title">Is this your friend?</h4>
                { children }  
        </div>
                       
    </div>
);

export default AddFriend;

