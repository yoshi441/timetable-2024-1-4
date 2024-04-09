import React, { ReactNode } from "react";

type Props = {
    children: ReactNode
}

const Body = ({children}: Props) => {
    return(
        <>
            <div className="p-5 m-5 mt-2">{children}</div>
        </>
    )
}


export default Body