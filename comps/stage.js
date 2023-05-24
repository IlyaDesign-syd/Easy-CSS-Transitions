import styles from '../styles/Home.module.css';
import React, {useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';

const Stage = () => {
/*TO CREATE:
        
        1. Square object - size, position, rotation, colour and scale.
        2. Eventually this should be contained in the store - create the square object as a map against existing keyframes
        3. Ability to play animation based on object properties
        4. Update store to have "current active frame"
        5. This also needs to be updated in the timeline component - there needs to be a "pointer" UI to current keyframe

ANIMATION METHODS EXPLAINED: (Note - For simplicity sake, I will start with the second animation method (read below)
        There are two approaches to managing the animation based on keyframes:
        1. Every time the user creates a frame and then makes a change to a specific parameter, the interpolation happens separately
        between each parameter, as opposed to each frame.
        2. The interpolation for every single parameter gets handled between frames without distinguishing between the channels separately.

        To understand this better, follow the below example:
        For example, if the square changes position from 0px to 20px from frames 1 to 20, then the square should move from left to right accordingly. 
        If subsequently, a rotation of 90 degrees is applied to frame 30:

        1. If the interpolation of every parameter is handled separately, then now the cube should also be gradually rotating from frame 1 to frame 30,  
        since the user did not explicitly make any other rotation changes. So, the position and rotation changes work simultaneously but on separate timeline channels.
        ____________                                            __________
        |   PROS    |                                           |  CONS   |
        -------------                                           -----------
        - Animating this way requires less planning            - May demand additional UI for separate channels
        - More intuitive for some users like 3D animators      - User may not remember which keyframes had specific parameter changes
        - Can save time with less manual rework

        2. In the second method, the cube would only start rotating from frame 20 to 30, since the interpolation happens between each frame for every single parameter 
        ____________                                            __________
        |   PROS    |                                           |  CONS   |
        -------------                                           -----------
        - Interpolation between frames is more predictable           - May require additional planning for animators
        - Does not require additional UI                             - Requires editing more frames when modifying animation
        - More popular with traditional 2D animation tools
    */
    const hoveredFrame = useSelector(state => state.frame.hovered)
    const canvasRef = useRef(null)
    //As an experiment, set the animation based on the current hovered frame (testing purposes only)
    useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    //Square onbject (will need to move to store later):
    const elementFrames = new Map();
    elementFrames.set(1, {position: [0, 0], scale: [1, 1], rotation: 0, colour: "green"})
    elementFrames.set(24, {position: [20, 0], scale: [1, 1], rotation: 0, colour: "green"})
    elementFrames.set(60, {position: [23, 10], scale: [1, 1], rotation: 0, colour: "green"})
    elementFrames.set(72, {position: [0, 0], scale: [1, 1], rotation: 0, colour: "green"})

    
    //Get background colour dynamically by referencing the CSS variable
    const secondaryColour = window.getComputedStyle(document.querySelector("html")).getPropertyValue("--secondary-color")
    // Set canvas background color
    context.fillStyle = secondaryColour;
    context.fillRect(0, 0, canvas.width/4, canvas.height/4);
    }, [hoveredFrame])
    return (
    <div>
    <canvas ref={canvasRef} width={100} height={60} className={styles.stageContainer} />
    </div>
    )
}

export default Stage;