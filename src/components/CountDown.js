import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { HiHeart } from "react-icons/hi";
import Container from "./Container";
import Page from "./Page";
import "./CountDown.css";
function CountDown() {
  const [weeks, setWeeks] = useState();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  useEffect(() => {
    const timer = setInterval(() => {
      let deadline = new Date("december 2, 2020 10:00:00").getTime();
      let currentTime = new Date().getTime();
      let t = deadline - currentTime;
      setWeeks(Math.floor(t / (1000 * 60 * 60 * 24 * 7)));
      setDays(
        Math.floor((t % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24))
      );
      setHours(Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((t % (1000 * 60)) / 1000));
      if (t < 0) {
        setWeeks(0);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
  }, []);

  return (
    <div className="jumbotron parallax " id="parallax-CountDown">
      <div
        className="mt-5"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <h1>Counting</h1>

          <h1>Down</h1>
          <div className="text-center">
            <HiHeart color="#fff" />
            <HiHeart color="red" />
            <HiHeart color="#fff" />
            <HiHeart color="red" />
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-md-offset-3 col-md-6 ">
            <div
              id="date-countdown"
              class="circle-countdown animation fadeInUp is-countdown"
            >
              <span class="countdown-row countdown-show5">
                <span class="countdown-section">
                  <span class="countdown-amount">{weeks}</span>
                  <span class="countdown-period">Weeks</span>
                </span>
                <span class="countdown-section">
                  <span class="countdown-amount">{days}</span>
                  <span class="countdown-period">Days</span>
                </span>
                <span class="countdown-section">
                  <span class="countdown-amount">{hours}</span>
                  <span class="countdown-period">Hours</span>
                </span>
                <span class="countdown-section">
                  <span class="countdown-amount">{minutes}</span>
                  <span class="countdown-period">Minutes</span>
                </span>
                <span class="countdown-section">
                  <span class="countdown-amount">{seconds}</span>
                  <span class="countdown-period">Seconds</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
