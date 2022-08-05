import React from "react";
import styled from "styled-components";

const JackpotHolder = styled.div`
  height: 800px;
  background: url(${process.env.PUBLIC_URL +
  "/assets/images/pcHomePage/jackpot.png"});
  background-size: contain;
  background-position: center;
  background-position-x: 285px;
  background-repeat: no-repeat;
  position: relative;
`;

const JackpotContentWorkingSpace = styled.div`
  width: 1016px;
  height: 512px;
  position: relative;
  top: 214px;
  left: 443px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
  "topContent topContent"
  "bottomLeft bottomRight"; 
}
`;

const TopContent = styled.div`
  grid-area: topContent;
  position: absolute;
  color: white;
  display: flex;
  height: 111px;
  width: 664px;
  right: 130px;
  top: 91px;
  font-size: 75px;
  align-items: center;
  align-items: center;
  letter-spacing: 14px;
`;

const BottomLeftcontent = styled.div`
  grid-area: bottomLeft;
  background: green;
`;

const BottomRightContent = styled.div`
  grid-area: bottomRight;
  background: blue;
`;

const JackpotSection = () => {
  return (
    <div>
      <JackpotHolder>
        <JackpotContentWorkingSpace>
          <TopContent>1,111,111,111</TopContent>
          <BottomLeftcontent>2</BottomLeftcontent>
          <BottomRightContent>3</BottomRightContent>
        </JackpotContentWorkingSpace>
      </JackpotHolder>
    </div>
  );
};

export default JackpotSection;
