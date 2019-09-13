import styled from 'styled-components';


let SourceButton = styled.div`

height:32px;
background-color: ${props => props.selected ? '#1C186E' : '#3B3DB5'}; 
text-align: center;
font-size: 16px;
border: solid 1px black;
width: 200px;
cursor: ${props => props.selected ? 'default' : 'pointer'};
color: white;
line-height:32px;
margin-right: 10px;
:hover{
    background-color: #2E308E;
}`

export default SourceButton;