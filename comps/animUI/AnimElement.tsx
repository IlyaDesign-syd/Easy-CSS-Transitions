import React from "react";
import { AnimAttributes } from "../../types/element-properties";
import { DEFAULT_ANIM_PROPS } from "../../types/globals";

interface AnimProps {
    animProp: AnimAttributes
}

const AnimElement: React.FC<AnimProps> = ({animProp}) => {

    const {position, rotation, scale, colour} = animProp ?? DEFAULT_ANIM_PROPS

    return (
    <div
        className="animElement"
        style={{
            backgroundColor: colour,
            width: scale[0],
            height: scale[1],
            left: position[0],
            top: position[1],
            transform: `rotate(${rotation})`,
        }}
    >
    </div>
    );
};

export default AnimElement;
