import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 5px 0;
  display: flex;
  align-items: center;
  padding: 10px 5px;
  
  cursor: pointer;
  border-radius: 8px;

  img {
    margin-right: 10px;
  }

  &:hover {
    transition: 250ms;
    background-color: rgba(55, 54, 57, 0.29);
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
`