import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
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
    // user login with google

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // user profile update
    const profileUpdate = (profileData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profileData)
    }

    // resetPassword
    const resetPassword = (email) => {
        console.log(email);
        return sendPasswordResetEmail(auth,email)
    }

    // user email verification 
    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
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
        loading,
        googleLogin,
        resetPassword,
        emailVerify

        
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
        
    );
};

export default AuthProvider;