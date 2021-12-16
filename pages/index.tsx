import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useForm } from "react-hook-form";
import React from 'react';
import { type } from 'os';
import {Main} from '../components/Survey'
import theme from "../theme";

const Home: NextPage = () => {
  return (
    <div>
    <div style={{width:"1117px",position:"absolute", left:"300px", marginTop:"30px",color:theme.palette.info.main, fontSize:"38px", textAlign:"center"}}>freeCodeCamp Survey Form</div>
      <Main/>
    </div>
  );
};
export default Home;