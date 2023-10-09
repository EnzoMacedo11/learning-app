import styled from "styled-components/native";
import { Alert, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import { useRoute } from "@react-navigation/native";
import YoutubeIframe from "react-native-youtube-iframe";
import { useState } from "react";

export default function Topic() {
  const route = useRoute();
  const { item } = route.params;
  const [message, setMessage] = useState("");

  const [Comments, setComments] = useState([
    { author: "Aluno 1", message: "Duvida A" },
    {
      author: "Aluno 2",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.",
    },
  ]);

  const data = { author: "User", message };

  function newComments() {
    if (data.message == "") {
      Alert.alert("Alerta", "Preencha o comentário antes de enviar");
    } else {
      setComments((prevComments) => [...prevComments, data]);
      setMessage("");
      Keyboard.dismiss();
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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
          <Forum>
            <ForumTitleBox>
              <ForumTitle>Chat</ForumTitle>
            </ForumTitleBox>
            <ScrollComments
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              {Comments.map((c, i) => (
                <CommentBox key={i}>
                  <CommentIconBox>
                    <Ionicons
                      name="person-circle-outline"
                      size={30}
                      color="white"
                    />
                  </CommentIconBox>

                  <Comment>
                    <CommentAuthor>{c.author}</CommentAuthor>
                    <CommentMessage>{c.message} </CommentMessage>
                  </Comment>
                </CommentBox>
              ))}
            </ScrollComments>
            <Chat>
              <ChatInput
                placeholder="Digite sua mensagem..."
                onChangeText={setMessage}
                value={message}
              />
              <CommentButton onPress={newComments}>
                <FontAwesome name="send-o" size={22} color="whitesmoke" />
              </CommentButton>
            </Chat>
          </Forum>
        </Container>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const Container = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #f4e9e1;
`;
const VideoContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  //background-color: blue;
`;

const TitleBox = styled.View`
  height: 5%;
  //background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ForumTitleBox = styled.View`
  border-top-right-radius: 12%;
  border-top-left-radius: 12%;
  height: 6%;
  width: 100%;
  background-color: #272753;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  color: black;
`;

const ForumTitle = styled.Text`
  font-size: 16px;
  color: whitesmoke;
`;

const Forum = styled.View`
  margin-top: 0.4%;
  border-top-right-radius: 12%;
  border-top-left-radius: 12%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 55%;
  background-color: #b6c8cd;
`;
const Chat = styled.View`
  padding-top: 1%;
  padding-left: 3%;
  background-color: #272753;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  flex-direction: row;
  align-items: center;
  height: 15%;
  width: 100%;
`;

const ChatInput = styled.TextInput`
  width: 80%;
  border-radius: 5%;
  height: 70%;
  background-color: white;
  margin-right: 6%;
  padding-left: 3%;
`;

const CommentBox = styled.View`
  display: flex;
  flex-direction: row;
  //justify-content: center;
  //align-items: center;
  width: 98%;
  height: 120px;
  margin-top: 1%;
  background-color: #272753;
  border-radius: 10%;
`;

const CommentIconBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12%;
  height: 100%;
  //background-color: blue;
  margin-left: 3%;
`;

const Comment = styled.View`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  margin-top: 2%;
  margin-left: 2%;
  //background-color:green;
`;
const CommentAuthor = styled.Text`
  color: whitesmoke;
  font-size: 17px;
  margin-top: 3%;
`;
const CommentMessage = styled.Text`
  color: whitesmoke;
  font-size: 14px;
  margin-top: 2%;
`;

const ScrollComments = styled.ScrollView`
  display: flex;
  width: 95%;
  margin-bottom: 15%;
`;
const CommentButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
  height: 97%;
`;
