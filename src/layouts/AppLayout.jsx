import React from 'react';
import { css, Global } from '@emotion/react';
import HeaderContainer from '@/components/HeaderContainer';
import MainContainer from '@/components/MainContainer';
import FooterContainer from '@/components/FooterContainer';
import DiceContextProvider from '@/store/DiceContext';

const AppLayout = ({ children, }) => {
  const LayoutStyle = css`
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
    
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #ff4242;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
      background-color: #33333350;
      border-radius: 5px;
    }
    
    * {
      padding: 0;
      margin: 0;
      font-family: 'Noto Sans KR', sans-serif;
    }
    
    a {
      text-decoration: none;
    }
    
    ul {
      list-style: none;
    }
    
    strong {
      font-weight: 900;
    }
    
    html, body, div#__next {
      height: 100%;
    }

    div#__next {
      display: flex;
      flex-direction: column;
      
      & > main {
        flex: 1;
        overflow-y: auto;
        padding: 0 20px;
      }
    }
  `;
  
  return (
    <>
      <Global styles={LayoutStyle} />
      <DiceContextProvider>
        <HeaderContainer />
        <MainContainer>
          {children}
        </MainContainer>
        <FooterContainer />
      </DiceContextProvider>
    </>
  );
};

export default AppLayout;