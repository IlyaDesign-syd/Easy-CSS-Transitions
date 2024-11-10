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
        <div className="keyFrame"
            onMouseEnter={() => handleHover()} 
            onMouseLeave={() => setFrameShows(false)}> 

            {props.frameNumber == 1 ? <div className="keyDot"></div> : ""}
        </div>
    )
}

export default KeySlot