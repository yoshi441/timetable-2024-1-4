"use client"
import React from "react";
import Header from "@/components/header";
import Title from "@/components/title";
import Body from "@/components/body";
import TimeTable from "@/components/timetable"
import { useMediaQuery } from "@mui/material";
import HeaderMobile from "@/components/header_mobile";

const Timetable = () => {
    const isComputer: boolean = useMediaQuery("(min-width: 880px)")

    return(
        <>
          {isComputer && <Header />}
          {!isComputer && <HeaderMobile />}

          <Title>時間割表</Title>
          <Body>
            <TimeTable />
          </Body>
        </>
    )
}

export default Timetable;