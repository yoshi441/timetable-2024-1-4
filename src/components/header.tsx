import React from "react";
import '@/styles/header.css'
import Link from 'next/link' 

const Header = () => {
  return(
    <>
      <div className={"bg-green-300 h-20 p-5 text-xl grid grid-init-pc"}>
        <h1 className={"text-3xl text-slate-700"}>
          <Link href={"/"}>2024年度2年Eコース掲示板</Link>
        </h1>

        <Link className = {"text-slate-800"} href = "/">Top</Link>
        <Link className = {"text-slate-800"} href = "/about">About</Link>
        <Link className = {"text-slate-800"} href = "/timetable">TimeTable</Link>
        <Link className = {"text-slate-800"} href = "/calender">ClassCalendar</Link>
        <Link className = {"text-slate-800"} href = "/links">Links</Link>
        <Link className = {"text-slate-800"} href = "/appendix">Appendix</Link>
      </div>
    </>
  )
}

export default Header;
