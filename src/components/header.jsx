import styled from "styled-components";

const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  margin-top: -10px;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  display: flex;
  margin-left: 80px;
  margin-top: -10px;
`;
const WriteText = styled.a`
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
const MypageText = styled.a`
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
const AuthText = styled.a`
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
  margin-top: 80px;
`;

export function Header() {
  return (
    <HeaderBox>
      <Logo src="/images/Myfoli.png" alt="Myfoli" />
      <WriteText href="">
        <b>포트폴리오 작성하기</b>
      </WriteText>
      <MypageText href="">
        <b>마이페이지</b>
      </MypageText>
      <AuthText href="">
        <b>로그인/회원가입</b>
      </AuthText>
      <HeaderLine />
    </HeaderBox>
  );
}
