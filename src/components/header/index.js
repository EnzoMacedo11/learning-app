import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import SideBar from "../sidebar";

export default function Header() {
  const [ visible, setVisible]= useState("none")
  const navigation = useNavigation();

  function openMenu() {
    if (visible === "flex") {
      setVisible("none");
    } else {
      setVisible("flex");
    }
  }

  function goToHome() {
    navigation.navigate("Home");
  }

  function goTheme(Name){
    navigation.navigate("Theme",{Name})
    setVisible("none")
    
  }


  return (
    <>
      <SideBar visible={visible} goTheme={goTheme}/>
      <Container>
        <TouchableOpacity onPress={openMenu}>
          <Entypo name="menu" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToHome}>
          <Logo>Learning App</Logo>
        </TouchableOpacity>

        <Ionicons name="person" size={20} color="white" />
      </Container>
    </>
  );
}

const Container = styled.View`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #272753;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
`;

const Logo = styled.Text`
  color: white;
  font-size: 18px;
`;
