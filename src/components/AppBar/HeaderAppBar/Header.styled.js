import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const HeaderContainer=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:1.5% 7%;
background-color:#fed4ff;
border-bottom:solid 1px grey;
`

export const LinksContainer=styled.div`
display:flex;
justify-content:center;
column-gap:20px;
`

export const NavLinkStyled=styled(NavLink)`
text-decoration:none;
padding:4px 10px;
font-weight:600;
border:1px solid transparent;
border-radius:5px;
&.active{
    border:solid 1px grey;
    background-color:#9fe8f5;
    color:blue;
}
&:hover{
    border:solid 1px grey;
}`;