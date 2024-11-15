"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFrame } from "../redux/frameSlice";
import { RootState } from "../redux/store";
import { AnimationObj } from "../types/element-properties";

const KeySlot = (props) => {
    const [frameShows, setFrameShows] = useState(false);
    const dispatch = useDispatch();

    const animMap = useSelector<RootState, AnimationObj>(
        (state) => state.frame.animationMap
    );

    const [isActive, setActive] = useState(false);

    const checkActive = () => {
        if (props.frameNumber in animMap) {
        console.log(props.frameNumber);
        setActive(true);
        } else {
        setActive(false);
        }
    };

    const handleHover = () => {
        console.log("setting frame: " + props.frameNumber);
        dispatch(setFrame(props.frameNumber));
    };

    useEffect(() => {
        checkActive();
    }, [animMap]);

    const RenderActive = (): JSX.Element => {
        return (
        <div className="keyFrame bg-primary" onMouseEnter={() => handleHover()}>
            <div className="keyDot"></div>
        </div>
        );
    };

    const RenderInactive = (): JSX.Element => {
        return <div className="keyFrame bg-tertiary" onMouseEnter={() => handleHover()}></div>;
    };

    return <>{isActive ? RenderActive() : RenderInactive()}</>;
};

export default KeySlot;
