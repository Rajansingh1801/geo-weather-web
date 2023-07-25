import Image from "next/image";

import latimg from "@/app/assets/icons/lat.png";
import feelimg from "@/app/assets/icons/fel.png";
import humidityimg from "@/app/assets/icons/humdity.png";
import levelimg from "@/app/assets/icons/level.png";
import visiimg from "@/app/assets/icons/visibilty.png";
import windimg from "@/app/assets/icons/wind.png";
import cloudyimg from "@/app/assets/icons/cloudy.png";
import { get } from "lodash";

export default function Sidebar_Web(props) {
  // console.log(props.weatherdata);
  // {get(props, "weatherdata.name", "not found")},

  const icon = get(props, "weatherdata.weather[0].icon", "not found");
  // const icon = props.weatherdata?.weather[0]?.icon;
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
              <h6>
                Id :- {get(props, "weatherdata.weather[0].id", "not found")}
              </h6>
              <h6>
                Main :- {get(props, "weatherdata.weather[0].main", "not found")}
              </h6>
              <h6>
                description :-{" "}
                {get(props, "weatherdata.weather[0].description", "not found")}
              </h6>
              <h6>
                Id :- {get(props, "weatherdata.weather[0].id", "not found")}
              </h6>
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
              <h6>Lon :- {get(props, "weatherdata.coord.lon", "not Found")}</h6>
              <h6>Lat :- {get(props, "weatherdata.coord.lat", "not found")}</h6>
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
              <h6>
                Min-Temp :- {get(props, "weatherdata.coord.lon", "not found")}
              </h6>
              <h6>
                Max-Temp :- {get(props, "weatherdata.coord.lat", "not found")}
              </h6>
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
              <h6>
                humidity :-{" "}
                {get(props, "weatherdata.main.humidity", "not found")}
              </h6>
              <h6>
                pressure :-{" "}
                {get(props, "weatherdata.main.pressure", "not found")}
              </h6>
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
              <h6>
                Sea_Level :-{" "}
                {(props, "weatherdata.main.sea_level", "not found")}
              </h6>
              <h6>
                Ground_level :-{" "}
                {get(props, "weatherdata?.main.grnd_level", "not found")}
              </h6>
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
              <h6>
                speed :- {get(props, "weatherdata.wind.speed", "not found")}
              </h6>
              <h6>
                degree :- {get(props, "weatherdata.wind.deg", "not found")}
              </h6>
              <h6>
                gust :- {get(props, "weatherdata.wind.gust", "not found")}
              </h6>
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
              <h6>
                Cloud :- {get(props, "weatherdata?.clouds.all", "not found")}
              </h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}
      </section>
    </>
  );
}
