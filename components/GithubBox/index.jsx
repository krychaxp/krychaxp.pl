/* eslint no-nested-ternary: "off" */
import { useEffect, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import { getGithubUser, getUrl } from 'apis';
import { Result } from './Result';
import { Loading } from './Loading';
import { FormWrapper } from './index.styles';

const User = () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { query } = router;
  const { user } = query;

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      query: { user: inputValue },
    });
  };

  useEffect(() => {
    if (!user) return;
    setInputValue(user);
    (async () => {
      try {
        setIsLoading(true);
        const data = await getGithubUser(user);
        const { followers_url, repos_url } = data;
        const followersUser = await getUrl(followers_url);
        const repositoriesUser = await getUrl(repos_url);
        const newUserData = [data, followersUser, repositoriesUser];
        setUserData(newUserData);
      } catch (e) {
        setUserData('Nie znaleziono takiego użytkownika!');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [user]);

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <TextField
          label="Nazwa użytkownika"
          variant="outlined"
          value={inputValue}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Szukaj
        </Button>
      </FormWrapper>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : userData?.length === 3 ? (
        <Result userData={userData} />
      ) : (
        userData
      )}
    </>
  );
};
export default User;
