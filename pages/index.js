import KeySlot from '../comps/KeySlot';
import styles from '../styles/Home.module.css';
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  //Timeline aplication parent, containing state of the keyframes and animation.
  const frames = [ ...Array(100).keys() ].map( i => i+1);
  const hoveredFrame = useSelector((state) => state.frame.hovered)

  return (
    <div>
    <h1>CSS Transitions with Ease</h1>
    {/*TIME-LINE container containing 100 frame components-------*/}
    <div className={styles.timelineContainer}>
      {frames.map(key => {return <KeySlot key={key} frameNumber={key}/>})}
    </div>
    <div className={styles.hugeLightText}>{hoveredFrame}</div>
    </div>  
  )
}