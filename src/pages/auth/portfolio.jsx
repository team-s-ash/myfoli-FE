import styled from "styled-components";
import { Header } from "../../components/header";

const MainContainer = styled.div`
  display: flex;
`;
// ...existing code...
const Toolbar = styled.div`
  width: 150px;
  height: 500px;
  background-color: white;
  margin-left: 60px;
  border-radius: 11px;
  margin-top: 30px;
  font-family: "Pretendard", sans-serif;
  display: flex;
  justify-content: center;
`;

const Mainfoli = styled.textarea`
  width: 870px;
  height: 500px;
  background-color: white;
  margin-left: 60px;
  border-radius: 11px;
  margin-top: 30px;
  outline: none;
  border: none;
  resize: none;
  font-family: "Pretendard", sans-serif;
  font-weight: 800;
`;
const Pagebar = styled.div`
  width: 150px;
  height: 500px;
  background-color: white;
  margin-left: 60px;
  border-radius: 11px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
const PageText = styled.b`
  margin-top: 30px;
  font-size: 22px;
  color: black;
  font-weight: 900;
  text-shadow: 1px 1px gray;
`;
const ToolButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: white;
  border: 2px solid black;
  border-radius: 15px;
  font-weight: 900;
  font-size: 14px;
`;

export function Portfolio() {
  return (
    <>
      <Header />
      <MainContainer>
        <Toolbar>
          <ToolButton>move</ToolButton>
        </Toolbar>
        <Mainfoli></Mainfoli>
        <Pagebar>
          <PageText>page</PageText>
        </Pagebar>
      </MainContainer>
    </>
  );
}
