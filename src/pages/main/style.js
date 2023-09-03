import styled from "styled-components";

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  background-color: #000000;
`;

export const HeaderBlock = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  flex-direction: column;
  background: black;
  margin-top: 0;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: white;
  font-size: 28px;
  font-family: "Pretendard-Bold";
  white-space: pre-line;
  text-align: center;
  margin-bottom: 40px;
`;

export const ServiceButton = styled.div`
  width: 120px;
  height: 22px;
  border-radius: 40px;
  padding: 10px;
  border: 1px solid white;
  font-size: 14px;
  font-family: "Pretendard-medium";
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const LogoBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  margin-top: 240px;
`;

export const Logo = styled.img`
  opacity: 0.5;
`;

export const ContentBlock = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  background: white;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

export const LogoTitle = styled.img`
  width: 95px;
  height: 35px;
`;

export const Text = styled.div`
  color: #333335;
  font-size: 16px;
  font-family: "Pretendard-Medium";
  line-height: 22px;
  margin-top: 30px;
  white-space: pre-line;
  text-align: center;
`;

export const InfoCardBlock = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 45px;
`;

export const InfoCard = styled.div`
  width: 190px;
  height: 190px;
  background: #f1f4f9;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
`;

export const Image = styled.img`
  width: 100vw;
  height: auto;
  vertical-align: middle;
`;
