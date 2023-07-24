import Image from "next/image";

import latimg from "@/app/assets/icons/lat.png";
import feelimg from "@/app/assets/icons/fel.png";
import humidityimg from "@/app/assets/icons/humdity.png";
import levelimg from "@/app/assets/icons/level.png";
import visiimg from "@/app/assets/icons/visibilty.png";
import windimg from "@/app/assets/icons/wind.png";
import cloudyimg from "@/app/assets/icons/cloudy.png";

export default function Sidebar_Web(data) {
  const icon = data.data.weather[0].icon;
  const iconimage = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <>
      <section className="relative w-full h-screen overflow-y-scroll py-7 px-5">
        <div
          style={{ backgroundColor: "rgb(255, 255, 255,0.2)" }}
          className="py-3 px-7 rounded-2xl mb-4"
        >
          <div className="flex">
            <img
              src={iconimage}
              alt="Picture of the author"
              width={70}
              height={70}
            />
            <div className="text-white ps-5">
              <h4>Details</h4>
              <h6>Id :- {data.data.weather[0].id}</h6>
              <h6>Main :- {data.data.weather[0].main}</h6>
              <h6>description :- {data.data.weather[0].description}</h6>
              <h6>Id :- {data.data.weather[0].id}</h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}
        <div
          style={{ backgroundColor: "rgb(255, 255, 255,0.2)" }}
          className="py-3 px-7 rounded-2xl mb-4"
        >
          <div className="flex">
            <Image src={latimg} alt="Picture of the author" width={70} />
            <div className="text-white ps-5">
              <h4>Cordination</h4>
              <h6>Lon :- {data.data.coord.lon}</h6>
              <h6>Lat :- {data.data.coord.lat}</h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}
        <div
          style={{ backgroundColor: "rgb(255, 255, 255,0.2)" }}
          className="py-3 px-7 rounded-2xl mb-4"
        >
          <div className="flex items-center">
            <Image src={feelimg} alt="Picture of the author" width={70} />
            <div className="text-white ps-5">
              <h6>Min-Temp :- {data.data.coord.lon}</h6>
              <h6>Max-Temp :- {data.data.coord.lat}</h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}

        <div
          style={{ backgroundColor: "rgb(255, 255, 255,0.2)" }}
          className="py-3 px-7 rounded-2xl mb-4"
        >
          <div className="flex items-center">
            <Image src={humidityimg} alt="Picture of the author" width={70} />
            <div className="text-white ps-5">
              <h6>humidity :- {data.data.main.humidity}</h6>
              <h6>pressure :- {data.data.main.pressure}</h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}

        <div
          style={{ backgroundColor: "rgb(255, 255, 255,0.2)" }}
          className="py-3 px-7 rounded-2xl mb-4"
        >
          <div className="flex items-center">
            <Image src={levelimg} alt="Picture of the author" width={70} />
            <div className="text-white ps-5">
              <h6>Sea_Level :- {data.data.main.sea_level}</h6>
              <h6>Ground_level :- {data.data.main.grnd_level}</h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}
        <div
          style={{ backgroundColor: "rgb(255, 255, 255,0.2)" }}
          className="py-3 px-7 rounded-2xl mb-4"
        >
          <div className="flex items-center">
            <Image src={visiimg} alt="Picture of the author" width={70} />
            <div className="text-white ps-5">
              <h6>visibility :- {data.data.visibility}</h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}
        <div
          style={{ backgroundColor: "rgb(255, 255, 255,0.2)" }}
          className="py-3 px-7 rounded-2xl mb-4"
        >
          <div className="flex items-center">
            <Image src={windimg} alt="Picture of the author" width={70} />
            <div className="text-white ps-5">
              <h4>Wind</h4>
              <h6>speed :- {data.data.wind.speed}</h6>
              <h6>degree :- {data.data.wind.deg}</h6>
              <h6>gust :- {data.data.wind.gust}</h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}
        <div
          style={{ backgroundColor: "rgb(255, 255, 255,0.2)" }}
          className="py-3 px-7 rounded-2xl mb-4"
        >
          <div className="flex items-center">
            <Image src={cloudyimg} alt="Picture of the author" width={70} />
            <div className="text-white ps-5">
              <h6>Cloud :- {data.data.clouds.all}</h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}
      </section>
    </>
  );
}
