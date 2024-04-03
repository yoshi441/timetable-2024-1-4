import React from "react";
import '@/styles/header.css'

const Header = () => {
  return(
    <>
      <div className={"bg-green-300 h-20 p-5 w-full grid grid-init-pc"}>
        <h1 className={"text-3xl text-slate-700"}>
          2024年度2年Eコース掲示板
        </h1>
        <p>Top</p>
        <p>About</p>
        <p>TimeTable</p>
        <p>ClassCalender</p>
        <p>Links</p>
        <p>Appendix</p>
      </div>
    </>
  )
}

export default Header;
