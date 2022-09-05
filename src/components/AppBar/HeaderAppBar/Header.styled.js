import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const HeaderContainer=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:2% 5%;
background-color:#fed4ff;
`

export const LinksContainer=styled.div`
margin-right:-20px;
`

export const NavLinkStyled=styled(NavLink)`
text-decoration:none;
margin-right:20px;
font-weight:600;
&.active{
    padding:4px 10px;
    border:solid 1px grey;
    border-radius:10%;
    background-color:#9fe8f5;
    color:blue;
}`;