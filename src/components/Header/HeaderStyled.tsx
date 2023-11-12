import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 15px 0px;
  text-align: center;
  letter-spacing: -1px;

  .header {
    &__title {
      font-family: ${({ theme }) => theme.typography.fontLogo};
      border-bottom: 0.5px solid ${({ theme }) => theme.colors.main};
      padding-bottom: 10px;
      font-size: 30px;
      font-weight: 700;
    }
  }
`;

export default HeaderStyled;
