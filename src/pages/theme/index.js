import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Header from "../../components/header";
import { useNavigation, useRoute } from "@react-navigation/native";
import ThemeType from "../../themeType";

export default function Theme() {
  const route = useRoute();
  const navigation = useNavigation()
  const { Name } = route.params;

  console.log(Name);
  const PageTheme = ThemeType[Name];
  console.log(PageTheme)

  function goTopic(item){
    navigation.navigate("Topic",{item})
  }  


  

  return (
    <SafeAreaView>
      <Container>
        <Header />
        <TitleBox>
          <Title>{Name}</Title>
        </TitleBox>
       
        <FlatList style={styles.flatList}
          data={PageTheme}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={()=>goTopic(item)}>
                <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.nome}</Text>
              </View>
              </TouchableOpacity>
              
            );
          }}
        />
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  width:100%;
  height: 100%;
  background-color: #f4e9e1;
  display: flex;
 align-items:center;
`;
const TitleBox = styled.View`
  margin-top: 3%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3%;
`;

const Title = styled.Text`
  font-size: 22px;
  color: black;
`;



const ThemeContainer = styled.View`
  padding-top: 3%;
  display: flex;
  background-color: red;
  justify-content:center;
  align-items:center;
  width: 95%;
  height: 81.5%;
`;

const Card = styled.View`
  display: flex;
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  background-color: #272753;
  margin-bottom: 6%;
  border-radius: 30%;
`;

const CardTitle = styled.Text`
  color: whitesmoke;
  font-size: 18px;
`;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height:100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272753",
    marginBottom: 15,
    borderRadius: 30,
  },
  cardTitle: {
    color: "whitesmoke",
    fontSize: 18,
  },
  flatList: {
    width: '95%', // Define a largura da FlatList como 100%
  },
});
