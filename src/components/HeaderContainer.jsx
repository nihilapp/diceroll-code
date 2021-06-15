import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import Config from '@/data/site.config';
import fontSize from '@/data/fontSize';

const HeaderContainer = () => {
  const headerStyle = css`
    margin-bottom: 20px;
    
    & > div {
      background-color: #333333;
      border-radius: 0 0 20px 20px;
      transition: all 0.3s;
      box-shadow: 0 0 10px -4px #333333;

      & > h1 {
        color: #ffffff;
        margin-right: 10px;
        margin-left: 10px;
        transition: all 0.3s;
        font-weight: 900;
      }

      & > nav {
        width: 100%;
        box-sizing: border-box;

        & > a {
          color: #dddddd;
          padding: 20px 10px;
          display: inline-block;
          transition: all 0.3s;
          font-weight: 500;
          box-sizing: border-box;
          
          &:nth-of-type(1):before {
            content: '\\f015';
            font-family: 'Font Awesome 5 Free', sans-serif;
            font-weight: 900;
            margin-right: 5px;
          }
          
          &:nth-of-type(2):before,
          &:nth-of-type(3):before {
            content: '\\f6cf';
            font-family: 'Font Awesome 5 Free', sans-serif;
            font-weight: 900;
            margin-right: 5px;
          }

          &:nth-last-of-type(1) {
            border-radius: 0 0 20px 0;
          }

          &:hover {
            background-color: #ff4242;
            color: #ffffff;
            transition: all 0.3s;
          }
        }
      }
    }
    
    @media (min-width: 1px) and (max-width: 600px) {
      a {font-size: ${fontSize[2]};}
      & > div {
        padding-top: 10px;
        
        & > h1 {
          text-align: center;
        }
        
        & > nav {
          margin-top: 10px;
          border-top: 2px dotted #88888850;
          
          & > a {
            width: 33.33%;
            text-align: center;

            &:nth-of-type(1) {
              border-radius: 0 0 0 20px;
            }
          }
        }
      }
    }
    
    @media (min-width: 601px) and (max-width: 900px) {
      a {font-size: ${fontSize[2]};}
      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;

        & > nav {
          flex: 1;
          text-align: right;
        }
      }
    }
    
    @media (min-width: 901px) {
      a {font-size: ${fontSize[3]};}
      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        & > nav {
          flex: 1;
          text-align: right;
        }
      }
    }
  `;
  
  return (
    <>
      <header css={headerStyle}>
        <div>
          <h1>DiceRoll v{Config.version}</h1>
          <nav>
            <Link href={'/'}><a>홈</a></Link>
            <Link href={'/preset'}><a>주사위 프리셋</a></Link>
            <Link href={'/custom'}><a>커스텀 주사위</a></Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderContainer;