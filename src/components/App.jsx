import React from "react";
import { Suspense,lazy } from "react";
import { Spinner } from "./Spinner/Spinner";
import  SharedAppBar  from "./AppBar/SharedAppBar";
import { authSelectors } from "components/Redux/sliceAuth";
import { useSelector } from "react-redux";
import { Routes,Route } from "react-router-dom";
import {useGetCurrentUserQuery} from './Redux/FetchUser';
import { PrivateRoutes } from "./PrivateRoutes/PrivateRoutes";

const HomePage=lazy(()=>import ('Pages/HomePage/HomePage').then(module => ({
  default: module.HomePage
})));
const PhoneBookPage=lazy(()=>import ('Pages/PhoneBookPage/PhoneBookPage').then(module => ({
  default: module.PhoneBookPage
})));
const LoginPage=lazy(()=>import ('Pages/LogInPage/LogInPage').then(module => ({
  default: module.LoginPage
})));
const RegistPage=lazy(()=>import ('Pages/RegistPage/RegistPage').then(module => ({
  default: module.RegistPage
})));
const NotFound=lazy(()=>import ('Pages/NotFound/NotFound').then(module => ({
  default: module.NotFound
})));

export const App=()=>{
  const { getToken }=authSelectors;
  const token =useSelector(getToken);
  useGetCurrentUserQuery(undefined,{skip:!token});
  return (<>
    <Suspense fallback={<Spinner/>}>
  <Routes>
    <Route path='/' element={<SharedAppBar/>}>
    <Route index element={<HomePage/>}/>
      <Route path='register' element={<RegistPage/>}/>
      <Route path='login' element={<LoginPage/>}/>
      <Route path='/' element={<PrivateRoutes/>}>
      <Route path='contacts' element={<PhoneBookPage/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </Suspense></>)
  }

