import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const AuthNavContainer=styled.div`
margin-right:-20px;
`

export const AuthNavLink=styled(NavLink)`
text-decoration:none;
margin-right:20px;
&.active{
    color:blue;
}`;