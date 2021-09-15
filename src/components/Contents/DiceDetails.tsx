import React from 'react';
import { css } from '@emotion/react';
import fontSize from '@/data/fontSize';

interface Props {
  dice: string;
  diceItemBox: React.ReactElement[];
  total: number;
}

const DiceDetails = ({ dice, diceItemBox, total, }: Props) => {
  const style = css`
    margin: 4px 0;
    padding: 5px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 2px solid #33333350;
    transition: all 0.3s;

    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    & > .dice-label {
      transition: all 0.3s;
      padding: 2px 10px;
      background-color: #555555;
      color: #ffffff;
      border-radius: 5px 0 0 5px;
      font-weight: 900;

      &:before {
        content: '\\f6cf';
        font-family: 'Font Awesome 5 Free', sans-serif;
        font-weight: 900;
        margin-right: 5px;
      }
    }

    & > .dice-total {
      transition: all 0.3s;
      padding: 2px 10px;
      margin-right: 5px;
      background-color: #333333;
      color: #ffffff;
      border-radius: 0 5px 5px 0;
      font-weight: 900;

      &:before {
        content: '\\f0a9';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
      }
    }

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
      <p className='box-item' css={style}>
        <span className='dice-label'>{dice}</span>
        <span className='dice-total'>{total}</span>
        {diceItemBox}
      </p>
    </>
  );
};

export default DiceDetails;
