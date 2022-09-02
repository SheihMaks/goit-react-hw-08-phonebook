import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const HeaderContainer=styled.div`
display:flex;
justify-content:space-between;`

export const LinksContainer=styled.div`
`

export const NavLinkStyled=styled(NavLink)`
text-decoration:none;
&.active{
    color:blue;
}`;