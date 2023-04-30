import React, { useState } from "react"

export const Search = ({ handleValue }: any) => {
    
    return (
        <>
            <input onChange={handleValue}/>
        </>
    )
}