import React from "react";
import TimeTable2 from "./timetable_2day";

const TimeTableMobile = () => {
    return(
        <div>
            <TimeTable2 day = {0} />
            <TimeTable2 day = {1} />
        </div>
    )
}

export default TimeTableMobile