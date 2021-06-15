import React from 'react';
import { css } from '@emotion/react';
import fontSize from '@/data/fontSize';

const ModItem = ({ modType, value, }) => {
  const mod = {
    'penaltyMod': '#a80000',
    'bonusMod': '#147500',
  };
  
  const style = css`
    background-color: ${mod[modType]};
    margin-right: 5px;
    margin-top: 2px;
    margin-bottom: 1px;
    display: inline-block;
    color: #ffffff;
    border-radius: 5px;
    padding: 2px 10px;
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
      <span css={style} className={'mod-item'}>{value}</span>
    </>
  );
};

export default ModItem;