import styled from "styled-components";
import { themeDefault } from '../../utils/colors'

export const MainSection = styled.section ` 
  width: 100vw;
  height: 100vh;
  background-color: #252323;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContactsContainer = styled.div`
  width: 650px;
  height: 600px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: rgba(55, 54, 57, 0.29);
  backdrop-filter: blur(1.6px);
  -webkit-backdrop-filter: blur(1.6px);
  border: 1px solid rgba(55, 54, 57, 0.3);
`