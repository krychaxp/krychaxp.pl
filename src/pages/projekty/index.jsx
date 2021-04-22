import { useMemo } from "react";
import Link from "next/link";
import SEO from "src/seo";
import { FcOpenedFolder } from "react-icons/fc";
import { FaListUl, FaGripHorizontal } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import { IconButton } from "@material-ui/core";
import { useLocalStorageString } from "react-use-window-localstorage";
import styled, { css } from "styled-components";
import useTranslation from "next-translate/useTranslation";

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

const ListItem = styled.a`
  border: 1px solid #ddd;
  border-radius: 10px;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 7px 0px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
  margin: 10px;
  padding: 20px;
  width: 100%;
  text-transform: capitalize;
  position: relative;
  & > svg {
    margin-right: 20px;
  }
  &:hover {
    background-color: #eee;
    color: black;
  }
  max-width: ${({ isList }) => (isList ? 600 : 250)}px;
`;

const NewWindow = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const projects = [
  ["http://rtf.krychaxp.pl/", "Read text faster"],
  ["dane-uzytkownika", "dane użytkownika"],
  ["github"],
  ["ip"],
  ["view-source"],
  ["kolorowe-tlo", "kolorowe tło"],
  ["konwersja", "konwersja liczb"],
  ["https://labirynt.krychaxp.pl/", "labirynt"],
  ["https://wojsko.krychaxp.pl/", "wojsko"],
  ["https://weather-app-krychaxp.netlify.app/", "Weather app"],
  ["loading"],
  ["lokalizacja"],
  ["onp", "ONP"],
  ["powiadomienia"],
  ["pusc-glos", "puść głos"],
  ["/koronawirus", "koronawirus"],
].map(([path, name]) => ({
  path: /^(\/|http)/.test(path) ? path : `/projekty/${path}`,
  name: name ? name : path,
  isTarget: path.startsWith("http"),
}));

const Projects = () => {
  const { t } = useTranslation();
  const title = t("menu:projects");
  const [layoutStyle, setLayoutStyle] = useLocalStorageString(
    "projects_style",
    "list"
  );

  const projectsList = useMemo(() => {
    return projects.map((v) => v.name).reduce((t, v) => `${t}, ${v}`);
  }, []);

  const isList = useMemo(() => layoutStyle === "list", [layoutStyle]);

  const handleChange = (a) => () => setLayoutStyle(a);

  return (
    <>
      <SEO
        title={title}
        description={`Moje projekty małe i duże: ${projectsList}`}
      />
      <h1>{title}</h1>
      <h3>{t("projects:subtitle")}</h3>
      <br />
      <Buttons>
        <IconButton
          color={isList ? "primary" : "default"}
          onClick={handleChange("list")}
        >
          <FaListUl />
        </IconButton>
        <IconButton
          color={!isList ? "primary" : "default"}
          onClick={handleChange("tiles")}
        >
          <FaGripHorizontal />
        </IconButton>
      </Buttons>
      <Box>
        {projects.map(({ path, name, isTarget }, i) => (
          <Link href={path} key={i}>
            <ListItem href={path} title={name} isList={isList}>
              <FcOpenedFolder /> {name}
              {isTarget && (
                <NewWindow>
                  <IoMdOpen />
                </NewWindow>
              )}
            </ListItem>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default Projects;
