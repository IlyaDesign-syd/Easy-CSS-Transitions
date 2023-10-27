import styles from '../styles/Home.module.css';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Stage = () => {
    /*TO CREATE:
            
            1. (DONE) Square parameters object - size, position, rotation, colour and scale.
            2. (PROGRESS) Create the square object as a map against existing keyframes (start with local var and then extend to store)
            3. Ability to play animation based on object properties
                --> Create variable for tracking current frame in animation (for testing play/pause functionality"))
                --> (DONE) Create interpolation algorithm (function running at each frame returning calculated object properties): 
                    - (DONE) Check if on active keyframe (no interpolation required -> get properties with the keyframe using map(frame))
                    - (DONE) Check if only 1 frame present -> simply return as object will be in default position
                    - (DONE) Otherwise, check position of previous keyframe, the next keyframe and interpolate all properties relative to current frame position
                    - (DONE) Check if current frame is pointing after the last frame, or before the first frame
                --> (DONE) Test interpolation by hard-coding keyframes and re-render cube everytime the hoverkey changes
                --> Add "isPlaying" flag, and increment current keyframe with timeOut based on FPS, if true
            4. Update store to have "current active frame"
            5. This also needs to be updated in the timeline component - there needs to be a "pointer" UI to current keyframe
    ------------------------------------------------------------------------------------------------------------------------------------
    
    ANIMATION METHODS EXPLAINED: (Note - For simplicity sake, I will implement the second animation method (read below)
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
    //Use the hover state to test out animation interpolation:
    const hoveredFrame = useSelector(state => state.frame.hovered)
    const canvasRef = useRef(null)
    const canvasWidth = 1200;
    const canvasHeight = 900;
    //Square object:
    `TO DO: Move element frames into the store`
    const elementFrames = new Map();
    elementFrames.set(1, { position: [0, 0], scale: [1, 12], rotation: 0, colour: "green" })
    elementFrames.set(24, { position: [20, 0], scale: [13, 1], rotation: 0, colour: "green" })
    elementFrames.set(60, { position: [23, 10], scale: [12, 1], rotation: 0, colour: "green" })
    elementFrames.set(72, { position: [0, 0], scale: [1, 1], rotation: 0, colour: "green" })

    //Return interpolated object properties
    const interpolateFrame = (activeFrame) => {
        //TO DO: Test all edge cases + working scenarios
        //Null or invalid target frame:
        if (!activeFrame || activeFrame < 1 || activeFrame > 100) {
            console.log("Invalid target frame!");
            return;
        }
        //Check if on active keyframe (no interpolation required) -> most efficient
        if (elementFrames.get(activeFrame)) return elementFrames.get(activeFrame);

        //Check if only 1 frame present -> simply return as object will be in default position
        if (elementFrames.size === 1) return elementFrames.values().next().value

        //Otherwise, check position of previous keyframe, the next keyframe and interpolate all properties relative to current frame position

        //Iterate the entire keyframe map to find proceeding and succeeding frame
        let keyPrev = -1;
        let keyNext = 999;
        for (const [key, value] of elementFrames) {
            //Smallest existing key number greater than current frame:
            if (key > activeFrame && key < keyNext) keyNext = key
            //Opposite to the above:
            if (key < activeFrame && key > keyPrev) keyPrev = key
        }
        //Handles having no next/previous key
        if (keyNext === 999) {
            keyNext = keyPrev;
        } else if (keyPrev === -1) {
            keyPrev = keyNext
        }

        //Using prev and next keyframes, interpolate based on current frame:
        const prevFrame = elementFrames.get(keyPrev)
        const nextFrame = elementFrames.get(keyNext)
        //Get value between 0 and 1 based on current frame relative to prev and current frames
        const length = keyNext - keyPrev
        const point = activeFrame - keyPrev
        //Frac (value 0 - 1)
        const frac = point / length
        const lerp = (x, y) => { return x * (1 - frac) + y * frac };

        let interpolatedFrame = {};
        //TO DO: Reduce code redundancy, and make properties more dynamic - also include interp colour
        //Interpolate every attribute of the object
        interpolatedFrame.position = [lerp(prevFrame.position[0], nextFrame.position[0]),
        lerp(prevFrame.position[1], nextFrame.position[1])];
        interpolatedFrame.scale = [lerp(prevFrame.scale[0], nextFrame.scale[0]),
        lerp(prevFrame.scale[1], nextFrame.scale[1])];
        interpolatedFrame.rotation = lerp(prevFrame.rotation, nextFrame.rotation)
        return interpolatedFrame
    }
    //--> As an experiment, set the animation based on the current hovered frame (testing purposes only)
    //TO DO: Reimplement stage using a div as a square, instead of a canvas component (due to resolution issues)
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        //Get background colour dynamically by referencing the CSS variable
        const secondaryColour = window.getComputedStyle(document.querySelector("html")).getPropertyValue("--secondary-color")
        context.fillStyle = secondaryColour;

        //Default square
        let currentFrameProperties = interpolateFrame(hoveredFrame)
        context.fillStyle = "yellow";

        context.fillRect(currentFrameProperties.position[0], currentFrameProperties.position[0], currentFrameProperties.scale[0], currentFrameProperties.scale[1]);
    }, [hoveredFrame])


    return (
        <div>
            {<canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className={styles.stageContainer} />}
            <div className={styles.stageContainer}>
                <div className={styles.animElement}></div>
            </div>
        </div>
    )
}

export default Stage;