import React from "react";

import { PhoneBookPage } from "Pages/PhoneBookPage/PhoneBookPage";
import { SharedAppBar } from "./AppBar/SharedAppBar";
import { LoginPage } from "Pages/LogInPage/LogInPage";
import { RegistPage } from "Pages/RegistPage/RegistPage";
import { HomePage } from "Pages/HomePage/HomePage";
import { authSelectors } from "components/Redux/sliceAuth";
import { useSelector } from "react-redux";

export const App=()=>{
  const{getIsLoggedIn}=authSelectors;
  const isLogged=useSelector(getIsLoggedIn)
  
  return (<>
  <SharedAppBar/>
  <RegistPage/>
  <LoginPage/>
  <HomePage/>
  {isLogged && <PhoneBookPage/>}</>)
  }

