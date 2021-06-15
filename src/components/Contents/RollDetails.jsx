import React from 'react';
import { css } from '@emotion/react';
import fontSize from '@/data/fontSize';

const RollDetails = ({ total, value, detailItemArray, modSpanArray, }) => {
  const style = css`
    margin: 40px 0;
    
    &:nth-of-type(1) {
      margin-top: 0;
    }
    
    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    & > .roll-total {
      font-weight: 900;
      color: #ffffff;
      border-radius: 10px;
      padding: 0 10px;
      background-color: #333333;
      display: inline-block;
      margin-bottom: 10px;
      transition: all 0.3s;
    }
    
    & > .dice-label {
      font-weight: 900;
      color: #333333;
      margin-bottom: 10px;
      transition: all 0.3s;
      
      &:before {
        content: "\\f6cf";
        font-family: 'Font Awesome 5 Free', sans-serif;
        font-weight: 900;
        margin-right: 5px;
      }
    }
    
    & > .detail-box {
      & > .dice-details-box {
        margin-bottom: 10px;
      }
      
      & > .mod-details-box {
        padding: 5px;
        border-radius: 5px;
        background-color: #dddddd;
        border: 2px solid #33333330;
      }
    }
    
    @media (min-width: 1px) and (max-width: 600px) {
      & > .roll-total {font-size: ${fontSize[6]};}
      & > .dice-label {font-size: ${fontSize[3]};}
    }
    
    @media (min-width: 601px) and (max-width: 900px) {
      & > .roll-total {font-size: ${fontSize[7]};}
      & > .dice-label {font-size: ${fontSize[4]};}
    }
    
    @media (min-width: 901px) {
      & > .roll-total {font-size: ${fontSize[7]};}
      & > .dice-label {font-size: ${fontSize[4]};}
    }
  `;
  
  return (
    <>
      <div className='roll-detail' css={style}>
        <h3 className='roll-total'>{total}</h3>
        <p className='dice-label'>{value}</p>
        <div className='detail-box'>
          <div className='dice-details-box'>
            {detailItemArray.map(item => (
              item
            ))}
          </div>
          {modSpanArray.length !== 0
            ? (
              <p className='mod-details-box'>
                {modSpanArray.map(item => {
                  return item;
                })}
              </p>
            )
            : ''
          }
        </div>
      </div>
    </>
  );
};

export default RollDetails;