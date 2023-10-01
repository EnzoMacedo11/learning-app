import styled from "styled-components/native";

export default function SideBar(props) {
  const { visible } = props;
  console.log("teste", visible);
  return (
    <Container visible={visible}>
      <Main>
      <Title>Matérias</Title>
        <TitleBox>
          <Title>Matematica</Title>
        </TitleBox>
        <TitleBox>
          <Title>Física</Title>
        </TitleBox>
        <TitleBox>
          <Title>Biologia</Title>
        </TitleBox>
        <TitleBox>
          <Title>Geografia</Title>
        </TitleBox>
        <TitleBox>
          <Title>História</Title>
        </TitleBox>
        <TitleBox>
          <Title>Filosofia</Title>
        </TitleBox>
        <TitleBox>
          <Title>Português</Title>
        </TitleBox>
        <TitleBox>
          <Title>Redação</Title>
        </TitleBox>

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
  background-color: #535C65;
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
  background-color:#6E7A87;
  justify-content: center;
  align-items: center;
  border-radius:18%;
`;

const Title = styled.Text`
  font-size: 16%;
  color: white;
`;
