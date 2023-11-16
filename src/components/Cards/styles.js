import styled from 'styled-components';

export const Container = styled.header``;

export const Div = styled.header`
  position: relative;
  width: 600px;
  padding: 20px;
  max-width: 85vw;
  height: 50vh;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
`;

export const CardContainer = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 5vh;

.swipe{
  position: absolute;
}

.card > h3 {
  position: absolute;
  bottom: 10px;
  color: white;
}
`;