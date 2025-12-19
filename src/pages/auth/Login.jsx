import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Pretendard', sans-serif;
  }
`;

/* ===== Styled Components ===== */
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

function Login() {
  return (
    <>
      <GlobalStyle />
      <SignUpContainer>
        <Container>
          <Logo src="/images/Myfoli.png" alt="Myfoli" />

          <InputContainer>
            <>
              <InputBox type="email" placeholder="이메일" />
              <InputText>지급된 학교 이메일을 이용해 주십시오.</InputText>
            </>
            <>
              <InputBox
                type="text"
                placeholder="인증번호 입력"
                inputMode="numeric"
              />
              <InputText>
                비밀번호는 8~12자로, 영문/숫자/특수문자 중 2가지 이상을 포함해야
                합니다.
              </InputText>
            </>
          </InputContainer>
          <Button>로그인</Button>
        </Container>
      </SignUpContainer>
    </>
  );
}

export default Login;
