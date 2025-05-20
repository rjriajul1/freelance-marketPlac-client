import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    console.log(user);

    // user create 
    const signUp = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };

    // user login
    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user profile update
    const profileUpdate = (profileData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profileData)
    }

    // user Sing OUT 
    const userSignOut = () => {
        setLoading(true)
        return signOut(auth)
         .then(result=> {
            console.log(result);
            setUser(null)
         })
         .catch(error=>{
            console.log(error.message);
         })
          
    }
    // observition user
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, (currentUser)=>{
          if(currentUser){
           setUser(currentUser)
        }
        setLoading(false)
        })
        return ()=>{
            unSubcribe()
        }
    },[])
    const userInfo = {
        signUp,
        login,
        profileUpdate,
        user,
        userSignOut,
        loading

        
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
        
    );
};

export default AuthProvider;