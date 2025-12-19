import React, { useState, useRef, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

/* ===== GlobalStyle (페이지 전체 스크롤 제거) ===== */
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
  gap: 12px;
  padding: 20px;
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

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const SmallInput = styled(InputBox)`
  height: 55px;
`;

/* ===== Component ===== */
function SignUp() {
  const [showVerification, setShowVerification] = useState(false);
  const [verified, setVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [verification, setVerification] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [interest, setInterest] = useState("");

  const verificationRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    if (showVerification && !verified) {
      verificationRef.current?.focus();
    }
    if (verified) {
      passwordRef.current?.focus();
    }
  }, [showVerification, verified]);

  const isSchoolEmail = (value) => /^[^\s@]+@gsm\.hs\.kr$/i.test(value.trim());

  const handleSendClick = () => {
    if (!isSchoolEmail(email)) {
      setError("학교 이메일(@gsm.hs.kr)만 사용할 수 있습니다.");
      return;
    }

    setError("");

    if (!showVerification) {
      setShowVerification(true);
      return;
    }

    if (showVerification && !verified) {
      if (verification.length !== 6) {
        setError("6자리 인증번호를 입력해주세요.");
        return;
      }
      setVerified(true);
      return;
    }

    if (verified) {
      if (password.length < 8 || password.length > 12) {
        setError("비밀번호는 8~12자여야 합니다.");
        return;
      }
      if (!nickname.trim()) {
        setError("닉네임을 입력해주세요.");
        return;
      }
      alert("회원가입 요청 전송(샘플)");
    }
  };

  const handleVerificationChange = (e) => {
    setVerification(e.target.value.replace(/\D/g, "").slice(0, 6));
  };

  return (
    <>
      <GlobalStyle />
      <SignUpContainer>
        <Container>
          <Logo src="/images/Myfoli.png" alt="Myfoli" />

          <InputContainer>
            {!verified && (
              <>
                <InputBox
                  type="email"
                  placeholder="이메일"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={showVerification}
                />
                <InputText>입력한 이메일로 인증번호가 전송됩니다.</InputText>
              </>
            )}

            {error && <ErrorText>{error}</ErrorText>}

            {showVerification && !verified && (
              <>
                <InputBox
                  type="text"
                  placeholder="인증번호 입력"
                  value={verification}
                  onChange={handleVerificationChange}
                  ref={verificationRef}
                  inputMode="numeric"
                />
                <InputText>
                  이메일로 온 6자리 인증번호를 입력해주세요.
                </InputText>
              </>
            )}

            {verified && (
              <Row>
                <SmallInput
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  ref={passwordRef}
                />
                <InputText>비밀번호는 8~12자, 2종류 이상 조합</InputText>

                <SmallInput
                  type="text"
                  placeholder="닉네임"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />

                <SmallInput
                  as="select"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                >
                  <option value="">관심분야 선택</option>
                  <option value="frontend">프론트엔드</option>
                  <option value="backend">백엔드</option>
                  <option value="design">디자인</option>
                  <option value="devops">데브옵스</option>
                  <option value="game">게임개발</option>
                  <option value="ai">AI</option>
                  <option value="none">없음</option>
                </SmallInput>
              </Row>
            )}
          </InputContainer>

          <Button onClick={handleSendClick}>
            {!showVerification
              ? "인증번호 보내기"
              : !verified
              ? "인증번호 확인"
              : "회원가입"}
          </Button>
        </Container>
      </SignUpContainer>
    </>
  );
}

export default SignUp;
