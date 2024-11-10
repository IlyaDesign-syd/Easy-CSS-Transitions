import React from "react";
import KeySlot from "./KeySlot";

const Timeline = () => {
    return (
    <>
        <div data-testid="Timeline" className="timelineContainer">
        {[...Array(100).keys()]
            .map((i) => i + 1)
            .map((key) => {
                return <KeySlot key={key} frameNumber={key} />;
            })}
        </div>
    </>
    );
};

export default Timeline;
