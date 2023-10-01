import styled from "styled-components/native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import SideBar from "../sidebar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function Header() {
    const [visible,setVisible] = useState("none")

  function openMenu() {
    if(visible =="flex")
    setVisible("none");
    else(
      setVisible("flex")
    )
  }

  return (
    <>
      <SideBar visible={visible} />
      <Container>
        <TouchableOpacity onPress={openMenu}>
          <Entypo name="menu" size={20} color="black" />
        </TouchableOpacity>
        <Logo>Learning App</Logo>
        <Ionicons name="person" size={20} color="black" />
      </Container>
    </>
  );
}

const Container = styled.View`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #4A525A;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
`;

const Logo = styled.Text`
  color: white;
  font-size: 16;
`;
