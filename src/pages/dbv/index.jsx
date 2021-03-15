import React from "react";
import SEO from "src/seo";
import config from "config";

const DBV = () => {
  return (
    <>
      <SEO title="DBV" />
      Jeśli chcesz aby strona wróciła napisz do : {config.author.activeEmail}
    </>
  );
};

export default DBV;
