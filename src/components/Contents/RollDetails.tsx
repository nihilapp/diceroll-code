import React from 'react';
import { css } from '@emotion/react';
import { FaDiceD20 } from 'react-icons/fa';
import { sizeData } from '@/data';

interface Props {
  total: number;
  value: string;
  detailItemArray: React.ReactElement[];
  modSpanArray: React.ReactElement[];
}

export const RollDetails = ({
  total, value, detailItemArray, modSpanArray,
}: Props) => {
  const RollDetailsStyle = css`
    margin: 20px 0;
    background-color: #eeeeee;
    padding: 10px;
    border: 2px solid #33333330;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;

    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    & > .roll-total {
      font-weight: 900;
      color: #333333;
      margin-bottom: 20px;
      letter-spacing: -1px;

      & > span {
        color: #ffffff;
        border-radius: 10px;
        padding: 0 10px;
        background-color: #333333;
        display: inline-block;
      }
    }

    & > .dice-label {
      font-weight: 900;
      color: #333333;
      margin-bottom: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      line-height: 1;
      letter-spacing: -1px;

      & > svg {
        margin-right: 5px;
      }
    }

    & > .detail-box {
      & > .mod-details-box {
        padding: 5px;
        border-radius: 5px;
        background-color: #ffffff;
        border: 2px solid #33333350;
        margin-top: 10px;
      }
    }

    @media all and (min-width: 1024px) {
      & > .roll-total,
      & > .dice-label {
        font-size: ${sizeData[6]};
      }
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      & > .roll-total,
      & > .dice-label {
        font-size: ${sizeData[6]};
      }
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      & > .roll-total,
      & > .dice-label {
        font-size: ${sizeData[5]};
      }
    }

    @media all and (max-width: 479px) {
      & > .roll-total,
      & > .dice-label {
        font-size: ${sizeData[5]};
      }
    }
  `;

  return (
    <>
      <div className='roll-detail' css={RollDetailsStyle}>
        <p className='dice-label'><FaDiceD20 />{value}</p>
        <h3 className='roll-total'>총합: <span>{total}</span></h3>
        <div className='detail-box'>
          <div className='dice-details-box'>
            {detailItemArray.map((item) => item)}
          </div>
          {modSpanArray.length !== 0
            ? (
              <p className='mod-details-box'>
                {modSpanArray.map((item) => item)}
              </p>
            )
            : ''}
        </div>
      </div>
    </>
  );
};
