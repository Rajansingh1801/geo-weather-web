"use client";

import { useEffect, useState } from "react";

export default function Footer_Web(props) {
  const [currentDate, setCurrentDate] = useState("");

  const [currentTimeHour, setCurrentTimeHour] = useState("");
  const [currentTimeMin, setCurrentTimeMIn] = useState("");
  const [currentTimeSec, setCurrentTimeSec] = useState("");

  // console.log(props.weatherdata?.dt);
  let livedate = props.weatherdata?.dt;
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    var date = new Date(livedate * 1000).getDate(); //Current Date
    var month = monthNames[new Date(livedate * 1000).getMonth() + 1]; //Current Month
    var year = new Date().getFullYear(livedate * 1000); //Current Year
    setCurrentDate(date + ", " + month + " " + year);

    const timer = setInterval(() => {
      setCurrentTimeHour(
        new Date(livedate * 1000).getHours().toLocaleString() % 12
      );
      setCurrentTimeMIn(
        new Date(livedate * 1000).getMinutes().toLocaleString()
      );

      setCurrentTimeSec(
        new Date(livedate * 1000).getSeconds().toLocaleString()
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return (
    <>
      <section
        className="relative h-full w-full p-4 flex justify-around"
        style={{ backgroundColor: "rgb(255, 255, 255,0.2)" }}
      >
        <div className="text-white">
          <h5>Made in Next js</h5>
          <h5>Made with 💝 India</h5>
        </div>
        <div className="text-white">
          <h4>{currentDate}</h4>
          <h4>
            {currentTimeHour}:{currentTimeMin}:{currentTimeSec}
          </h4>
        </div>
      </section>
    </>
  );
}
