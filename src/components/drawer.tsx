import React from "react";
import Link from "next/link";

const DrawerContents = () => {
 return(
    <div className="text-2xl">
        <Link className = {"text-slate-800"} href = "/">Top</Link> <br />
        <Link className = {"text-slate-800"} href = "/about">About</Link> <br />
        <Link className = {"text-slate-800"} href = "/timetable">TimeTable</Link> <br />
        <Link className = {"text-slate-800"} href = "/calender">ClassCalendar</Link> <br />
        <Link className = {"text-slate-800"} href = "/links">Links</Link> <br />
        <Link className = {"text-slate-800"} href = "/appendix">Appendix</Link>
    </div>
 )
}

export default DrawerContents