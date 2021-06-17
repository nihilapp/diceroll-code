import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { DiceContext } from '@/store/DiceContext';
import { v4 as uuid } from 'uuid';
import fontSize from '@/data/fontSize';

const DiceResult = () => {
  const { state, } = useContext(DiceContext);
  
  const style = css`
    & > .result-item {
      background-color: #eeeeee;
      margin: 20px 0;
      padding: 10px;
      border-radius: 0 10px 10px 0;
      transition: all 0.3s;
      border-left: 30px solid #aaaaaa;
      box-shadow: 0 0 5px -2px #000000;
      
      &:nth-of-type(1) {
        border-left: 30px solid #ff4242;
      }
      
      & > .message-box {
        font-weight: 900;
        color: #333333;
        transition: all 0.3s;
        
        & span.red {
          background-color: #ff4242;
          color: #ffffff;
          padding: 0 10px;
          border-radius: 5px;
          margin-right: 10px;
        }
      }

      @media (min-width: 1px) and (max-width: 600px) {
        & > .message-box {font-size: ${fontSize[3]};}
      }

      @media (min-width: 601px) and (max-width: 900px) {
        & > .message-box {font-size: ${fontSize[4]};}
      }

      @media (min-width: 901px) {
        & > .message-box {font-size: ${fontSize[5]};}
      }
    }
  `;
  
  return (
    <>
      <div id='dice-result' css={style}>
        {state.slice().reverse().map((resultList) => (
          <div key={uuid()} className='result-item'>
            <div className='message-box'>
              <p>{resultList.ErrorMessage}</p>
            </div>
            <div className='detail-box'>
              {resultList.dicedetails}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DiceResult;