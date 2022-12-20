import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ToHome = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid rgba(55,54,57,0.3);

  padding-left: 10px;

  display: flex;
  align-items: center;
`

export const GoBackButton = styled.span`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px;

  &:hover {
    background-color: rgba(55,54,57,0.29);

  }

  & svg {
    fill: white;
    width: 25px !important;
    height: 25px !important;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`