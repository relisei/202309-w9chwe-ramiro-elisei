import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 15px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.main};
  text-align: center;
  letter-spacing: -1px;

  .header {
    &__title {
      font-family: ${({ theme }) => theme.typography.fontLogo};
      font-size: 28px;
      font-weight: 700;
    }
  }
`;

export default HeaderStyled;
