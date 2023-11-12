import styled from "styled-components";

const UserCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
  padding-top: 30px;
  margin: 0 auto;

  .user-card {
    &__nickname {
      font-size: 25px;
      padding-top: 20px;
      padding-bottom: 10px;
    }

    &__fullname {
      font-weight: 700;
      font-size: 22px;
    }

    &__information {
      text-align: left;
      display: flex;
      flex-direction: column;
    }

    &__header-information {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 10px;
    }

    &__property {
      color: ${({ theme }) => theme.colors.main};
    }

    &__age {
      padding-bottom: 15px;
      font-size: 18px;
      color: #5f5f5f;
    }

    &__aboutme {
      font-size: 18px;
      color: #5f5f5f;
      line-height: 20px;
    }
  }
`;

export default UserCardStyled;
