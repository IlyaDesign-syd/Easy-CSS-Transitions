import React, { useEffect, useRef, useState } from "react";
import { AnimAttributes } from "../../types/element-properties";
import { DEFAULT_ANIM_PROPS } from "../../types/globals";

interface AnimProps {
    animProp: AnimAttributes
}

const AnimElement: React.FC<AnimProps> = ({animProp}) => {

    const {position, rotation, scale, colour} = animProp ?? DEFAULT_ANIM_PROPS

    return (
    <div
        className="bg-slate-500"
        style={{
            backgroundColor: colour,
            width: scale[0],
            height: scale[1],
            left: position[0],
            top: position[1]
        }}
    >
    </div>
    );
};

export default AnimElement;
