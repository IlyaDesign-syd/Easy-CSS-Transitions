//Components + assets:
import KeySlot from '../comps/KeySlot';
import Stage from '../comps/Stage';
import styles from '../styles/Home.module.css';
//React and Redux Libraries:
import React, {useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  //Timeline component containing hoverable keyframes  
  const frameText = useRef(null);
  // TO DO--->>> CREATE separate component for the hovered frame <<<<---
  const hoveredFrame = useSelector((state) => state.frame.hovered)

  //Resets the timer every time the user hovers over another frame, which displays the "frame hover" number
  useEffect(() => {
    frameText.current.style.visibility = 'visible';
    frameText.current.style.opacity = 1;

    //Add fade out animation after delay
    const hideFrameText = setTimeout(() => {
      frameText.current.style.transition = "opacity 1s ease-in";
      frameText.current.style.opacity = 0;
      
      //Set display to false after end of animation
      frameText.current.addEventListener('transitionend', () => {
        frameText.current.style.transition = "none"
        frameText.current.style.visibility = 'hidden';
      })
    }, 2000)

    return () => {
      clearTimeout(hideFrameText);
    }
  }, [hoveredFrame])

  return (
    <div className={styles.appContainer}>
    <h1 className={styles.mainTitle}>CSS Transitions with Ease</h1>
    {/*TIME-LINE container with 100 frame components-------*/}
    <div className={styles.timelineContainer}>
      {[...Array(100).keys()] .map(i => i+1) .map(key => {return <KeySlot key={key} frameNumber={key}/>})}
    </div>

    {/*FRAME HOVER NUMBER DISPLAY large grey text diplaying hovered frame-------*/}
    <div ref={frameText} className={styles.hugeLightText}>{(hoveredFrame)}</div>

    {/*ANIMATION STAGE this is where the magic happens-------
    Assumptions:
    - The CSS element that is going to be animated will have position of 'absolute'
    */}
    <Stage></Stage>
    </div>  
  )
}