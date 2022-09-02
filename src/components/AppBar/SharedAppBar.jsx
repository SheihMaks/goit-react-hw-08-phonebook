import {Outlet} from 'react-router-dom';
import {Header} from './HeaderAppBar/Header'

export const SharedAppBar=()=>{
return(
    <>
    <Header/>
    <Outlet/>
    </>
)
}