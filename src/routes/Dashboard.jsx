import React, { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider.jsx";

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext);

  useEffect((_) => {
    sessionStorage.setItem("valid-user", JSON.stringify(true));
  }, []);

  return (
    <section className="py-10">
      <div className="container">
        <div>
          <div>
            <h5 className="font-semibold">Hello,</h5>
            <h3 className="font-bold text-2xl">
              {userInfo.displayName || "Anonymous"}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
