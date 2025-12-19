// ...existing code...
import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/header";

const MainContainer = styled.div`
  display: flex;
`;

const Toolbar = styled.div`
  width: 150px;
  height: 500px;
  background-color: white;
  margin-left: 60px;
  border-radius: 11px;
  margin-top: 30px;
  font-family: "Pretendard", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 16px;
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

/* 변경: active prop으로 선택 상태 스타일링 */
const ToolButton = styled.button`
  width: 110px;
  height: 40px;
  background-color: white;
  border: ${(p) => (p.active ? "2px solid #000" : "2px solid transparent")};
  border-radius: 15px;
  font-weight: 900;
  font-size: 14px;
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border 120ms ease, background-color 120ms ease;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const ToolIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 3px;
`;

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Header />
      <MainContainer>
        <Toolbar>
          <ToolButton
            type="button"
            active={selected === "move"}
            onClick={() => setSelected("move")}
            aria-pressed={selected === "move"}
          >
            <ToolIcon src="/images/cursor.png" alt="move" />
            move
          </ToolButton>

          <ToolButton
            type="button"
            active={selected === "text"}
            onClick={() => setSelected("text")}
            aria-pressed={selected === "text"}
          >
            <ToolIcon src="/images/text.png" alt="text" />
            text
          </ToolButton>

          <ToolButton
            type="button"
            active={selected === "picture"}
            onClick={() => setSelected("picture")}
            aria-pressed={selected === "picture"}
          >
            <ToolIcon src="/images/picture.png" alt="picture" />
            picture
          </ToolButton>

          <ToolButton
            type="button"
            active={selected === "ai"}
            onClick={() => setSelected("ai")}
            aria-pressed={selected === "ai"}
          >
            <ToolIcon src="/images/ai.png" alt="ai" />
            AI chat
          </ToolButton>
        </Toolbar>

        <Mainfoli />
        <Pagebar>
          <PageText>page</PageText>
        </Pagebar>
      </MainContainer>
    </>
  );
}
// ...existing code...
