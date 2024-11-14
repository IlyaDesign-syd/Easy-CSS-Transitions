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
        dispatch(setFrame(props.frameNumber));
        setFrameShows(true);
    };

    useEffect(() => {
        checkActive();
    }, [animMap, props.frameNumber]);

    return (
        <>
        {isActive ? (
            <div
            className="keyFrame"
            onMouseEnter={() => handleHover()}
            onMouseLeave={() => setFrameShows(false)}
            >
            <div className="keyDot"></div>
            </div>
        ) : (
            <div
            className="keyFrame"
            onMouseEnter={() => handleHover()}
            onMouseLeave={() => setFrameShows(false)}
            ></div>
        )}
        </>
    );
};

export default KeySlot;
