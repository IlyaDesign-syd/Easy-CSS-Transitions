import React from 'react'
import styles from '../styles/Home.module.css';
import KeySlot from './KeySlot';
import { useSelector } from 'react-redux';

const Timeline = () => {
    return (
        <>
        <div className={styles.timelineContainer}>
            {[...Array(100).keys()].map(i => i + 1).map(key => { return <KeySlot key={key} frameNumber={key} /> })}
        </div>
        </>
    )
}

export default Timeline