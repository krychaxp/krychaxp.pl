import React, { useEffect, useState } from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FiPlusSquare, FiMail } from "react-icons/fi";
import { author, utm } from "config";
import styled from "styled-components";

const { contacts, activeEmail } = author;
const { facebook, github, linkedin } = contacts;

const icons = [
  ["Facebook", facebook, <FaFacebookSquare />],
  ["Github", github, <AiOutlineGithub />],
  ["Linkedin", linkedin, <AiFillLinkedin />],
];

const IconsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
`;

const IconConatiner = styled.a`
  font-size: 40px;
  color: #fff;
  padding: 10px 10px 0 10px;
  margin: 5px 10px;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border-radius: 5px;
  &::after {
    content: "";
    position: absolute;
    top: -130%;
    left: 130%;
    width: 200%;
    height: 200%;
    transform: rotate(45deg);
    transition: left 0.3s, top 0.3s;
    background-color: rgba(255, 255, 255, 0.4);
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 5%;
    left: 50%;
    width: 80%;
    height: 2px;
    transform: translateX(-50%);
    background-color: #fff;
  }
  &:hover {
    &::after {
      left: -50%;
      top: -70%;
    }
  }
`;

const Icons = () => {
  const [event, setEvent] = useState();
  const handleInstallApp = () => {
    event.prompt();
    event.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("Użytkownik zainstalował aplikacje");
      }
      setEvent(null);
    });
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", function (e) {
      e.preventDefault();
      setEvent(e);
    });
  }, []);

  const handleEmail = (e) => {
    e.target.href = `mailto:${activeEmail}`;
  };

  return (
    <IconsBox>
      {icons.map(([title, href, icon]) => (
        <IconConatiner
          key={title}
          href={href + utm}
          target="_blank"
          rel="noreferrer noopener"
          title={title + " Krychaxp"}
        >
          {icon}
        </IconConatiner>
      ))}
      <IconConatiner href="#send-email" onClick={handleEmail} title="Email">
        <FiMail />
      </IconConatiner>
      {event && (
        <IconConatiner
          href="#intall-app"
          onClick={handleInstallApp}
          title="Dodaj aplikacje"
        >
          <FiPlusSquare />
        </IconConatiner>
      )}
    </IconsBox>
  );
};
export default Icons;
