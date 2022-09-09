import {Outlet} from 'react-router-dom';
import { Footer } from './Footer/FooterApp';
import {Header} from './HeaderAppBar/Header'
import { ContainerApp } from './SharedAppBar.styled';
import { Suspense } from 'react';
import { Spinner } from 'components/Spinner/Spinner';

const SharedAppBar=()=>{
return(
    <ContainerApp>
    <Header/>
    <Outlet/>
    <Footer/>
    </ContainerApp>
)
}

export default SharedAppBar