import {FC} from 'react'
import styled from "@emotion/styled"
import React from 'react';


const Container=styled.div`
background-color:${(theme)=>{
    return theme.palette.secondary.main;
}};

`;


export const Root: FC=({children})=>{
    return <div>{children}</div>;
}