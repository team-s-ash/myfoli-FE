import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Pretendard', sans-serif;
  }
`;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Container = styled.div`
  width: 800px;
  background: white;
  border-radius: 20px;
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 12px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 12px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 55px;
  background-color: #f4f4f5;
  border-radius: 11px;
  border: none;
  padding: 12px 14px;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  color: #616161;

  &::placeholder {
    color: #616161;
    opacity: 1;
  }
`;

const InputText = styled.div`
  font-size: 13px;
  color: #616161;
`;

const ErrorText = styled.div`
  font-size: 13px;
  color: #d63333;
`;

const Button = styled.button`
  width: 475px;
  height: 60px;
  background-color: #3b82f6;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
const NoAccountText = styled.div`
  font-size: 14px;
  position: absolute;
  margin-top: 550px;
`;
const SignUpLink = styled(Link)`
  text-decoration: none;
  color: #616161;
  &:link,
  &:visited {
    color: #616161;
    text-decoration: none;
  }
  &:hover,
  &:active {
    color: #938d8d;
  }
  cursor: pointer;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const isSchoolEmail = (value) => /^[^\s@]+@gsm\.hs\.kr$/i.test(value.trim());

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = () => {
    if (!email || !isSchoolEmail(email)) {
      setEmailError("@gsm.hs.kr 이메일만 사용할 수 있습니다.");
      return;
    }
    setEmailError("");
  };

  return (
    <>
      <GlobalStyle />
      <SignUpContainer>
        <Container>
          <Logo src="/images/Myfoli.png" alt="Myfoli" />
          <InputContainer>
            <InputBox
              type="email"
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError ? (
              <ErrorText>{emailError}</ErrorText>
            ) : (
              <InputText>지급된 학교 이메일을 이용해 주십시오.</InputText>
            )}
            <InputBox type="password" placeholder="비밀번호" />
            <InputText>
              비밀번호는 8~12자로, 영문/숫자/특수문자 중 2가지 이상을 포함해야
              합니다.
            </InputText>
          </InputContainer>
          <Button onClick={handleLogin}>로그인</Button>
        </Container>

        <NoAccountText>
          계정이 없으신가요? <SignUpLink to="/signup">회원가입</SignUpLink>
        </NoAccountText>
      </SignUpContainer>
    </>
  );
}

export default Login;
