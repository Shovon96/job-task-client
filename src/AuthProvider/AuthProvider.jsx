import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebaseConfig/firebase.config";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosSecure = useAxiosSecure();

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        setUser(currentUser);
        setLoading(false);
        const loggedUser = { email: userEmail };
        const url = "/jwt";
        if (currentUser) {
          axiosSecure
            .post(url, loggedUser, {
              withCredentials: true,
            })
            .then((res) => console.log(res.data));
        } else {
          axiosSecure
            .post("/logout", loggedUser, {
              withCredentials: true,
            })
            .then((res) => console.log("cookie cleared", res.data));
        }
      });
      return () => {
        unsubscribe();
      };
    }, [user?.email]);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, currentUser => {
  //     setLoading(false);
  //     setUser(currentUser);
  //   });
  //   return () => {
  //     return unsubscribe();
  //   }
  // }, [])

  const authInfo = {
    user,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    // updateUserProfile,
    loading
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;