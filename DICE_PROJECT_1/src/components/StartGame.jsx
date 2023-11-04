import styled from "styled-components"
import Dice from '../../public/images/dice-.png'
import '../App.css';

const StartGame = () => {
  return (
    <Container>
        <div>
            <img className="Dice-img" src={Dice} alt="Dice img" />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`

const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.5s ease-in;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
    }
`