"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import sunriseimg from "@/app/assets/icons/sunrise.png";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Header(props) {
  console.log(props.data);
  const [sunriseHour, setSunriseHour] = useState("");
  const [sunriseMin, setSunriseMin] = useState("");
  const [sunriseSecond, setSunriseSecond] = useState("");

  const [sunsetHour, setSunsetHour] = useState("");
  const [sunsetMin, setSunsetMin] = useState("");
  const [sunsetSecond, setSunsetSecond] = useState("");

  useEffect(() => {
    let sunriseData = props.data.sys.sunrise;
    setSunriseHour(new Date(sunriseData * 1000).getHours());
    setSunriseMin(new Date(sunriseData * 1000).getMinutes());
    setSunriseSecond(new Date(sunriseData * 1000).getSeconds());

    let sunsetData = props.data?.sys.sunset;
    setSunsetHour(new Date(sunsetData * 1000).getHours() % 12);
    setSunsetMin(new Date(sunsetData * 1000).getMinutes());
    setSunsetSecond(new Date(sunsetData * 1000).getSeconds());
  }, [props.data]);

  // console.log(data);
  return (
    <>
      <div className="flex h-full pt-4 px-7">
        <div className="relative flex w-full p-5 me-6 rounded-3xl">
          <div
            style={{ backgroundColor: "rgb(255, 255, 255,0.2)" }}
            className="w-full flex items-center px-5 rounded-3xl text-white"
          >
            <input
              type="text"
              name=""
              id=""
              // onChange={(event) => setMessage(event.target.value)}
              // onKeyDown={handleKeyDown}
              // value={message}
              className="w-full p-3 bg-transparent border-0 focus:border-0 outline-none"
            />
            <div>
              <MagnifyingGlass size={32} weight="fill" />
            </div>
          </div>
        </div>
        <div
          className="relative flex align-middle  w-full p-5 me-6 rounded-3xl"
          style={{ backgroundColor: "rgb(255, 255, 255,0.2)" }}
        >
          <Image src={sunriseimg} alt="Picture of the author" width={60} />

          <div className="text-teal-50 font-extrabold text-center m-auto  ">
            <h2 className="text-2xl">
              Sunrise time :-
              <span className="text-xl">
                {sunriseHour}:{sunriseMin}:{sunriseSecond} Am
              </span>
            </h2>
            <h2 className="text-2xl">
              Sunset time :-
              <span className="text-xl">
                {sunsetHour}:{sunsetMin}:{sunsetSecond} Pm
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
