import React from 'react';
import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Header from '../../components/header';

export default function Home() {

  return (
    <SafeAreaView>
      <Container>
        <Header/>
        <Text>Home Page</Text>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
height:100%;
background-color:#F4E9E1;
display:flex;
`
