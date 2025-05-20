import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';

const Profile = () => {
    const navigate = useNavigate();
    const {user,userSignOut} = use(AuthContext)
    const handleSignOut = () => {
         userSignOut()
         navigate('/')
        
    }
    return (
        <div className='flex justify-between p-10 '>
            <div></div>
            {user && <div className='bg-amber-200 p-10  rounded-2xl'>
                <h1>name:<span className='font-bold'> {user?.displayName}</span></h1>
                <button onClick={handleSignOut} className='btn  bg-amber-400 my-4'>Log Out</button>
               
            </div>}
        </div>
    );
};

export default Profile;