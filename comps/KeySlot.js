import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFrame } from '../redux/frameSlice';

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
              { ' frame selected'}
        </div>
      </div>
    )
  }

  export default KeySlot