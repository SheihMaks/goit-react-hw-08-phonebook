import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const AuthNavContainer=styled.div`
display:flex;
column-gap:20px;
`

export const AuthNavLink=styled(NavLink)`
text-decoration:none;

font-weight:600;
padding:4px 10px;
border:solid 1px transparent;
border-radius:5px;
&.active{
    border:solid 1px grey;
    background-color:#9fe8f5;
    color:blue;
}
&:hover{
    border:1px solid grey;
}`;