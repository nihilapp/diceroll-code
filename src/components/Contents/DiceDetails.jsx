import React from 'react';
import { css } from '@emotion/react';
import fontSize from '@/data/fontSize';

const DiceDetails = ({ dice, diceItemBox, }) => {
  const style = css`
    padding: 5px;
    border-radius: 5px;
    background-color: #dddddd;
    border: 2px solid #33333330;
    margin: 4px 0;
    
    & > .dice-name {
      border-radius: 5px;
      padding: 2px 10px;
      font-weight: 500;
      color: #ffffff;
      background-color: #555555;
      display: inline-block;
      margin-right: 5px;
      
      &:after {
        content: '\\f138';
        font-family: 'Font Awesome 5 Free', sans-serif;
        font-weight: 900;
        margin-left: 5px;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > .dice-name {font-size: ${fontSize[2]};}
    }

    @media (min-width: 601px) and (max-width: 900px) {
      & > .dice-name {font-size: ${fontSize[3]};}
    }

    @media (min-width: 901px) {
      & > .dice-name {font-size: ${fontSize[3]};}
    }
  `;
  
  return (
    <>
      <p className='box-item' css={style}>
        <span className='dice-name'>
          {dice}
        </span>
        {diceItemBox}
      </p>
    </>
  );
};

export default DiceDetails;