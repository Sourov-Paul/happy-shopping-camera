import {useState,useEffect} from 'react'
import initilaizeFirebase from './../components/Firebase/firebase.init';
import { getAuth,sendEmailVerification ,sendPasswordResetEmail,FacebookAuthProvider,updateProfile,getIdToken ,signInWithPopup, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut,onAuthStateChanged  } from "firebase/auth";




// initilaize Firebase  App
 initilaizeFirebase();
 const auth = getAuth();
//  Reset Pasword

//  facebook provider 
const facebookProvider= new FacebookAuthProvider();
const useFirebase=()=>{
    // Handle user
    const [user,setUser]=useState({})
    // handle loging
    const [loding,setLoding]=useState(true);
    // admin handle
    const [admin,setAdmin]=useState(false)
    // error heandl 
    const [error,setError]=useState('')
    
    // verify user with token
  const [token,setToken]=useState('');




    // Handle Registation 
    const registerUser=(email,password,name,location,history)=>{
        setLoding(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
            // error
            setError('')
            varifyEmail()
          const newUser={email,displayName:name}
          setUser(newUser)
          // save user database
          saveRegUser(email,name,'POST')
          // send name in firebase
          updateProfile(auth.currentUser,{
            displayName:name
          })
          const redirect = location?.state?.from || "/";
          history.replace(redirect);
        })
        
        .catch((error)=>{
          setError(error.message);
        })
       
        .finally(()=>setLoding(false))
    }
// Verify Email
const varifyEmail=()=>{
  sendEmailVerification(auth.currentUser)
  .then(result => {
    // console.log(result)
  });

}

    // Handle login
    const loginUser=(email,password,location,history)=>{
        setLoding(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const redirect = location?.state?.from || "/";
    history.replace(redirect);
// error
    setError('')

  })
  .catch((error) => {
    setError(error.message);
  })
  .finally(()=>setLoding(false))

    }

// handle facebook
    const handleFacebookSignIn=(location,history)=>{
        signInWithPopup(auth,facebookProvider)
        .then(result=>{
           
           const{displayName,photoURL,email}=result.user;
           const loggedInUser={
               name:displayName,
               email:email,
               photo:photoURL
           }
           setUser(loggedInUser);
           saveRegUser(user.email,user.displayName,'PUT')
           setError('');
           varifyEmail()
           const redirect = location?.state?.from || "/";
           history.replace(redirect)
        })
       
        .catch((error) => {
            // An error happened.
            setError(error.message);

          })
          .finally(()=>setLoding(false))

    }

      // Password Reset
      const resetPassword=()=>{
        sendPasswordResetEmail(auth,user.email)
        .then(() => {
    
        })
        .catch((error) => {
        setError(error.message);
    
        });

      }
    // Handle Logout 
    const logOut=()=>{
       setLoding(true)

        signOut(auth).then(() => {
            // Sign-out successful.
            setError('')
          }).catch((error) => {
            // An error happened.
            setError(error.message);

          })
          .finally(()=>setLoding(false))

    }

    // handle admin
    useEffect(()=>{
      fetch(`https://floating-peak-83103.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))
    },[user.email])

// Handle user state change
    useEffect(()=>{
      setLoding(true);
    const unsubscribe =   onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken);
              })
            } else {
            setUser('')
            }
            setLoding(false);
          });
          return () => unsubscribe;
    },[])

    // save register user in database 
    const saveRegUser=(email,displayName,method)=>{
      const user={email,displayName};
      fetch('https://floating-peak-83103.herokuapp.com/users',{
        method:method,
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }

    return{
        user,
        loding,
        varifyEmail,
        handleFacebookSignIn,
        error,
        token,
        admin,
        registerUser,
        loginUser,
        saveRegUser,
        resetPassword,
        logOut,

    }

}

export default useFirebase;