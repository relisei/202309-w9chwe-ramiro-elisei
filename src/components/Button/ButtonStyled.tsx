import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 7px;
  padding: 4px 10px;
  font-size: 18px;
  border: 0.5px solid ${({ theme }) => theme.colors.main};
`;

export default ButtonStyled;
