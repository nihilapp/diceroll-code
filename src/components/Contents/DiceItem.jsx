import React from 'react';
import { css } from '@emotion/react';
import fontSize from '@/data/fontSize';

const DiceItem = ({ roll, color, }) => {
  const colorType = {
    'critical': '#1e8609',
    'fumble': '#a80000',
    'normal': '#333333',
  };
  
  const style = css`
    margin-right: 5px;
    background-color: ${colorType[color]};
    color: #ffffff;
    display: inline-block;
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 2px 10px;
    border-radius: 5px;
    transition: all 0.3s;

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${fontSize[2]};
    }

    @media (min-width: 601px) and (max-width: 900px) {
      font-size: ${fontSize[3]};
    }

    @media (min-width: 901px) {
      font-size: ${fontSize[3]};
    }
  `;
  
  return (
    <>
      <span css={style} className={'dice-item'}>{roll}</span>
    </>
  );
};

export default DiceItem;