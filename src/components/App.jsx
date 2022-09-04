import React from "react";

import { PhoneBookPage } from "Pages/PhoneBookPage/PhoneBookPage";
import { SharedAppBar } from "./AppBar/SharedAppBar";
import { LoginPage } from "Pages/LogInPage/LogInPage";
import { RegistPage } from "Pages/RegistPage/RegistPage";
import { HomePage } from "Pages/HomePage/HomePage";
import { authSelectors } from "components/Redux/sliceAuth";
import { useSelector } from "react-redux";
import { Routes,Route } from "react-router-dom";

export const App=()=>{
  const{getIsLoggedIn}=authSelectors;
  const isLogged=useSelector(getIsLoggedIn)
  
  return (<>
  
  <Routes>
  <Route path='/' element={<SharedAppBar/>}>
  <Route index element={<HomePage/>}/>
  <Route path='register' element={<RegistPage/>}/>
  <Route path='login' element={<LoginPage/>}/>
  
  {isLogged && <PhoneBookPage/>}
  </Route>
  </Routes>
  </>)
  }

