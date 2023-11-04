import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import { useState } from "react"

const GamePlay = () => {
  const [selectedNumber, setSelecetedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector selectedNumber={selectedNumber}
        setSelecetedNumber={setSelecetedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice}
        setCurrentDice={setCurrentDice}
      />
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    padding: 70px;

    .top_section{
      display: flex;
      justify-content: space-around;
      align-items: end;
    }
`;