import { AnimationObj, AnimAttributes, Position, Rotation, Scale } from "../types/element-properties";
import { INVALID_PREV_FRAME, INVALID_NEXT_FRAME } from "../types/globals";

// Return interpolated object properties
export const interpolateFrame = (activeFrame: number, elementFrames: AnimationObj) => {
    // TODO: Test all edge cases + working scenarios
    
    // Invalid target frame should throw error
    if (!activeFrame || activeFrame < 1 || activeFrame > 100) throw new Error('Target frame is invalid!')

    // Return hovered frame if it equals to existing keyframe (no interpolation required)
    if (elementFrames[activeFrame]) return elementFrames[activeFrame];

    // Return without interpolation if only 1 frame present
    if (Object.values(elementFrames).length === 1) return Object.values(elementFrames)[0];

    // Go through all existing key frames to determine two closest surrounding keys to activeFrame
    let keyPrev = INVALID_PREV_FRAME;
    let keyNext = INVALID_NEXT_FRAME;
    
    const sortedKeys = Array.from(Object.keys(elementFrames)).sort((a, b) => parseInt(a) - parseInt(b));

    // Get previous neighbouring keyframe to active key
    for(let i = 0; i < sortedKeys.length; i++) {
        let currKey = parseInt(sortedKeys[i])
        if(currKey >= activeFrame) break;
        if(currKey > keyPrev) keyPrev = currKey
    }

    // If there are no keys coming before the active (hovered) key, return the first existing keyframe
    // This should not normally happen, assuming there's always the "first" keyframe, and no keys exist before
    if(keyPrev === INVALID_PREV_FRAME) return elementFrames[sortedKeys[0]];

    // Get next neighbouring keyframe of active key
    for(let i = sortedKeys.length; i > 0; i--) {
        let currKey = parseInt(sortedKeys[i])
        if(currKey <= activeFrame) break;
        if(currKey < keyNext) keyNext = currKey
    }
    if(keyNext === INVALID_NEXT_FRAME) return elementFrames[keyPrev];

    // Handles having no next/previous key
    if (keyNext === keyPrev) {
        return elementFrames[keyNext];
    } 

    //Using prev and next keyframes, interpolate based on current frame:
    const prevFrame = elementFrames[keyPrev];
    const nextFrame = elementFrames[keyNext];

    // To get interpolation, count activeFrame from it's preceeding keyframe (the point)
    // and divide by the total number of frames before and after active key frames.
    // Example: if activeFrame = 7, keyframes = 1, 3, 9, 12,
    // then point = 4 (since previous key is 3), and frameAmount = 6 (distance from 3 to 9).
    const frameAmount = keyNext - keyPrev;
    const point = activeFrame - keyPrev;

    //Frac (value 0 - 1)
    const frac = point / frameAmount;
    const lerp = (x: number, y: number): number => { return x * (1 - frac) + y * frac };

    let interpolatedFrame: AnimAttributes = {
        position: [0, 0],
        scale: [0, 0],
        rotation: 0,
        colour: 'yellow'
    };

    const interpolatedPos: Position = [
        lerp(prevFrame.position[0], nextFrame.position[0]),
        lerp(prevFrame.position[1], nextFrame.position[1])
    ];

    const interpolatedScale: Scale = [
        lerp(prevFrame.scale[0], nextFrame.scale[0]),
        lerp(prevFrame.scale[1], nextFrame.scale[1])
    ];

    const interpolatedRot: Rotation = lerp(prevFrame.rotation, nextFrame.rotation);

    // TODO: Reduce code redundancy, and make properties more dynamic - interpolate colour
    interpolatedFrame.position = interpolatedPos;
    interpolatedFrame.scale = interpolatedScale;
    interpolatedFrame.rotation = interpolatedRot;
    
    return interpolatedFrame
}