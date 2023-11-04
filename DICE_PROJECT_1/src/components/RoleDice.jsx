import { useState } from "react"
import styled from "styled-components"


const RoleDice = () => {
  const [currentDice, setCurrentDice] = useState();

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max-min) + min))
    return Math.floor(Math.random() * (max-min) + min);
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
  }

  return (
    <DiceContainer>
      <div className="dice"
        onClick={roleDice}
      >
        <img src="/public/images/dice/dice_1.png" alt="dice 1" />
        <p>Click on Dice to roll</p>
      </div>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .dice{
      cursor: pointer;
    }

    p{
      font-size: 24px;
    }
`