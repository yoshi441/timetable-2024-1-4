"use client"
import React from 'react'
import Header from '@/components/header'
import TimeTable2 from '@/components/timetable_2day'
import Title from '@/components/title'
import Midashi from '@/components/section_midashi'
import Body from '@/components/body'
import InfoTop from '@/components/info_top'
import { useMediaQuery } from '@mui/material'
import HeaderMobile from '@/components/header_mobile'
import TimeTableDesktop from '@/components/timetable_desktop'
import TimeTableMobile from '@/components/timetable_mobile'

const Home = () => {
  const isComputer: boolean = useMediaQuery("(min-width: 880px)")
  return(
    <>
      {isComputer && <Header />}
      {!isComputer && <HeaderMobile />}
      <Title>時間割</Title>
      <Body>
      {isComputer && <TimeTableDesktop />}
      {!isComputer && <TimeTableMobile/>}
      </Body>
      <Title>お知らせ</Title>
      <Body>
        <InfoTop />
      </Body>
    </>
  )
}

export default Home
