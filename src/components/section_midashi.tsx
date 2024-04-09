import React, { Children, ReactNode } from "react";
import '@/styles/title.css'
type Props = {
    children: ReactNode
}

const Midashi = ({children}: Props) => {
    return(
        <p className="p-3 m-2 text-2xl mb-2 midashi">{children}</p>
    )
} 

export default Midashi