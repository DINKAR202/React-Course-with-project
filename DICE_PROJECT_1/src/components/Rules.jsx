import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on dice if selected number is equal to dice number you will got same point as dice{""}</p>
            </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContanier = styled.div`

`;