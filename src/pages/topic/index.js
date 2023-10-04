import styled from "styled-components/native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import { useRoute } from "@react-navigation/native";
import YoutubeIframe from "react-native-youtube-iframe";

export default function Topic() {
  const route = useRoute();
  const { item } = route.params;
  
  const video_height = 200;
  return (
    <SafeAreaView>
      <Container>
        <Header />
        <View>
          <Text>{item.nome}</Text>
        </View>
        <VideoContainer>
          <YoutubeIframe
            videoId="e3W86TPMaNk"
            height={video_height}
            width={350}
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
  padding-top: 5%;
  margin-top: 3%;
  display: flex;
  align-items: center;
  //justify-content: center;
  width: 100%;
  height: 45%;
  background-color:blue;
`;
