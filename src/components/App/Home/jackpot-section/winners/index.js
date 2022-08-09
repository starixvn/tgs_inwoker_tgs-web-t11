import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Common from "../../../../../utils/Common";

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  color: #fff;
`;

const WinnerList = styled.div`
  border-radius: 20px;
  min-height: 200px;
  padding: 10px 20px;
  background: rgb(57, 54, 54);
  background: linear-gradient(
    0deg,
    rgba(36, 33, 33, 1) 10%,
    rgba(57, 54, 54, 1) 100%
  );
`;

const TableLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  padding: 3px;
`;

const TableHeader = styled(TableLayout)`
  color: ${({ theme }) => {
    return theme.accent;
  }};
  font-weight: bold;
`;

const TableData = styled(TableLayout)`
  border-top: solid 1.25px #fff;
  font-size: 14px;
  color: #fff;

  div {
    white-space: nowrap;
  }
`;
const Winners = React.memo(({ title }) => {
  const playerName = [
    "kin9123***",
    "morisp***",
    "erikfan1***",
    "ritam712***",
    "perriw00***",
    "victorb63***",
    "heryam20***",
    "trwass7***",
    "aajac***",
    "winne19***",
    "k125923***",
    "garysin***",
    "lksj9482***",
    "kwashd7***",
    "lwda***",
    "gwsk12***",
    "946301***",
    "abc7***",
    "mrhr112***",
    "t2943***",
    "smi***",
    "luckybo***",
    "873251***",
    "hh3888***",
    "ttwisn***",
    "vipvi***",
    "cha19***",
    "113847***",
    "tami36***",
    "zzz90***",
    "mus12***",
    "c099***",
    "juicec***",
    "peta5***",
    "onk***",
    "monn0***",
    "pulli52***",
    "matkal***",
    "siumi***",
    "god6***",
    "sk***",
    "asdje2***",
    "ron707***",
    "5013d***",
    "bus01***",
    "fun011***",
    "fivivv***",
    "oopw3***",
    "927364***",
  ];

  const gameName = [
    "Super Ace",
    "Golden Empire",
    "Fortune Gems",
    "Masquerade",
    "10001 Nights",
    "Aztec Spins",
    "Mega Fishing",
    "Jackpot Fishing",
    "Dinosaur Tycoon",
    "TrumpCard",
    "MayaGoldCrazy",
    "TreasureBowl",
  ];

  function randomize(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const FakeDataDisplayer = () => {
    var min = 1000;
    var max = 20000;
    const [name, setName] = useState(randomize(playerName));
    const [game, setGame] = useState(randomize(gameName));
    const [amount, setAmount] = useState(
      Common.addComma(randomNumber(min, max))
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setName(randomize(playerName));
        setGame(randomize(gameName));
        setAmount(Common.addComma(randomNumber(min, max)));
      }, 10000);
      return () => {
        clearInterval(interval);
      };
    }, []);
    return (
      <TableData>
        <div>{name}</div>
        <div>{game}</div>
        <div>{amount}</div>
      </TableData>
    );
  };
  return (
    <ContentHolder>
      <Title>{title}</Title>
      <WinnerList>
        <TableHeader>
          <div>Player</div> <div>Game</div> <div>Wins</div>
        </TableHeader>
        <FakeDataDisplayer />
        <FakeDataDisplayer />
        <FakeDataDisplayer />
        <FakeDataDisplayer />
        <FakeDataDisplayer />
      </WinnerList>
    </ContentHolder>
  );
});

export default Winners;
