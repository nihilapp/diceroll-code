import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface Props {
  modType: ('penaltyMod' | 'bonusMod');
  value: (number | string);
}

export const ModItem = ({ modType, value, }: Props) => {
  const mod = {
    penaltyMod: '#a80000',
    bonusMod: '#147500',
  };

  const ModItemStyle = css`
    background-color: ${mod[modType]};
    margin-right: 5px;
    line-height: 1;
    margin-top: 2px;
    margin-bottom: 2px;
    display: inline-block;
    color: #ffffff;
    border-radius: 5px;
    padding: 5px 10px;
    letter-spacing: -1px;

    @media all and (min-width: 1024px) {
      font-size: ${sizeData[3]};
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: ${sizeData[3]};
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: ${sizeData[2]};
    }

    @media all and (max-width: 479px) {
      font-size: ${sizeData[2]};
    }
  `;

  return (
    <>
      <span css={ModItemStyle} className='mod-item'>{value}</span>
    </>
  );
};
