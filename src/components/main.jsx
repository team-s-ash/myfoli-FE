import styled from "styled-components";
import { Header } from "./header";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const UpContainer = styled.div`
  display: flex;
  width: 700px;
  height: 120px;
  justify-content: center;
`;
const DownContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
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
const MajorBox = styled.button`
  width: 90px;
  height: 30px;
  background-color: white;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 11px;
`;
const ReContainer = styled.div``;

export function Main() {
  return (
    <>
      <Header />
      <MainContainer>
        <UpContainer>
          <SearchBox type="search" placeholder="관련 포트폴리오를 검색합니다" />
          <MajorBoxContainer>
            <MajorBox type="buuton">프론트엔드</MajorBox>
            <MajorBox type="buuton">백엔드</MajorBox>
            <MajorBox type="buuton">디자인</MajorBox>
            <MajorBox type="buuton">데브옵스</MajorBox>
          </MajorBoxContainer>
        </UpContainer>
        <DownContainer></DownContainer>
      </MainContainer>
    </>
  );
}
