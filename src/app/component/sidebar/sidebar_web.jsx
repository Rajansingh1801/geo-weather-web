import Image from "next/image";

import latimg from "@/app/assets/icons/lat.png";
import feelimg from "@/app/assets/icons/fel.png";
import humidityimg from "@/app/assets/icons/humdity.png";
import levelimg from "@/app/assets/icons/level.png";
import visiimg from "@/app/assets/icons/visibilty.png";
import windimg from "@/app/assets/icons/wind.png";
import cloudyimg from "@/app/assets/icons/cloudy.png";

export default function Sidebar_Web(props) {
  // console.log(props.weatherdata);
  const icon = props.weatherdata?.weather[0].icon;
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
              <h6>Id :- {props.weatherdata?.weather[0].id}</h6>
              <h6>Main :- {props.weatherdata?.weather[0].main}</h6>
              <h6>
                description :- {props.weatherdata?.weather[0].description}
              </h6>
              <h6>Id :- {props.weatherdata?.weather[0].id}</h6>
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
              <h6>Lon :- {props.weatherdata?.coord.lon}</h6>
              <h6>Lat :- {props.weatherdata?.coord.lat}</h6>
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
              <h6>Min-Temp :- {props.weatherdata?.coord.lon}</h6>
              <h6>Max-Temp :- {props.weatherdata?.coord.lat}</h6>
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
              <h6>humidity :- {props.weatherdata?.main.humidity}</h6>
              <h6>pressure :- {props.weatherdata?.main.pressure}</h6>
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
              <h6>Sea_Level :- {props.weatherdata?.main.sea_level}</h6>
              <h6>Ground_level :- {props.weatherdata?.main.grnd_level}</h6>
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
              <h6>visibility :- {props.weatherdata?.visibility}</h6>
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
              <h6>speed :- {props.weatherdata?.wind.speed}</h6>
              <h6>degree :- {props.weatherdata?.wind.deg}</h6>
              <h6>gust :- {props.weatherdata?.wind.gust}</h6>
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
              <h6>Cloud :- {props.weatherdata?.clouds.all}</h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}
      </section>
    </>
  );
}
