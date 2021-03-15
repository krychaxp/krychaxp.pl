import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { FaCity } from "react-icons/fa";
import { MdLocationOn, MdExitToApp } from "react-icons/md";
import {
  ResultWrapper,
  UserWrapper,
  MainWrapper,
  Categories,
  AvatarLogo,
  RepoName,
  Description,
  FlexCenter,
} from "../index.styles";

const SingleImgAvatar = ({ followersUser, i }) => {
  const { login, id } = followersUser[i];
  if (i < 6 && followersUser[i]) {
    return (
      <Avatar
        key={i}
        alt={login}
        src={`https://avatars2.githubusercontent.com/u/${id}`}
      />
    );
  }
  return <Avatar key={i} />;
};

const FollowersBar = ({ followers, followersUser }) => {
  const list = Array(followers).fill();
  return (
    <AvatarGroup max={6}>
      {list.map((v, i) => (
        <SingleImgAvatar i={i} followersUser={followersUser} />
      ))}
    </AvatarGroup>
  );
};

export const Result = ({ userData }) => {
  if (!(userData?.length === 3)) return userData || "";

  const [
    {
      avatar_url,
      html_url,
      location,
      name,
      followers,
      public_repos,
      company,
      public_gists,
      bio,
    },
    followersUser,
    repositoriesUser,
  ] = userData;
  return (
    <ResultWrapper>
      <UserWrapper>
        <AvatarLogo src={avatar_url} alt={name} />
        <br />
        <h2>{name}</h2>
        <br />
        {bio}
        <FlexCenter
          as="a"
          href={html_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          Check profile on GitHub <MdExitToApp />
        </FlexCenter>
        <h2>Followers ({followers})</h2>
        <FollowersBar followers={followers} followersUser={followersUser} />
        <AvatarLocation location={location} />
        <AvatarCompany company={company} />
        <h2>Repositiories ({public_repos})</h2>
        <h2>Gits ({public_gists})</h2>
      </UserWrapper>
      <MainWrapper>
        {repositoriesUser.map(
          ({
            html_url,
            name,
            description,
            created_at,
            updated_at,
            language,
            license,
            homepage,
          }) => {
            const days = Math.round(
              (Date.now() - new Date(updated_at).getTime()) / 86400000
            );
            const create = new Date(created_at).toLocaleDateString();
            return (
              <div key={name}>
                <RepoName
                  href={html_url}
                  rel="noopener"
                  title={name}
                  target="_blank"
                >
                  {name}
                </RepoName>
                <Description>
                  {description}
                  {homepage && (
                    <div>
                      Homepage:
                      <a
                        href={homepage}
                        rel="noopener noreferrer"
                        title={homepage}
                        target="_blank"
                      >
                        {homepage}
                      </a>
                    </div>
                  )}
                </Description>
                <Categories>
                  {language && (
                    <div>
                      Language: <b>{language}</b>
                    </div>
                  )}
                  {license && <div>License: {license.name}</div>}

                  <div>Updated {days} days ago</div>
                  <div>Created in {create}</div>
                </Categories>
              </div>
            );
          }
        )}
      </MainWrapper>
    </ResultWrapper>
  );
};

const AvatarLocation = ({ location }) => {
  if (!location) return null;
  return (
    <div>
      <MdLocationOn />
      {` `}
      {location}
    </div>
  );
};

const AvatarCompany = ({ company }) => {
  if (!company) return null;
  return (
    <div>
      <FaCity />
      {` `}
      {company}
    </div>
  );
};
