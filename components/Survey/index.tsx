import type { NextPage } from "next";
import styled from "@emotion/styled";
import {
  useForm,
  useFormContext,
  FormProvider,
} from "react-hook-form";
import React, { useState, FC }  from "react";
import * as S from "./styled";
import { Root } from "../Root";
import theme from "../../theme";
import * as T from "../SurveyTextBox";
import {CheckBox} from  "../SurveyCheckBox"
import { SurveyButton } from "../SurveyButton";
import { TextField, FormGroup } from "@mui/material";
import { sendData } from "next/dist/server/api-utils";
import { text } from "stream/consumers";
import { stringify } from "querystring";
import { fontSize, textAlign } from "@mui/system";
import {RadioB} from "../SurveyRadio"
import { endianness } from "os";

export const Main = () => {
  const [counter, setCount] = useState(0);
  const methods = useForm();
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    setCount(counter + 1);
    console.log(data);
  };
  if (counter == 0) {
    return (
      <S.Main style={{ background: theme.palette.secondary.main }}>
       <div style={{width:"1117px",position:"absolute", left:"200px", top:"100px",color:theme.palette.info.main, fontSize:"48px", textAlign:"center"}}> By following a few simple steps you will successfully complete the survey form</div>
        <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <T.TextBox label="Name" required="true" multiline="false" />
          <div style={{height:"50px"}}></div>
          <T.TextBox label="Age" multiline="false"/>
          <div style={{ left: "185px" }}>{counter.toString()}</div>

          <SurveyButton />
        </form>
        </FormProvider>
      </S.Main>
    );
  } else if (counter == 1) {
    return (
        
        <S.Main style={{ background: theme.palette.secondary.main }}>
         <FormProvider {...methods} >
         <form onSubmit={methods.handleSubmit(onSubmit)}>
           <T.TextBox label="Email" multiline="false" />
           <div style={{height:"50px"}}></div>
 
           <SurveyButton />
         </form>
         </FormProvider>
       </S.Main>
    );
  } else if (counter == 2) {
    return (
        <S.Main style={{ background: theme.palette.secondary.main }}>
        <div style={{width:"1117px",position:"absolute", left:"200px", top:"100px",color:theme.palette.info.main, fontSize:"38px", textAlign:"center"}}> Which option best describes your current role?</div>
         <FormProvider {...methods} >
         <form onSubmit={methods.handleSubmit(onSubmit)}>
           <T.default />
        
 
           <SurveyButton />
         </form>
         </FormProvider>
       </S.Main>
    );
  } else if (counter == 3) {
    return (
        <S.Main style={{ background: theme.palette.secondary.main }}>
        <div style={{width:"1117px",position:"absolute", left:"200px", top:"100px",color:theme.palette.info.main, fontSize:"38px", textAlign:"center"}}> Which option best describes your current role?</div>
         <FormProvider {...methods} >
         <form onSubmit={methods.handleSubmit(onSubmit)}>
           <RadioB />
           <div style={{height:"100px"}}></div>
 
           <SurveyButton />
         </form>
         </FormProvider>
       </S.Main>
    );
  } else if (counter == 4) {
    return (
        <S.Main style={{ background: theme.palette.secondary.main }}>
        <div style={{width:"1117px",position:"absolute", left:"200px", top:"100px",color:theme.palette.info.main, fontSize:"38px", textAlign:"center"}}>What is your favorite feature of freeCodeCamp?</div>
         <FormProvider {...methods} >
         <form onSubmit={methods.handleSubmit(onSubmit)}>
           <T.default/>
           <div style={{width:"907px",position:"absolute", left:"300px", top:"300px",color:theme.palette.info.main, fontSize:"18px", textAlign:"center" }}>Copy What would you like to see improved? (Check all that apply)</div>
            <CheckBox/>
           <SurveyButton />
         </form>
         </FormProvider>
       </S.Main>
    );
  }

else if (counter == 5) {
    return (
        <S.Main style={{ background: theme.palette.secondary.main }}>
        <div style={{width:"1117px",position:"absolute", left:"200px", top:"100px",color:theme.palette.info.main, fontSize:"38px", textAlign:"center"}}>Are you any comments or suggestions?</div>
         <FormProvider {...methods} >
         <form onSubmit={methods.handleSubmit(onSubmit)}>
         <T.TextBox label="NameEnter your comments here ..."  multiline="true" />
           <SurveyButton />
         </form>
         </FormProvider>
       </S.Main>
    );
  }
  else if (counter == 6) {
    return (
        <S.Main style={{ background: theme.palette.secondary.main }}>
        <div style={{width:"1117px",position:"absolute", left:"200px", top:"100px",color:theme.palette.info.main, fontSize:"38px", textAlign:"center"}}>Your message has been sent successfully.</div>
        <div style={{width:"907px",position:"absolute", left:"300px", top:"300px",color:theme.palette.info.main, fontSize:"18px", textAlign:"center" }}>We will send our answer and the loyalty bonus to your e-mail address. Thank you!</div>
       </S.Main>
    );
  }else if(counter>6){
      
  }
};
