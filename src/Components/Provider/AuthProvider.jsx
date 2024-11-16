import React, { createContext, useEffect, useState } from 'react';
import app from '../fireBase/FireBase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)
    // create a user
    const createLogin = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createUser = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singout = () =>{
        setLoader(true)
        return signOut(auth)
    }
    const updatedata = (updatadata)=>{
        return updateProfile(auth.currentUser,updatadata)
    }
    // objerb korar lagi
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser) =>{
            setUser(currentUser)
            setLoader(false)
        })
        return ()=> unSubscribe();
    },[])
console.log(user)
    const authInfo = {
        createLogin,
        createUser,
        setUser,
        user,
        singout,
        loader,
        updatedata
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
