import { useState, useEffect } from "react";
import { FullScreen } from "src/components/FullScreen";
import SEO from "src/seo";
import styled, { keyframes } from "styled-components";

const rainbow = keyframes`
  0%{ background-color: #ff0000; }
8.333%{ background-color: #ff8000; }
16.667%{ background-color: #ffff00; }
25.000%{ background-color: #80ff00; }
33.333%{ background-color: #00ff00; }
41.667%{ background-color: #00ff80; }
50.000%{ background-color: #00ffff; }
58.333%{ background-color: #0080ff; }
66.667%{ background-color: #0000ff; }
75.000%{ background-color: #8000ff; }
83.333%{ background-color: #ff00ff; }
91.667%{ background-color: #ff0080; }
100.00%{ background-color: #ff0000; }
`;

const Component = styled.div`
  animation: ${rainbow} 60s linear infinite;
  width: 100%;
  height: 100%;
  min-height: 600px;
`;

const Back = () => {
  const [meter, setMeter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setMeter((v) => (v + 1) % 361);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <SEO title="Kolorowe tło" />
      <h1>Kolorowe tło</h1>
      <FullScreen showInfo>
        <Component meter={meter} />
      </FullScreen>
    </>
  );
};

export default Back;
