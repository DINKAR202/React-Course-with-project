import styled from "styled-components"
import '../App.css';

const StartGame = () => {
  return (
    <Container>
        <img src="../../public/images/dice.jpg" alt="Dice img" />

        <div>
            <h1>Dice Game</h1>
            <Button>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.img`
    max-width: 180px;
    display: flex;
    margin: 0 auto;
`

const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
`