import styled from "styled-components";

export const StepsTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto 16px auto;
  user-select: none;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 12px 28px;
  border-radius: 100px;
  border: 1px solid rgba(126, 124, 42, 0.08);
  box-shadow: 0 10px 30px rgba(58, 47, 37, 0.03);
  max-width: fit-content;

  @media (max-width: 600px) {
    gap: 10px;
    padding: 10px 18px;
    border-radius: 20px;
  }
`;

export const TimelineStep = styled.div<{
  $active: boolean;
  $completed: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${({ $active, $completed }) =>
    $active ? "#7e7c2a" : $completed ? "#63a33cff" : "#a7a48a"};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform: ${({ $active }) => ($active ? "scale(1.05)" : "scale(1)")};

  span.circle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 800;
    border: 2px solid
      ${({ $active, $completed }) =>
        $active ? "#7e7c2a" : $completed ? "#63a33cff" : "#c5c1b0"};
    background: ${({ $active, $completed }) =>
      $active ? "#7e7c2a" : $completed ? "#eef5eb" : "transparent"};
    color: ${({ $active, $completed }) =>
      $active ? "#ffffff" : $completed ? "#63a33cff" : "#a7a48a"};
    box-shadow: ${({ $active }) =>
      $active ? "0 0 12px rgba(126, 124, 42, 0.3)" : "none"};
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @media (max-width: 480px) {
    font-size: 11px;
    span.text {
      display: none;
    }
  }
`;

export const TimelineDivider = styled.div<{ $completed: boolean }>`
  height: 2px;
  width: 60px;
  background: ${({ $completed }) => ($completed ? "#496a35" : "rgba(126, 124, 42, 0.15)")};
  transition: all 0.4s ease;

  @media (max-width: 600px) {
    width: 30px;
  }
`;
