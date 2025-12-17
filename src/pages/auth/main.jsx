import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/header";
// ...existing code...
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const UpContainer = styled.div`
  display: flex;
  width: 700px;
  height: 100px;
  justify-content: center;
`;
const DownContainer = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  justify-content: center;
  position: absolute;
  margin-top: 150px;
`;

const SearchBox = styled.input`
  width: 550px;
  height: 50px;
  border-radius: 11px;
  border: 0.5px solid black;
  outline: none;
  background: url(/images/search.png) no-repeat 20px center;
  background-size: 27px;
  padding-left: 55px;
  &::placeholder {
    color: black;
  }
`;
const MajorBoxContainer = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  margin-top: 60px;
  margin-left: -120px;
`;
// 변경: active prop에 따라 배경색 변경
const MajorBox = styled.button`
  width: 90px;
  height: 30px;
  background-color: ${(props) => (props.active ? "#BFD7FF" : "white")};
  color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 11px;
  cursor: pointer;
`;
const ReContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 210px;
`;
const ReText = styled.b`
  font-size: 19px;
  margin-top: -30px;
`;
const PortfolioBox = styled.div`
  width: 250px;
  height: 130px;
  background-color: #d9d9d9;
  border-radius: 11px;
  margin-top: 10px;
`;
const MajorName = styled.b`
  font-size: 14px;
`;
// ...existing code...

export function Main() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Header />
      <MainContainer>
        <UpContainer>
          <SearchBox type="search" placeholder="관련 포트폴리오를 검색합니다" />
          <MajorBoxContainer>
            <MajorBox
              type="button"
              active={selected === "frontend"}
              onClick={() => setSelected("frontend")}
            >
              프론트엔드
            </MajorBox>
            <MajorBox
              type="button"
              active={selected === "backend"}
              onClick={() => setSelected("backend")}
            >
              백엔드
            </MajorBox>
            <MajorBox
              type="button"
              active={selected === "design"}
              onClick={() => setSelected("design")}
            >
              디자인
            </MajorBox>
            <MajorBox
              type="button"
              active={selected === "devops"}
              onClick={() => setSelected("devops")}
            >
              데브옵스
            </MajorBox>
          </MajorBoxContainer>
        </UpContainer>
        <DownContainer>
          <ReContainer>
            <ReText>추천 포트폴리오</ReText>
            <PortfolioBox></PortfolioBox>
            <MajorName>2025 Designer portfolio</MajorName>
          </ReContainer>
        </DownContainer>
      </MainContainer>
    </>
  );
}
// ...existing code...
