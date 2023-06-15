import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const DashboardRoot = () => {
  const [greetings, setGreetings] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect((_) => {
    {
      const hours = new Date().getHours();

      if (hours < 12) setGreetings("Morning");
      else if (hours >= 12 && hours <= 18) setGreetings("Afternoon");
      else if (hours > 18 && hours <= 24) setGreetings("Evening");
    }
  }, []);

  useEffect(() => {
    const dateIV = setInterval((_) => setDate(new Date()), 1000);

    return () => clearInterval(dateIV);
  }, []);

  return (
    <div className="pt-4">
      <h2 className="font-bold text-lg text-center">Good {greetings}</h2>
      <div className="flex flex-col items-center mt-3">
        <span className="flex space-x-1">
          <FaClock />
          <span className="-mt-0.5">
            {date.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            })}
          </span>
        </span>
        <span className="flex space-x-1">
          <FaCalendarAlt />
          <span className="-mt-0.5">
            {date.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </span>
      </div>
    </div>
  );
};

export default DashboardRoot;
