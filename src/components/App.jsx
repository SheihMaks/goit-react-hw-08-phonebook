import React from "react";
import { PhoneBookPage } from "Pages/PhoneBookPage/PhoneBookPage";
import { SharedAppBar } from "./AppBar/SharedAppBar";
import { LoginPage } from "Pages/LogInPage/LogInPage";
import { RegistPage } from "Pages/RegistPage/RegistPage";
import { HomePage } from "Pages/HomePage/HomePage";
import { authSelectors } from "components/Redux/sliceAuth";
import { useSelector } from "react-redux";
import { Routes,Route } from "react-router-dom";
import {useGetCurrentUserQuery} from './Redux/FetchUser';

export const App=()=>{
  const{getToken}=authSelectors;
  // const isLogged=useSelector(getIsLoggedIn);
  const token=useSelector(getToken);
  
  useGetCurrentUserQuery(undefined,{skip:!token});
  
  return (<>
  <Routes>
    <Route path='/' element={<SharedAppBar/>}>
      <Route index element={<HomePage/>}/>
      <Route path='register' element={<RegistPage/>}/>
      <Route path='login' element={<LoginPage/>}/>
      <Route path='contacts' element={<PhoneBookPage/>}/>
    </Route>
  </Routes>

  </>)
  }

