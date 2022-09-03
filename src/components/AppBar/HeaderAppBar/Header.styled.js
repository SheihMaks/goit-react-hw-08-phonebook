import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const HeaderContainer=styled.div`

`

export const LinksContainer=styled.div`
display:flex;
justify-content:space-between;
`

export const NavLinkStyled=styled(NavLink)`
margin:0;
padding:0;
text-decoration:none;
&.active{
    color:blue;
}`;