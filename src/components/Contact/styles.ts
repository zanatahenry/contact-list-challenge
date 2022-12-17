import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 10px 0;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  &:last-child {
    border: none;
    margin-bottom: 0;
  }
`