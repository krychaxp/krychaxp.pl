import { useEffect, useState, useMemo } from "react";
import FullScreen from "src/components/FullScreen";
import SEO from "src/seo";

const Loading = () => {
  const [time, setTime] = useState(100);
  const [dots, setDots] = useState("");
  const [long, setLong] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLong((long + 1) % 101);
    }, time * 10);
    return () => {
      clearTimeout(timer);
    };
  }, [long, time]);

  useEffect(() => {
    const userTime = window.prompt("Podaj całkowity czas ładowania (w sek.)");
    setTime(userTime);
  }, []);

  useEffect(() => {
    const createDots = () => {
      const newDots = "".padEnd((dots.length + 1) % 4, ".");
      setDots(newDots);
    };
    const timer = setTimeout(createDots, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [dots]);

  return (
    <>
      <SEO title="Loading - tło" />
      <h1>Loading</h1>
      <FullScreen info>
        <LoadingWrapper>
          <div>LOADING{dots}</div>
          <Loader>
            <LineBar long={long} time={time} style={{ width: `${long}%` }}>
              {long}%
            </LineBar>
          </Loader>
        </LoadingWrapper>
      </FullScreen>
    </>
  );
};

export default Loading;

/*********8 */

import styled, { keyframes } from "styled-components";

const key1 = keyframes`
    0%,
    100% {
        opacity: 0;
    }
    10%,
    50%,
    90% {
        opacity: 1;
    }`;

const key2 = keyframes`
       0% {
        background-position: 0 0;
    }
    100% {
        background-position: 40px 40px;
    }`;

const LoadingWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
  // cursor: none;
  box-sizing: border-box;
  background-color: #000;
  width: 100%;
  height: 600px;
  & > * {
    animation: ${key1} 2s linear infinite;
  }
`;

const Loader = styled.div`
  border: 2px solid transparent;
  position: relative;
  width: 500px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px solid #555;
`;

const LineBar = styled.div`
  background-image: linear-gradient(
    -45deg,
    #060 0,
    #0c0 25%,
    #060 50%,
    #0c0 75%,
    #060 100%
  );
  background-size: 40px 40px;
  animation: ${key2} 1s linear infinite;
  box-sizing: border-box;
  height: 100%;
  width: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width ${({ time }) => time / 100}s;
`;
