import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomePageContainer=styled.div`
padding:25vh 0;
`
export const GreetingLoggedUser=styled.p`
text-align:center;
font-size:32px;
font-weight:600;
margin-bottom:7px;`

export const HomePageTextIfLogged=styled.p`
text-align:center;
font-size:28px;
font-weight:600;
margin-bottom:7px;
`

export const HomePageTextAccount=styled.p`
text-align:center;
font-size:24px;
margin-bottom:15px;
`
export const AuthNavLinkHome=styled(NavLink)`
color:blue;
background-color:#abfff9;
font-weight:600;
padding:2px 8px;
font-size:20px;
border:solid 1px grey;
border-radius:5px;
&:hover{
    background-color:#60c0f7;
};`
