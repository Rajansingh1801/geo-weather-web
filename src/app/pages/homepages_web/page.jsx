"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
// components
import Header_Web from "@/app/component/header/header_web";
import Details_web from "@/app/component/details/details_web";
import Footer_web from "@/app/component/footer/footer_web";
import Sidebar_web from "@/app/component/sidebar/sidebar_web";
import p1 from "@/app/assets/images-bg/p1.jpg";
import day from "@/app/assets/images-bg/day.png";
import cold2 from "@/app/assets/images-bg/cold2.jpg";
import rain from "@/app/assets/images-bg/rain.png";
import "../homepages_web/style.css";
export default function Weather_Web() {
  const [weatherdata, setWeatherData] = useState();
  const [bg, setbg] = useState(p1);
  const [searchLocation, setSearchLocation] = useState("hata");

  // for background images
  useEffect(() => {
    if (weatherdata?.main.temp > 40) {
      setbg(rain);
    } else if (weatherdata?.main.temp > 30) {
      setbg(day);
    } else if (weatherdata?.main.temp > 20) {
      setbg(p1);
    } else if (weatherdata?.main.temp > 10) {
      setbg(cold2);
    }
  }, [weatherdata]);

  // for search

  // const handlepress = (event) => {
  // };
  const searchbtn = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=d41cbaaad2f01b75473e4e3263fbfc2f&units=metric`;
      // console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setWeatherData(data);
      setSearchLocation("");
    } catch (err) {
      setSearchLocation("hata");
      console.log(err);
    }
  };

  useEffect(() => {
    searchbtn();
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/src/app/globals.css" />
      </Head>
      <section className="home-bg ">
        <Image
          alt="Mountains"
          src={bg}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="flex h-screen">
          <div className="basis-3/4 flex flex-col">
            <div className="basis-2/12 bg-green-300">
              <Header_Web
                weatherdata={weatherdata}
                searchLocation={searchLocation}
                setSearchLocation={setSearchLocation}
                searchbtn={searchbtn}
              />
            </div>
            <div className="basis-9/12 bg-indigo-300">
              <Details_web weatherdata={weatherdata} />
            </div>
            <div className="basis-1/12 bg-gray-300">
              <Footer_web weatherdata={weatherdata} />
            </div>
          </div>
          <div className="basis-1/4 bg-orange-200">
            <Sidebar_web weatherdata={weatherdata} />
          </div>
        </div>
      </section>
    </>
  );
}
