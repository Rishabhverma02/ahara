import styled from "styled-components";

export const TrustBarWrapper = styled.div`
  width: 100%;
  background: #7E7C2A;
  padding: 30px 0;
  border-bottom: 1px solid #f0f0f0;
`;

export const TrustBarContainer = styled.div`
  width: 92%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffffff;
  opacity: 0.8;

  svg {
    font-size: 20px;
  }
`;
