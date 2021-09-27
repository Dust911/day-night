import React, { useState } from "react";
import "./Day.css";

const Day = () => {
    const [isDay, setNight] = useState("true");

    const changeStateDay = () => {
        setNight(!isDay);
    };
    return (
    <div onClick={changeStateDay} className={`day ${isDay ? "" : "night"}`}>
        <p className={`sun ${isDay ? "" : "moon"}`}></p>
    </div>
    );
};

export default Day;
