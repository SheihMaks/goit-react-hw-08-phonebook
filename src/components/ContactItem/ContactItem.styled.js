import styled from "styled-components";

export const ContactListItem=styled.li`
display:flex;
justify-content:space-between;
width:100%;
font-weight:600;
margin-bottom:10px;
`
export const ContainerInputForEdit=styled.div`
display:flex;
column-gap:5px;
`
export const InputForEdit=styled.input`
width:45%;
`

export const ContactContainer=styled.div`
`
export const Span=styled.span`
`

export const ContainerButtonsItem=styled.div`
display:flex;
column-gap:5px;
`

export const DeleteItemButton =styled.button`
width:100%;
padding:auto;
cursor:pointer;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
:hover{
    background-color:white;
};`

export const EditItemButton=styled.button`
width:100%;
padding:auto;
cursor:pointer;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
:hover{
    background-color:white;
};
`