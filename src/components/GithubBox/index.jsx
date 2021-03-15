import React, { useEffect, useState, useMemo } from "react";
import { TextField, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import { getGithubUser, getUrl } from "src/api";
import { Result } from "./Result";
import { Loading } from "./Loading";
import { FormWrapper } from "./index.styles";

const User = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const search = async (userProp) => {
    if (!user) {
      return setUserData();
    }
    try {
      setIsLoading(true);
      const data = await getGithubUser(user);
      const { followers_url, repos_url } = data;
      const followersUser = await getUrl(followers_url);
      const repositoriesUser = await getUrl(repos_url);
      const newUserData = [data, followersUser, repositoriesUser];
      setUserData(newUserData);
    } catch (e) {
      setUserData("Nie znaleziono takiego użytkownika!");
    } finally {
      setIsLoading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.replace({
      query: { user },
    });
  };
  useEffect(() => {
    const name = router.query.user;
    search(name);
  }, [router]);

  const handleInput = (e) => {
    setUser(e.target.value);
  };
  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <TextField
          label="Nazwa użytkownika"
          variant="outlined"
          name="user"
          value={user}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleInput}
        />
        <Button type="submit" variant="contained" color="primary">
          Szukaj
        </Button>
      </FormWrapper>
      <Loading isLoading={isLoading} />
      <Result userData={userData} />
    </>
  );
};
export default User;
