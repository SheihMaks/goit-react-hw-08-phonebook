import React from "react";

import { PhoneBookPage } from "Pages/PhoneBookPage/PhoneBookPage";
import { SharedAppBar } from "./AppBar/SharedAppBar";
import { LoginPage } from "Pages/LogInPage/LogInPage";
import { RegistPage } from "Pages/RegistPage/RegistPage";
import { HomePage } from "Pages/HomePage/HomePage";

export const App=()=>{
  
  
  return (<>
  <SharedAppBar/>
  <HomePage/>
  <RegistPage/>
  <LoginPage/>
  <PhoneBookPage/></>)
  }
