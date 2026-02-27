import { useEffect, useState } from "react";
import Style from "./TrafficLight.module.css";

const TrafficLight = () => {
  const [currLight, setCurrLight] = useState("red");

  useEffect(() => {
    let timer;

    if (currLight === "red") {
      timer = setTimeout(() => {
        setCurrLight("yellow");
      }, 3000);
    }

    if (currLight == "yellow") {
      timer = setTimeout(() => {
        setCurrLight("green");
      }, 1000);
    }

    if (currLight === "green") {
      timer = setTimeout(() => {
        setCurrLight("red");
      }, 2000);
    }

    return () => clearInterval(timer);
  }, [currLight]);

  return (
    <div>
      <h2 data-testid="title">Traffic Lights</h2>
      <div
        className={Style.trafficLight}
        id="traffic-light"
        data-testid="traffic-light"
      >
        <div
          id="red-light"
          data-testid="red-light"
          className={`${Style.circle} ${currLight === "red" ? Style.redOn : ""}`}
        ></div>

        <div
          id="yellow-light"
          data-testid="yellow-light"
          className={`${Style.circle} ${currLight === "yellow" ? Style.yellowOn : ""}`}
        ></div>

        <div
          id="green-light"
          data-testid="green-light"
          className={`${Style.circle} ${currLight === "green" ? Style.greenOn : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
