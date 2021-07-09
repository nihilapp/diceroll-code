import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { DiceContext } from '@/store/DiceContext';
import { v4 as uuid } from 'uuid';
import fontSize from '@/data/fontSize';

const DiceResult = () => {
  const { state, } = useContext(DiceContext);
  
  const style = css`
    & > .result-item {
      display: flex;
      flex-direction: row;
      margin: 30px 0;

      &:before {
        content: '\\f061';
        background-color: #999999;
        border-radius: 40px;
        margin-right: 20px;
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        display: flex;
        align-items: center;
        padding: 10px;
        color: #ffffff;
      }

      &:nth-of-type(1) {
        margin-top: 20px;

        &:before {
          background-color: #333333;
        }
      }

      &:nth-last-of-type(1) {
        margin-bottom: 0;
      }

      & > .item-body {
        padding: 10px 0;
        transition: all 0.3s;
        flex: 1;

        &:nth-of-type(1) {

        }

        & > .message-box {
          font-weight: 900;
          color: #333333;
          transition: all 0.3s;
          background-color: #eeeeee;
          padding: 10px;
          border: 2px solid #33333330;
          border-radius: 10px;

          & span {
            &.red {
              background-color: #ce1c1c;
              color: #ffffff;
              padding: 0 10px;
              border-radius: 5px;
              margin-right: 10px;
              font-size: 90%;
            }

            &.blue {
              background-color: #5d88f9;
              color: #ffffff;
              border-radius: 5px;
              font-size: 90%;
              padding: 0 10px;
            }
          }
        }
      }

      @media (min-width: 1px) and (max-width: 600px) {
        & .message-box {
          font-size: ${ fontSize[5] };
        }

        &:before {
          font-size: ${ fontSize[7] };
        }
      }

      @media (min-width: 601px) and (max-width: 900px) {
        & .message-box {
          font-size: ${ fontSize[6] };
        }

        &:before {
          font-size: ${ fontSize[7] };
        }
      }

      @media (min-width: 901px) {
        & .message-box {
          font-size: ${ fontSize[6] };
        }

        &:before {
          font-size: ${ fontSize[7] };
        }
      }
    }
  `;
  
  return (
    <>
      <div id='dice-result' css={style}>
        {state.slice().reverse().map((resultList) => (
          <div key={uuid()} className='result-item'>
            <div className={'item-body'}>
              {resultList.ErrorMessage && (
                <div className='message-box'>
                  <p>{resultList.ErrorMessage}</p>
                </div>
              )}
              <div className='detail-box'>
                {resultList.dicedetails}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DiceResult;