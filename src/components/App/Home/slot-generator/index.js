import React from "react";
import styled from "styled-components";

const SlotContent = styled.div`
  width: 1280px;
`;

const TitleHolder = styled.div`
  padding: 5px 20px;
  border-radius: 10px;
  width: 100%;
  color: white;
  background: rgb(217, 38, 100);
  background: linear-gradient(
    153deg,
    rgba(217, 38, 100, 1) 25%,
    rgba(20, 26, 29, 1) 78%
  );

  font-size: 30px;
  font-weight: bold;
`;

const SlotGenerator = React.memo(({ title, games }) => {
  return (
    <SlotContent>
      <TitleHolder>{title}</TitleHolder>
      <div>{games && games}</div>
    </SlotContent>
  );
});

export default SlotGenerator;
