import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import ThemeType from "../../themeType";

export default function SideBar(props) {
  const { visible, goTheme} = props;
  const Themes = Object.keys(ThemeType)


  return (
    <Container visible={visible}>
      <Main>
      <Title>Matérias</Title>
      {Themes.map((t,i)=>(
        <TitleBox key={i} onPress={()=>goTheme(t)}>
        <SubTitle>{t}</SubTitle>
      </TitleBox>
      )
      )}
      </Main>
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  left: 0;
  top: 10%;
  width: 60%;
  height: 90%;
  display: ${(props) => props.visible};
  align-items: center;
  justify-content: center;
  background-color: #272753;
  z-index: 10;
  border-bottom-right-radius: 10%;
  border-top-right-radius: 10%;
`;
const Main = styled.View`
padding-top:3%;
  display: flex;
  width: 95%;
  height: 95%;
  flex-direction: column;
  align-items:center;

  border-radius: 3%;
`;
const TitleBox = styled.TouchableOpacity`   
margin-top:8%;
  width: 75%;
  height: 8%;
  display: flex;
  background-color:#2E2E61;
  justify-content: center;
  align-items: center;
  border-radius:18%;
`;

const Title = styled.Text`
  font-size: 20px;
  color: white;
`;
const SubTitle = styled.Text`
  font-size: 15px;
  color: white;
`;