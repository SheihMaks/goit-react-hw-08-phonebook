import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const HeaderContainer=styled.div`
display:flex;
justify-content:space-between;
padding:2% 5%;
`

export const LinksContainer=styled.div`
margin-right:-20px;
`

export const NavLinkStyled=styled(NavLink)`
text-decoration:none;
margin-right:20px;
&.active{
    color:blue;
}`;