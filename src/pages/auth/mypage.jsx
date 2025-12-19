import styled from "styled-components";
import { Header } from "../../components/header";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const MypageContainer = styled.div`
  width: 1150px;
  height: 500px;
  background-color: white;
  margin-top: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const BlueLine = styled.hr`
  position: absolute;
  width: 1090px;
  border: 15px solid #3b82f6;
  border-radius: 15px;
  margin-bottom: 430px;
`;
const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1075px;
  height: 250px;
  margin-top: 75px;
`;
const UpmemberContainer = styled.div`
  display: flex;
  width: 1075px;
  height: 15px;
  justify-content: space-between;
  align-items: center;
`;
const FoliContainer = styled.div`
  display: flex;
  width: 1075px;
  height: 200px;
  flex-direction: row;
  gap: 40px;
  box-sizing: border-box;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 515px;
  gap: 8px;
`;
const LeftFoliContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  gap: 20px;
`;
const MemberText = styled.b`
  font-size: 16px;
`;
const ModifyButton = styled.button`
  width: 70px;
  height: 19px;
  margin-top: 3px;
  border-radius: 15px;
  border: 1px solid lightgray;
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 11px;
  gap: 4px;
  justify-content: center;
  cursor: pointer;
`;
const TestBox = styled.div`
  width: 160px;
  height: 160px;
  background-color: #d9d9d9;
  border-radius: 15px;
  margin-top: 30px;
`;
const MiddleLine = styled.hr`
  position: absolute;
  width: 1090px;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  margin-top: 218px;
`;
const SeparationLine = styled.hr`
  position: absolute;
  height: 185px;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  margin-top: 280px;
`;
const MyportfolioText = styled.b`
  font-size: 16px;
`;
const PortfolioBox = styled.div`
  width: 210px;
  height: 110px;
  background-color: #d9d9d9;
  border-radius: 11px;
  margin-top: 10px;
`;
const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 140px;
`;
const PortfolioName = styled.b`
  font-size: 14px;
`;
const LeftUpContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
`;
const ArrowIcon = styled.img`
  width: 9px;
  height: 9px;
  display: inline-block;
`;

export function Mypage() {
  return (
    <>
      <Header />
      <MainContainer>
        <MypageContainer>
          <BlueLine />
          <MemberContainer>
            <UpmemberContainer>
              <MemberText>회원 정보</MemberText>
              <ModifyButton>
                수정하기
                <ArrowIcon src="/images/arrow.png" alt="arrow" />
              </ModifyButton>
            </UpmemberContainer>
            <TestBox />
            <MiddleLine />
          </MemberContainer>

          <FoliContainer>
            <Column>
              <LeftUpContainer>
                <MyportfolioText>내가 쓴 포트폴리오</MyportfolioText>
                <ModifyButton>
                  전체보기
                  <ArrowIcon src="/images/arrow.png" alt="arrow" />
                </ModifyButton>
              </LeftUpContainer>
              <LeftFoliContainer>
                <PortfolioContainer>
                  <PortfolioBox />
                  <PortfolioName>2025 Designer portfolio</PortfolioName>
                </PortfolioContainer>
                <PortfolioContainer>
                  <PortfolioBox />
                  <PortfolioName>2025 Designer portfolio</PortfolioName>
                </PortfolioContainer>
              </LeftFoliContainer>
            </Column>

            <Column>
              <LeftUpContainer>
                <MyportfolioText>즐겨찾기 목록</MyportfolioText>
                <ModifyButton>
                  전체보기
                  <ArrowIcon src="/images/arrow.png" alt="arrow" />
                </ModifyButton>
              </LeftUpContainer>
              <LeftFoliContainer>
                <PortfolioContainer>
                  <PortfolioBox />
                  <PortfolioName>2025 Designer portfolio</PortfolioName>
                </PortfolioContainer>
                <PortfolioContainer>
                  <PortfolioBox />
                  <PortfolioName>2025 Designer portfolio</PortfolioName>
                </PortfolioContainer>
              </LeftFoliContainer>
            </Column>
          </FoliContainer>

          <SeparationLine />
        </MypageContainer>
      </MainContainer>
    </>
  );
}
