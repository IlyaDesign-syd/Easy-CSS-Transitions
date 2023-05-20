import KeySlot from '../comps/KeySlot';
import styles from '../styles/Home.module.css';
import React, {useEffect, useState, useRef} from 'react';
import { useSelector } from 'react-redux';

const Stage = () => {

    const hoveredFrame = useSelector(state => state.frame.hovered)

    //As an experiment, set the animation based on the current hovered frame (testing purposes only)
    useEffect(() => {

    }, [hoveredFrame])
    return (
    <div>
    <canvas ref={canvasRef} width={400} height={400} className={styles.stageContainer} />
    </div>
    )
}

export default Stage;