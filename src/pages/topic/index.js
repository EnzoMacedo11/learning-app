import styled from "styled-components/native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import { useRoute } from "@react-navigation/native";
import YoutubeIframe from "react-native-youtube-iframe";

export default function Topic() {
  const route = useRoute();
  const { item } = route.params;
  console.log("item",item)
  
  
  return (
    <SafeAreaView>
      <Container>
        <Header />
        <TitleBox>
            <Title>{item.nome}</Title>
        </TitleBox>
        <VideoContainer>
          <YoutubeIframe
            videoId={item.linkYoutube}
            height={"95%"}
            width={"95%"}
          />
        </VideoContainer>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
`;
const VideoContainer = styled.View`
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  background-color:blue;
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
