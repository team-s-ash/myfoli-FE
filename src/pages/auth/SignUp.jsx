import styled from "styled-components";
// ...existing code...

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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 475px;
  min-height: 100px;
  max-height: 500px;
  background-color: white;
  border-radius: 20px;
  margin-top: 100px;
  position: relative;
`;

const InputBox = styled.input`
  width: 450px;
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
  margin-left: -220px;
  margin-top: 5px;
`;

/* ...existing code... */
const Logo = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 12px;
  position: absolute;
  display: flex;
  margin-left: -1100px;
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
  margin-top: 470px;
  position: absolute;
  cursor: pointer;
`;

/* ...existing code... */
function SignUp() {
  return (
    <SignUpContainer>
      <Logo src="/images/Myfoli.png" alt="Myfoli" />
      <Container>
        <Title>회원가입</Title>
        <InputContainer>
          <InputBox type="text" placeholder="이메일" />
          <InputText>적은 이메일로 인증번호가 보내집니다.</InputText>
          <InputBox type="text" placeholder="인증번호 입력" />
        </InputContainer>
        <Button onClick={Number}>인증번호 보내기</Button>
      </Container>
    </SignUpContainer>
  );
}
export default SignUp;
