import React from 'react';
import { css } from '@emotion/react';
import fontSize from '@/data/fontSize';

const Roll = ({ onclickRollDices, onclickRollRest, }) => {
  const style = css`
    display: flex;
    flex-direction: row;

    & > #roll-type {
      text-align-last: center;
      outline: none;
      transition: all 0.3s;
      padding: 5px 10px;
      background-color: #333333;
      color: #ffffff;
      border: none;
      cursor: pointer;
    }

    & > #roll-dice {
      outline: none;
      transition: all 0.3s;
      background-color: #333333;
      color: #ffffff;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }

    & > #roll-reset {
      outline: none;
      transition: all 0.3s;
      background-color: #333333;
      color: #ffffff;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > #roll-type,
      & > #roll-dice,
      & > #roll-reset {
        flex: 1;
        font-size: ${fontSize[2]};
      }

      & > #roll-type,
      & > #roll-dice {
        margin-right: 3px;
      }

      & > #roll-type {
        border-radius: 0 0 0 10px;
      }

      & > #roll-reset {
        border-radius: 0 0 10px 0;
      }
    }

    @media (min-width: 601px) and (max-width: 900px) {
      & > #roll-type,
      & > #roll-dice,
      & > #roll-reset {
        font-size: ${fontSize[3]};
      }

      & > #roll-type,
      & > #roll-dice {
        margin-right: 3px;
      }

      & > #roll-reset {
        border-radius: 0 10px 10px 0;
      }
    }

    @media (min-width: 901px) {
      & > #roll-type,
      & > #roll-dice,
      & > #roll-reset {
        font-size: ${fontSize[4]};
      }

      & > #roll-type,
      & > #roll-dice {
        margin-right: 3px;
      }

      & > #roll-reset {
        border-radius: 0 10px 10px 0;
      }
    }
  `;
  
  return (
    <>
      <div css={style}>
        <select name='roll-type' id={'roll-type'} defaultValue='normal'>
          <option value='normal'>랜덤</option>
          <option value='maximum'>최대값</option>
          <option value='minimum'>최소값</option>
        </select>
        <button id={'roll-dice'} onClick={onclickRollDices}>굴리기</button>
        <button id={'roll-reset'} onClick={onclickRollRest}>초기화</button>
      </div>
    </>
  );
};

export default Roll;