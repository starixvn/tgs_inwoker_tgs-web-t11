import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { GameTypeEnum } from "../../../../api-services/utils/Enum";
import Common from "../../../../utils/Common";
import SlotGenerator from "../slot-generator";
import Winners from "./winners";
import moment from "moment";
import {
  jiliSlot,
  rtSlot,
  jdbSlot,
  jiliFish,
  jdbFish,
} from "../../../Wap/Main/Home/scene-1/template11/hardcode";
import { GameService } from "../../../../api-services/services/GameService";

const JackpotHolder = styled.div`
  height: 1135px;
  background: url(${process.env.PUBLIC_URL +
  "/assets/images/pcHomePage/jackpot.png"});
  background-size: 105%;
  background-position: center;

  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 0px;
`;

const JackpotContentWorkingSpace = styled.div`
  width: 1016px;
  height: 512px;
  position: relative;
  top: 365px;
  left: 90px;
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

const CurrencyHolder = styled.div`
  padding-top: 30px;
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
  padding: 0 5px 0 10px;
  text-align: center;
  font-size: 60px;
  ${({ hide }) => {
    return hide
      ? `
   font-size: 20px;
   width: 20px;
  
  `
      : ` background: #000;font-size: 50px;`;
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
  align-items: center;
  flex-direction: column;
`;

const JackpotGif = styled.img`
  width: 455px;
  position: absolute;
  left: 370px;
  top: 272px;
`;

const JackpotSection = ({ showLogin, token }) => {
  const Numbers = React.memo(({ amount }) => {
    var display = amount && amount.split("");

    return display.map((element) => {
      return (
        <TextContent>
          <TextHolder hide={element === "," || element === "."}>
            {element}
          </TextHolder>
        </TextContent>
      );
    });
  });

  const commonprops = {
    showLogin: showLogin,
    token: token,
  };

  const generateJackpotAmount = ({ min, max }) => {
    let date = new Date();
    let dayIndex = date.getDay() === 0 ? 6 : date.getDay() - 1;
    let maxPerDay = (max - min) / 7;
    let minWithDay = Math.floor(min + maxPerDay * dayIndex);
    let maxWithDay = Math.floor(max * ((dayIndex + 1) / 7));
    let amount = Math.floor(
      Math.random() * (maxWithDay - minWithDay + 1) + minWithDay
    );
    return Common.formatNumberWithCommas(amount);
  };

  const [jackpotAmount, setJackpotAmount] = useState(
    generateJackpotAmount({ min: 200000, max: 5000000 })
  );

  const [recommendedGames, setRecommendedGames] = useState({
    games: [
      {
        title: "JILITF.slots",
        list: jiliSlot,
        type: GameTypeEnum.SLOT,
        platform: "JILITF",
        gameList: [],
      },
      {
        title: "RTTF.slots",
        list: rtSlot,
        type: GameTypeEnum.SLOT,
        platform: "RTTF",
        gameList: [],
      },
      {
        title: "JDBTF.slots",
        list: jdbSlot,
        type: GameTypeEnum.SLOT,
        platform: "JDBTF",
        gameList: [],
      },

      {
        title: "JILITF.fish",
        list: jiliFish,
        type: GameTypeEnum.FISH,
        platform: "JILITF",
        gameList: [],
      },
      {
        title: "JDBTF.fish",
        list: jdbFish,
        type: GameTypeEnum.FISH,
        platform: "JDBTF",
        gameList: [],
      },
    ],
    isInitialized: false,
  });

  useEffect(() => {
    if (!recommendedGames.isInitialized) {
      getGameList();
    }
  });

  const getGameList = () => {
    var temp = recommendedGames;
    temp.games.map(async (game, index) => {
      GameService.GetGameList(game.platform, game.type).then((response) => {
        if (response.IsSuccess) {
          var data = response.data;
          game.list.map((item) => {
            var index = data.findIndex((item2) => item2.code === item.code);
            console.log(index);
            if (index >= 0 && data[index] !== null) {
              game.gameList.push(data[index]);
              game.gameList.filter((item, index) => {
                return game.gameList.indexOf(item) === index;
              });
            }
            return null;
          });
        }
      });
      return null;
    });
    temp.isInitialized = true;
    setRecommendedGames(temp);
    console.log(temp)
  };

  return (
    <div>
      <JackpotHolder>
        <JackpotGif
          src={
            process.env.PUBLIC_URL + "/assets/images/wapp/home/T11/jackpot.gif"
          }
        />
        <JackpotContentWorkingSpace>
          <TopContent>
            <CurrencyHolder>₱</CurrencyHolder>{" "}
            <Numbers amount={jackpotAmount} />
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
        {recommendedGames.games.map((data, index) => {
          return (
            <SlotGenerator
              title={data.title}
              platform={data.platform}
              type={data.type}
              list={data.gameList}
              commonprops={commonprops}
            />
          );
        })}
      </SlotContainer>
    </div>
  );
};

export default JackpotSection;
