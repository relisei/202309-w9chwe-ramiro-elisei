import styled from "styled-components";

const NavigationStyled = styled.nav`
  padding: ${({ theme }) => theme.padding};

  .navigation {
    &__list {
      display: flex;
      justify-content: center;
      gap: 30px;
    }
    &__element {
      font-size: 18px;
      letter-spacing: -0.5px;
    }
  }
  .active {
    text-decoration: underline;
    padding-top: 2px;
  }
`;
export default NavigationStyled;
