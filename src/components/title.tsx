import React, { ReactNode } from "react";
import '@/styles/title.css'

type Props = {
    children: ReactNode
}

const Title = ({children}: Props) => {
    return(
        <h1 className="text-3xl m-5 mb-3 p-3 title">{children}</h1>
    )
}

export default Title