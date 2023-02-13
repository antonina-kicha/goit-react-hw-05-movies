import { Link } from "react-router-dom";
import styled from "styled-components";


export const GoBackButton = styled(Link)`
display: flex;
gap: 10px;
align-items: center;
width: fit-content;margin-top: 10px;
padding: 5px 15px;
border: 1px solid grey;
border-radius: 4px;
text-decoration: none;
background-color: #EFEFEF;
color: black;

:hover, focus {
background-color: #DCD9D9;
}
`;

