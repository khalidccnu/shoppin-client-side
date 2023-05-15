import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebase.config.js";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const createUserWithEP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCred) => {
        const userId = userCred.user.uid;

        return fetch(`https://shoppin.webie.link/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ _id: userId, isAdmin: false }),
        });
      }
    );
  };

  const logOut = (_) => signOut(auth);

  const authInfo = {
    loading,
    userInfo,
    createUserWithEP,
    logOut,
  };

  useEffect(() => {
    const authChange = onAuthStateChanged(auth, (userCred) => {
      (async (_) => {
        if (userCred) {
          const userId = { id: userCred.uid };

          await fetch("https://shoppin.webie.link/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userId),
          })
            .then((response) => response.text())
            .then((result) => {
              fetch(`https://shoppin.webie.link/users?id=${userCred.uid}`, {
                method: "GET",
                headers: {
                  authorization: `Bearer ${result}`,
                },
              })
                .then((response) => response.json())
                .then((result) =>
                  setUserInfo({
                    ...userCred,
                    isAdmin: result.isAdmin,
                  })
                );
            });
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
