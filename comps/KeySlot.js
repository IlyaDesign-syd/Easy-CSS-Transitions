import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//Issue: duplicate name for setFrame. Possible cause for previous error with "plain objects"with action.payload
//import { setFrame, increment } from '../redux/frameSlice';
import { setFrame } from '../redux/frame.action';

const KeySlot = (props) => {
  const [frameShows, setFrameShows] = useState(false)
  const dispatch = useDispatch();

  const handleHover = () => {
    dispatch(setFrame(props.frameNumber))
    setFrameShows(true)
  }

    return(
      <div className={styles.keyFrame}
        onMouseEnter={() => handleHover()} 
        onMouseLeave={() => setFrameShows(false)}
        >

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