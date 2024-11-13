import React, { useEffect, useRef, useState } from "react";
import { AnimAttributes as AnimAttriburtes } from "../../types/element-properties";
import { DEFAULT_ANIM_PROPS } from "../../types/globals";

const AnimElement: React.FC<> = ({ ...animProp }: AnimAttriburtes) => {

    const {position, rotation, scale, colour} = animProp ?? DEFAULT_ANIM_PROPS

    return (
    <div
        className="animElement"
        style={{
            backgroundColor: colour,
            width: scale[0],
            height: scale[1],

        }}
    >
    </div>
    );
};

export default AnimElement;
