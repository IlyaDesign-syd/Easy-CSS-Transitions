import React from "react";
import KeySlot from "./KeySlot";
import { NUMBERS_ARR_1_to_100 } from "../types/globals";

const Timeline = () => {

    const renderFrames = () => {
        return NUMBERS_ARR_1_to_100.map((index) => <KeySlot key={index} frameNumber={index} />);
    };

    return (<>
        <div data-testid="Timeline" className="timelineContainer">
            {renderFrames()}
        </div>
    </>);
};

export default Timeline;
