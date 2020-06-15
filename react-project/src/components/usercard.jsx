import React from 'react';



function UserCard (props) {

    
    return (
    <div style={{border: "1px solid black"}}>
        <p>{props.user.name}</p>
        <p>{props.user.age}</p>
        <p>{props.user.email}</p>
    </div>);
};


export default UserCard;