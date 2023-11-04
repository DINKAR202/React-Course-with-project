import { useState } from "react";
import styled from "styled-components"

const NumberSelector = () => {
    const arrNumber = [1,2,3,4,5,6];
    const [selectedNumber, setSelecetedNumber] = useState()




  return (
    <div>
        {
            arrNumber.map((value, i) => (
                <Box
                isSelecetd = {value === selectedNumber}
                key={i}
                onClick={() => setSelecetedNumber(value)}
                >{value}</Box>
            ))
        }
        {/* <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box> */}
    </div>   
  )
}

export default NumberSelector

const Box = styled.div`
    height: 52px;
    width: 52px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-weight: 700;
`