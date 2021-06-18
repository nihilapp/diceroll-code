import React from 'react';
import { css } from '@emotion/react';
import fontSize from '@/data/fontSize';

const RollDetails = ({ total, value, detailItemArray, modSpanArray, }) => {
  const style = css`
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
      transition: all 0.3s;
      margin-bottom: 20px;
      
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
      margin-bottom: 10px;
      transition: all 0.3s;
      
      &:before {
        content: '\\f6cf';
        font-family: 'Font Awesome 5 Free', sans-serif;
        font-weight: 900;
        margin-right: 10px;
      }
    }
    
    & > .detail-box {
      & > .dice-details-box {}
      
      & > .mod-details-box {
        padding: 5px;
        border-radius: 5px;
        background-color: #ffffff;
        border: 2px solid #33333350;
        margin-top: 10px;
      }
    }
    
    @media (min-width: 1px) and (max-width: 600px) {
      & > .roll-total,
      & > .dice-label {font-size: ${fontSize[5]};}
    }
    
    @media (min-width: 601px) and (max-width: 900px) {
      & > .roll-total,
      & > .dice-label {font-size: ${fontSize[6]};}
    }
    
    @media (min-width: 901px) {
      & > .roll-total,
      & > .dice-label {font-size: ${fontSize[6]};}
    }
  `;
  
  return (
    <>
      <div className='roll-detail' css={style}>
        <p className='dice-label'>{value}</p>
        <h3 className='roll-total'>총합: <span>{total}</span></h3>
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