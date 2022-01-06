import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface Props {
  roll: number;
  color: string;
}

export const DiceItem = ({ roll, color, }: Props) => {
  const colorType = {
    critical: '#1e8609',
    fumble: '#a80000',
    normal: '#333333',
  };

  const DiceItemStyle = css`
    margin-right: 5px;
    background-color: ${colorType[color]};
    color: #ffffff;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 5px 10px;
    line-height: 1;
    border-radius: 5px;
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
      font-size: ${sizeData[3]};
    }
  `;

  return (
    <>
      <span css={DiceItemStyle} className='dice-item'>{roll}</span>
    </>
  );
};
