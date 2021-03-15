import SEO from "src/seo";
import dynamic from "next/dynamic";

// const GithubBox = dynamic(() => import("src/components/GithubBox"));
import GithubBox from "src/components/GithubBox";
const User = () => {
  return (
    <>
      <SEO title="Github" />
      <h1>Github</h1>
      <GithubBox />
    </>
  );
};
export default User;
