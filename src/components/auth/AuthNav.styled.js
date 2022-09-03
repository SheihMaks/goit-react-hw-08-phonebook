import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const AuthNavContainer=styled.div`
`

export const AuthNavLink=styled(NavLink)`
text-decoration:none;
&.active{
    color:blue;
}`;