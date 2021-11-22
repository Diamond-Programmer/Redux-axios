import styled from "styled-components";

export const Card = styled.div`
  text-align: center;
  width: 30%;
  padding: 15px;
  border: 3px solid red;
  margin: 20px 0;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  color: white;
  transition: all .5s ease-in-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.050);
    border-radius: 10px;
    background: linear-gradient(to right, #00b09b, #96c93d);

    button{
    &:hover{
      border-radius: 5px;
      transform: scale(0.90);
    }
  }
  }

  button{
    color: red;
    background: black;
    border: 0;
    padding: 10px 15px;
    margin: 10px auto ;
    transition: all .5s ease-in-out;
    cursor: pointer;}

`;
