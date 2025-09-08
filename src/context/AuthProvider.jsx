import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from "firebase/auth";
import { auth } from '../firebase/firebase.init';



const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const signInGoogle=()=>{
        return signInWithPopup(auth,provider);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (user) => {
        return updateProfile(auth.currentUser, user);
    }

    const singOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('user in the state change', currentUser);

        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        signInGoogle,
        createUser,
        signinUser,
        singOutUser,
        updateUser,
        loading,
        setLoading
    }




    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;