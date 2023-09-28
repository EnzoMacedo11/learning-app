import styled from "styled-components/native"
import { Entypo, Ionicons } from '@expo/vector-icons';

export default function Header (){
    return(
        <Container>
            <Entypo name="menu" size={18} color="black" />
            <Logo>Learning App</Logo>
            <Ionicons name="person" size={18} color="black" />
        </Container>
    )
}

const Container =styled.View`
height:10%;
width:100%;
display:flex;
flex-direction:row;
background-color:gray;
justify-content:space-between;
align-items:center;
padding-left:10;
padding-right:10;


`
const Logo = styled.Text`
color:black;
font-size:16;

`