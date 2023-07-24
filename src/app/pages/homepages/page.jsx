"use client";
import Header from "@/app/component/header/header";
import Details from "@/app/component/details/details";
import Footer from "@/app/component/footer/footer";
import Sidebar from "@/app/component/sidebar/sidebar";

import Image from "next/image";

import p1 from "@/app/assets/images-bg/p1.jpg";
import p2 from "@/app/assets/images-bg/p2.jpg";
import cold2 from "@/app/assets/images-bg/cold2.jpg";

import axios from "axios";
import { useState, useEffect } from "react";
import data from "@/app/api/data.json";

export default function Weather() {
  const [weatherdata, setWeatherData] = useState();

  const [location, setLocation] = useState("hata");

  // for search
  const [message, setMessage] = useState("");

  const handleKeyDown = (event) => {
    console.log(event.key);

    if (event.key === "Enter") {
      event.preventDefault();
      console.log(message);
      console.log("User pressed Enter ✅");
    }
  };

  const searchlocation = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d41cbaaad2f01b75473e4e3263fbfc2f&units=metric`;
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
      setLocation("");
    } catch (err) {
      setLocation("hata");
      console.log(err);
    }
  };
  useEffect(() => {
    searchlocation();
  }, []);

  return (
    <>
      <section className="home-bg ">
        <Image
          alt="Mountains"
          src={p1}
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
              <Header data={data} />
            </div>
            <div className="basis-9/12 bg-indigo-300">
              <Details data={data} />
            </div>
            <div className="basis-1/12 bg-gray-300">
              <Footer data={data} />
            </div>
          </div>
          <div className="basis-1/4 bg-orange-200">
            <Sidebar data={data} />
          </div>
        </div>
      </section>
    </>
  );
}
