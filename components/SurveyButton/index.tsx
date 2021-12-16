import styled from '@emotion/styled'
import { useForm } from "react-hook-form";
import React from 'react';
import { type } from 'os';
import { Button } from '@mui/material';
import {FC} from 'react'
import theme from "../../theme";

export const SurveyButton:FC=() =>{
   
  
    return (
     
        <Button type="submit" style={{background:"orange", left:"1150px", top:"350px", fontSize:"20px",width:"100px", color:theme.palette.info.main}}>Next</Button>

    );
  
  }