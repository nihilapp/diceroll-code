import React from 'react';
import { css } from '@emotion/react';
import { FaDiceD20, FaArrowCircleRight } from 'react-icons/fa';
import { sizeData } from '@/data';

interface Props {
  dice: string;
  diceItemBox: React.ReactElement[];
  total: number;
}

export const DiceDetails = ({ dice, diceItemBox, total, }: Props) => {
  const DiceDetailsStyle = css`
    margin: 4px 0;
    padding: 5px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 2px solid #33333350;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    & > .dice-label,
    & > .dice-total{
      padding: 5px 10px;
      color: #ffffff;
      font-weight: 900;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      line-height: 1;
      margin-top: 2px;
      margin-bottom: 2px;
      letter-spacing: -1px;

      & > svg {
        margin-right: 5px;
      }
    }

    & > .dice-label {
      border-radius: 5px 0 0 5px;
      background-color: #555555;
    }

    & > .dice-total {
      border-radius: 0 5px 5px 0;
      margin-right: 5px;
      background-color: #333333;
    }

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
      <p className='box-item' css={DiceDetailsStyle}>
        <span className='dice-label'><FaDiceD20 />{dice}</span>
        <span className='dice-total'><FaArrowCircleRight />{total}</span>
        {diceItemBox}
      </p>
    </>
  );
};
