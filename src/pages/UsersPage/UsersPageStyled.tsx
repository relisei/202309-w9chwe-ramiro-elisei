import styled from "styled-components";

const PageStyled = styled.article`
  padding: ${({ theme }) => theme.padding};

  .user-page {
    &__title {
      font-size: 31px;
      color: #777676;
      margin-top: 56px;
    }
  }
`;

export default PageStyled;
