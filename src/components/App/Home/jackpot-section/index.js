import React from "react";
import { Textfit } from "react-textfit";
import styled from "styled-components";
import Common from "../../../../utils/Common";
import SlotGenerator from "../slot-generator";
import Winners from "./winners";

const JackpotHolder = styled.div`
  height: 800px;
  background: url(${process.env.PUBLIC_URL +
  "/assets/images/pcHomePage/jackpot.png"});
  background-size: contain;
  background-position: center;
  background-position-x: 285px;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 50px;
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
  grid-template-rows: 215px 1fr;
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
  top: 75px;
  font-size: 75px;
  align-items: center;
  letter-spacing: 14px;
  gap: 4px;
`;

const BottomLeftcontent = styled.div`
  grid-area: bottomLeft;
  padding: 10px 10px 10px 150px;
`;

const BottomRightContent = styled.div`
  grid-area: bottomRight;
  padding: 10px 150px 10px 10px;
`;

const TextHolder = styled.div`
  border-radius: 8px;
  padding: 0 10px;
  text-align: center;
  font-size: 60px;
  ${({ hide }) => {
    return hide
      ? `
   font-size: 30px;
   width: 20px;
  `
      : ` background: #000;`;
  }}
`;

const TextContent = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;

const SlotContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const JackpotSection = () => {
  const Numbers = React.memo(({ amount }) => {
    var display = amount && amount.split("");
    return display.map((element) => {
      return (
        <TextContent>
          <TextHolder hide={element === ","}>{element}</TextHolder>
        </TextContent>
      );
    });
  });

  return (
    <div>
      <JackpotHolder>
        <JackpotContentWorkingSpace>
          <TopContent>
            ₱ <Numbers amount={Common.addComma(123456789)} />
          </TopContent>
          <BottomLeftcontent>
            <Winners title="Slots Winners" />
          </BottomLeftcontent>
          <BottomRightContent>
            <Winners title="Latest Winners" />
          </BottomRightContent>
        </JackpotContentWorkingSpace>
      </JackpotHolder>
      <SlotContainer>
        <SlotGenerator title={"JILI SLOTS"} />
      </SlotContainer>
    </div>
  );
};

export default JackpotSection;
