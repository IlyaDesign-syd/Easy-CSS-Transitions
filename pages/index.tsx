'use client'

// Components + assets:
import Stage from "../comps/Stage";
import Timeline from "../comps/Timeline";
// React and Redux Libraries:
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Home = () => {
  const frameText = useRef(null);
  const hoveredFrame = useSelector<RootState, number>((state) => state.frame.hovered);

  // Resets the timer every time the user hovers over another frame, which displays the "frame hover" number
  useEffect(() => {
    frameText.current.style.visibility = "visible";
    frameText.current.style.opacity = 1;

    // Add fade out animation after delay
    // TODO use best react practises
    const hideFrameText = setTimeout(() => {
      frameText.current.style.transition = "opacity 1s ease-in";
      frameText.current.style.opacity = 0;

      // Set display to false after end of animation
      frameText.current.addEventListener("transitionend", () => {
        frameText.current.style.transition = "none";
        frameText.current.style.visibility = "hidden";
      });
    }, 2000);

    return () => {
      clearTimeout(hideFrameText);
    };
  }, [hoveredFrame]);

  return (
      <div className="appContainer">
        <h1 data-testid="main-title" className="mainTitle" >
          CSS Transitions with Ease
        </h1>

        <Timeline></Timeline>

        {/** FRAME HOVER NUMBER DISPLAY large grey text diplaying hovered frame */}
        <div
          data-testid="frame-hover"
          ref={frameText}
          className="hugeLightText"
        >
          {hoveredFrame}
        </div>

        {/* Target animation object will have position of 'absolute' */}
        <Stage></Stage>
      </div>
  );
};

export default Home;
