import React from 'react';

 const AddFriend = ({ children, props }) => (

    <div className="text-center" style={{backgroundColor: "white"}} >
        <h1 className="h3 mb-3 font-weight-normal">Is This Your Friend?</h1>
            <label htmlFor="username" className="sr-only"> </label>
            
            { children }           
        </div>

);

export default AddFriend;

                



