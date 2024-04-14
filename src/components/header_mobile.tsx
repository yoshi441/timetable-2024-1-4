"use Client"
import React, { useState } from "react";
import '@/styles/header.css'
import Drawer from '@mui/material/Drawer'
import DrawerContents from "./drawer";

const HeaderMobile = () => {
    const [drawerOpened, setDrawerOpened] = useState(false)
  return(
    <>
      <div className={"bg-green-300 h-20 p-5 text-xl w-full "} onClick={() => {setDrawerOpened(true)}}>{/** ここのbg-green-300を他の色に変更するとコース変更 */}
        <h1 className={"text-2xl text-slate-700"}>
          2024年度2年Eコース掲示板
        </h1>
        <Drawer open = {drawerOpened} onClose={() => {setDrawerOpened(false)}}><DrawerContents /></Drawer>
      </div>
    </>
  )
}

export default HeaderMobile;