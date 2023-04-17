import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFrame, increment } from '../redux/frameSlice';

const KeySlot = (props) => {
  const [frameShows, setFrame] = useState(false)
  const dispatch = useDispatch();

  const myFrame = props.frameNumber

  const handleHover = () => {
    console.log(`hovered over: ${props.frameNumber}`)
    dispatch(setFrame(3))
    setFrame(true)
  }
    return(
      <div className={styles.keyFrame}
        onMouseEnter={() => handleHover()} 
        onMouseLeave={() => setFrame(false)}>

        {props.frameNumber == 1 ? (
          <div className={styles.keyDot}></div>
        ) : (
          ""
        )}
        
        <div className={styles.popKey} 
            style={{display: frameShows ? 'block' : 'none'}}>
              {props.frameNumber} has been selected
        </div>
      </div>
    )
  }

  export default KeySlot