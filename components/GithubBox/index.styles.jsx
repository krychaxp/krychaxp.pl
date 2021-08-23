import styled from 'styled-components';

export const ResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  & > div {
    margin: 0 20px;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  @media screen and (max-width: 850px) {
    margin: 0 auto;
  }
`;

export const MainWrapper = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  text-align: left;
  color: var(--dark-to-light);
  flex: 1;
  & > div {
    border-top: 1px solid #ddd;
    padding: 10px 0;
  }
`;

export const Categories = styled.div`
  display: flex;
  & > * {
    margin: 10px 10px 10px 0;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    margin: 10px;
  }
  margin-bottom: 20px;
`;

export const AvatarLogo = styled.img`
  width: 100%;
`;

export const Description = styled.div`
  padding: 5px;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RepoName = styled.a`
  color: var(--blue-to-darker);
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0;
  &:hover {
    text-decoration: underline;
  }
`;
