import styled from "styled-components";

export const ContactList = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  
  overflow: auto;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #646060;
  }
`