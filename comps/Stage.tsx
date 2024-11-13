import { interpolateFrame } from '../utils/interpolate';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import AnimElement from './animUI/AnimElement';
import { AnimationObj, AnimAttributes } from '../types/element-properties';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../types/globals';

/* Testing values (placeholder animation data) 
** Square object:
 TODO Move element frames into the store */

const elementFrames: AnimationObj = {
    1: {position: [0, 0], scale: [1200, 900], rotation: 0, colour: "green"},
    24: {position: [20, 0], scale: [130, 10], rotation: 0, colour: "green"},
    60: {position: [23, 10], scale: [120, 10], rotation: 0, colour: "green"},
    72: {position: [0, 0], scale: [10, 10], rotation: 0, colour: "green"}
};

const Stage = () => {
    /* TODO:
            
            1. (DONE) Square parameters object - size, position, rotation, colour and scale.
            2. TODO Create the square object as a map against existing keyframes (start with local var and then extend to store)
            3. Ability to play animation based on object properties
                TODO Create variable for tracking current frame in animation (for testing play/pause functionality"))
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
    // Use the hover state to test out animation interpolation:
    const hoveredFrame: number = useSelector<RootState, number>(state => state.frame.hovered);
    const animMap = useSelector<RootState, AnimationObj>(state => state.frame.animationMap);
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    // TODO: Reimplement stage using a div as a square, instead of a canvas component (due to resolution issues)
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    // TODO add a default animation property to globals, in case it renders before store initiates
    const [animProp, setAnim] = useState<AnimAttributes>(null);

    useEffect(() => {
        setContext(canvasRef?.current?.getContext('2d'));
    }, [])

    // Whenever user hovers over a frame, calculate interpolation based on animation properties and re render square
    useEffect(() => {
        let currentFrameProperties = interpolateFrame(hoveredFrame, elementFrames);
        setAnim(currentFrameProperties);
        if (!context) return;
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        const canvasElement= canvasRef.current!;
        const secondaryColour = window.getComputedStyle(canvasElement).getPropertyValue("--secondary-color") || "#7b7b7b"

        context.fillStyle = secondaryColour;
        
        
        context.fillStyle = "yellow";

        context.fillRect(currentFrameProperties.position[0], currentFrameProperties.position[0], currentFrameProperties.scale[0], currentFrameProperties.scale[1]);
    }, [hoveredFrame])


    return (
        <div data-test="Stage">
            {/* <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} className="stageContainer" /> */}
            <div className="stageContainer">
                <AnimElement animProp={animProp} />
            </div>
        </div>
    )
}

export default Stage;