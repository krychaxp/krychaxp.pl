import { useMemo } from "react";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

const MainBox = styled.main`
  min-height: 90vh;
  padding: 30px 0;
  margin: var(--header-height) auto 0 auto;
  max-width: 2000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BackButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

export const Main = ({ children }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const renderButton = useMemo(() => /^\/projekty\/.+/.test(router.pathname), [
    router,
  ]);
  return (
    <MainBox>
      {renderButton && (
        <BackButton>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/projekty")}
          >
            {t("back")}
          </Button>
        </BackButton>
      )}
      {children}
    </MainBox>
  );
};
