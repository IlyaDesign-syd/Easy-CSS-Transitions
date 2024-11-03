import styles from '../../styles/Home.module.css'
import React, { useEffect, useRef, useState } from 'react';

const AnimElement = (props) => {

    return (
        <div className={styles.animElement} style={{"background-color": props.color, "width": "200px"}}>
            
        </div>
    )
}

export default AnimElement;