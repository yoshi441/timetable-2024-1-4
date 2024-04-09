import React from "react";
import TimeTable2 from "./timetable_2day";

const TimeTableDesktop = () => {
    return(
        <div className="grid grid-cols-2">
            <TimeTable2 day = {0} />
            <TimeTable2 day = {1} />
        </div>
    )
}

export default TimeTableDesktop