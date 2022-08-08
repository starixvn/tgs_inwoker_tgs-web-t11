import React from "react";
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
`;
const Winners = React.memo(({ title, data }) => {
  var fakeData = [
    { player: "player1", game: "game1", wins: "1111" },
    { player: "player2", game: "game2", wins: "2222" },
    { player: "player3", game: "game3", wins: "3333" },
    { player: "player4", game: "game4", wins: "4444" },
    { player: "player5", game: "game5", wins: "5555" },
  ];
  var displayData = data ? data : fakeData;
  return (
    <ContentHolder>
      <Title>{title}</Title>
      <WinnerList>
        <TableHeader>
          <div>Player</div> <div>Game</div> <div>Wins</div>
        </TableHeader>
        {displayData.map((data, index) => {
          return (
            <TableData key={index}>
              <div>{data.player}</div>
              <div>{data.game}</div>
              <div>{Common.addComma(data.wins)}</div>
            </TableData>
          );
        })}
      </WinnerList>
    </ContentHolder>
  );
});

export default Winners;
