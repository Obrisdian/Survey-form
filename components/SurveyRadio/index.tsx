import type { NextPage } from "next";
import styled from "@emotion/styled";
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from "@mui/material";
import { useFormContext} from "react-hook-form";
import React, { FC, useState} from "react";
import { type } from "os";
import { Root } from "../Root";
import theme from "../../theme";
import { color, lineHeight } from "@mui/system";

const ConnectForm = ({ children }: any) => {
    const methods = useFormContext();
    return children({ ...methods });
  };
const options = [];
export const RadioB=()=> {
    const [value, setValue] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');
return(  
    <ConnectForm>{({ register }:any) =>
<FormControl component="fieldset" style={{top:"300px", left:"300px", lineHeight:"28px",  color: theme.palette.info.main}}>
  <RadioGroup  style={{color: theme.palette.info.main}} {...register("Recomend")}
    aria-label="Recomend"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={(event, newValue) => {
        setValue(newValue);
        
      }}
  >
    <FormControlLabel value="Definitely" control={<Radio />} label="Definitely" />
    <FormControlLabel value="Maybe" control={<Radio />} label="Maybe" />
    <FormControlLabel value="Not sure" control={<Radio />} label="Not sure" />
  </RadioGroup >
</FormControl>}
</ConnectForm>
);}