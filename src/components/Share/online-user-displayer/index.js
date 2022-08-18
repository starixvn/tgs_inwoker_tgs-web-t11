import i18next from "i18next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const OnlineDisplayerText = styled.div`
  color: ${({ color, theme }) => {
    return color ? color : theme.secondary;
  }};
  font-size ${({ size }) => {
    return size ? size : "";
  }};
  text-align: ${({ textAlign }) => {
    return textAlign ? textAlign : "unset";
  }};
  min-width: 125px;
  padding-right: 10px;
`;

const OnlineUserText = styled.span`
  font-weight: bold;
`;

const OnlineUserDisplayer = ({ color, size, textAlign }) => {
  function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var userRange = randomNumberGenerator(26500, 27500);

  const [totalPlayer, setTotalPlayer] = useState(userRange);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalPlayer(userRange);
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <OnlineDisplayerText color={color} size={size} textAlign={textAlign}>
      {i18next.t("common.playeronline")}:{" "}
      <OnlineUserText>{totalPlayer}</OnlineUserText>
    </OnlineDisplayerText>
  );
};

export default OnlineUserDisplayer;
