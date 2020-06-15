import React, { useState, useEffect } from 'react';
import { users } from '../dummydata';
import UserCard from './usercard';

function UserList () {

useEffect(() => {
    setUsers(users);
    console.log(users);
}, [])

const [stateUsers, setUsers] = useState([]);


    return (
    <div >
        {stateUsers && stateUsers.map( user => {
            return <UserCard user={user} something={"sadas"}  />
        })}
    </div>
    );
};


export default UserList;