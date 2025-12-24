import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  margin-top: -10px;
  z-index: 10;
`;

const LogoLink = styled(Link)`
  display: flex;
  margin-left: 80px;
  margin-top: -10px;
  img {
    width: 120px;
    height: 120px;
    display: block;
  }
`;
const WriteText = styled(Link)`
  font-size: 14px;
  padding-left: 35px;
  margin-top: -15px;
  text-decoration: none;
  color: black;
  &:link,
  &:visited {
    color: black;
    text-decoration: none;
  }
  &:hover,
  &:active {
    color: #606057;
  }
`;
const MypageText = styled(Link)`
  font-size: 14px;
  padding-left: 35px;
  margin-top: -15px;
  text-decoration: none;
  color: black;
  &:link,
  &:visited {
    color: black;
    text-decoration: none;
  }
  &:hover,
  &:active {
    color: #606057;
  }
`;
const AuthText = styled(Link)`
  font-size: 14px;
  padding-left: 760px;
  margin-top: -15px;
  text-decoration: none;
  color: black;
  &:link,
  &:visited {
    color: black;
    text-decoration: none;
  }
  &:hover,
  &:active {
    color: #606057;
  }
`;
const HeaderLine = styled.hr`
  position: absolute;
  width: 100%;
  border: 0.5px solid black;
  margin-top: -20px;
  pointer-events: none;
  z-index: 1;
`;

export function Header() {
  return (
    <>
      <HeaderBox>
        <LogoLink to="/">
          <img src="/images/Myfoli.png" alt="Myfoli" />
        </LogoLink>
        <WriteText to="/portfolio">
          <b>포트폴리오 작성하기</b>
        </WriteText>
        <MypageText to="/mypage">
          <b>마이페이지</b>
        </MypageText>
        <AuthText to="/login">
          <b>로그인/회원가입</b>
        </AuthText>
      </HeaderBox>
      <HeaderLine />
    </>
  );
}
