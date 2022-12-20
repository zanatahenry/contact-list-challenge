import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  padding-left: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & p {
    margin-bottom: 10px;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  margin-top: 5px;
  gap: 30px;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`

export const Recents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 5px;
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgba(55, 54, 57, 0.29);
  }
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`