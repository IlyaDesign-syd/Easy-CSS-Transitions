//Components + assets:
import Stage from "../comps/Stage";
import Timeline from "../comps/Timeline";
//React and Redux Libraries:
import React, { useEffect, useRef } from "react";
import { Provider, useSelector } from "react-redux";
import store from '../redux/store';

const Home = () => {
  // Number display for hovered frame
  const frameText = useRef(null);
  const hoveredFrame = useSelector((state) => state.frame.hovered);

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
        <h1 data-testid="main-title" className="mainTitle">
          CSS Transitions with Ease
        </h1>

        {/*TIME-LINE container with 100 frame components-------*/}
        <Timeline></Timeline>

        {/*FRAME HOVER NUMBER DISPLAY large grey text diplaying hovered frame-------*/}
        <div
          data-testid="frame-hover"
          ref={frameText}
          className="hugeLightText"
        >
          {hoveredFrame}
        </div>

        {/*ANIMATION STAGE this is where the magic happens
    Assumption: Target animation object will have position of 'absolute'*/}
        <Stage></Stage>
      </div>
  );
};

export default Home;
