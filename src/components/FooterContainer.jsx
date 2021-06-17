import React from 'react';
import { css } from '@emotion/react';
import Config from '@/data/site.config';
import fontSize from '@/data/fontSize';

const FooterContainer = () => {
  const style = css`
    margin-top: 20px;
    user-select: none;
    
    & > p {
      padding: 10px;
      text-align: center;
      background-color: #333333;
      border-radius: 20px 20px 0 0;
      box-shadow: 0 0 10px -4px #333333;
      color: #ffffff;
      transition: all 0.3s;

      &:before {
        content: '\\f1f9';
        margin-right: 5px;
        font-weight: 500;
        font-family: 'Font Awesome 5 Free', sans-serif;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      p {font-size: ${fontSize[1]};}
    }

    @media (min-width: 601px) and (max-width: 900px) {
      p {font-size: ${fontSize[2]};}
    }

    @media (min-width: 901px) {
      p {font-size: ${fontSize[3]};}
    }
  `;
  
  return (
    <>
      <footer css={style}>
        <p>{Config.year}. {Config.nickname}.</p>
      </footer>
    </>
  );
};

export default FooterContainer;