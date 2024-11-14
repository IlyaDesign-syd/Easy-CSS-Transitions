import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFrame } from "../redux/frameSlice";
import { RootState } from "../redux/store";
import { AnimationObj } from "../types/element-properties";


const KeySlot = (props) => {
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
    };
    
    useEffect(() => {
        checkActive();
    }, [animMap, props.frameNumber]);
    
    const RenderActive = (): JSX.Element => {
        return (
        <div className="keyFrame bg-primary" onMouseEnter={() => handleHover()}>
            <div className="keyDot"></div>
        </div>
        );
    };

    const RenderInactive = (): JSX.Element => {
        return (
        <div className="keyFrame bg-tertiary" onMouseEnter={() => handleHover()}>
        </div>
        );
    };


    return (
        <>
            {isActive ? RenderActive() : RenderInactive()}
        </>
    );
};

export default KeySlot;
