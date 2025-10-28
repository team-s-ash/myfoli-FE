import React, { useState } from "react";
import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 800px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;
const Title = styled.h1`
  font-size: 30px;
  margin-top: -290px;
  position: absolute;
`;

const Certification = styled.div`
  width: 500px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 14px;
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 475px;
  height: 60px;
  transform: translateY(-12px);
`;

const EmailCerti = styled.input`
  width: 100%;
  height: 100%;
  background-color: #f4f4f5;
  border-radius: 14px;
  padding: 8px 20px;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  box-sizing: border-box;
`;

const FakePlaceholder = styled.span`
  position: absolute;
  left: 6px;
  top: 6px;
  color: #616161;
  white-space: pre-line;
  pointer-events: none;
  font-size: 12px;
  line-height: 1.2;
  margin-left: 10px;
`;

const Button = styled.button`
  width: 475px;
  height: 60px;
  background-color: #3b82f6;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-top: 470px;
  position: absolute;
  cursor: pointer;
`;
const SendText = styled.span`
  margin-top: 8px;
  font-size: 12px;
  margin-left: 14px;
  color: #616161;
`;
const Logo = styled.img`
  width: 130px;
  height: 130px;
  margin-bottom: 12px;
  position: absolute;
  display: flex;
  margin-left: -1100px;
`;

function SignUp() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <SignUpContainer>
      <Logo src="/images/Myfoli.png" alt="Myfoli" />
      <Container>
        <Title>회원가입</Title>
        <Certification>
          <InputWrapper>
            {!value && !focused && (
              <FakePlaceholder>
                {"이메일\n\n예) s00000@gsm.hs.kr"}
              </FakePlaceholder>
            )}
            <EmailCerti
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <SendText>적은 이메일로 인증번호가 보내집니다.</SendText>
          </InputWrapper>
        </Certification>
        <Button>이메일 인증</Button>
      </Container>
    </SignUpContainer>
  );
}

export default SignUp;
