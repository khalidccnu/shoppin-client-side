import React, { createContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../utils/firebase.config.js";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const createAccessToken = (userId) => {
    return fetch("https://shoppin.webie.link/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userId),
    }).then((response) => response.text());
  };

  const createUser = (userId) => {
    return fetch(`https://shoppin.webie.link/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id: userId, isAdmin: false }),
    });
  };

  const getUserInfo = (userId, token) => {
    return fetch(`https://shoppin.webie.link/users?id=${userId}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  };

  const signInWithEP = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signInWithGoogle = (_) => {
    return signInWithPopup(auth, googleProvider).then((userCred) =>
      createAccessToken({ id: userCred.user.uid }).then((token) =>
        getUserInfo(userCred.user.uid, token).then((result) =>
          result.error ? createUser(userCred.user.uid) : null
        )
      )
    );
  };

  const createUserWithEP = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password).then((userCred) =>
      createUser(userCred.user.uid)
    );

  const logOut = (_) => signOut(auth);

  const authInfo = {
    loading,
    userInfo,
    signInWithEP,
    signInWithGoogle,
    createUserWithEP,
    logOut,
  };

  useEffect(() => {
    const authChange = onAuthStateChanged(auth, (userCred) => {
      (async (_) => {
        if (userCred) {
          const userId = { id: userCred.uid };

          await createAccessToken(userId).then((token) =>
            getUserInfo(userCred.uid, token).then((result) =>
              setUserInfo({
                ...userCred,
                isAdmin: result.isAdmin,
              })
            )
          );
        } else {
          setUserInfo(null);
        }

        setLoading(false);
      })();
    });

    return () => authChange();
  }, []);

  return !loading ? (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  ) : null;
};

export default AuthProvider;
