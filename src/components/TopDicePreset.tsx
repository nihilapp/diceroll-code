import React, { useCallback, useRef } from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { sizeData, dicesData } from '@/data';

import { RollDice, ResetForm } from '@/reducers/DiceReducer';
import { AppDispatch } from '@/types';
import { Roll } from './Contents';

export const TopDicePreset = () => {
  const dicePreset = useRef(null);

  const dispatch = useDispatch<AppDispatch>();

  const TopDicePresetStyle = css`
    padding: 10px;
    background-color: #666666;
    border-radius: 10px;
    margin-bottom: 20px;

    & > #preset-list {
      text-align-last: center;
      outline: none;
      width: 100%;
      background-color: #333333;
      color: #ffffff;
      padding: 5px 10px;
      box-sizing: border-box;
      border: none;
      cursor: pointer;
    }

    @media all and (min-width: 1024px) {
      display: flex;
      flex-direction: row;

      & > #preset-list {
        flex: 3 1 0;
        font-size: ${sizeData[4]};
        margin-right: 3px;
        border-radius: 10px 0 0 10px;
      }
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      display: flex;
      flex-direction: row;

      & > #preset-list {
        flex: 3 1 0;
        font-size: ${sizeData[3]};
        margin-right: 3px;
        border-radius: 10px 0 0 10px;
      }
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      & > #preset-list {
        font-size: ${sizeData[3]};
        margin-bottom: 3px;
        border-radius: 10px 10px 0 0;
      }
    }

    @media all and (max-width: 479px) {
      & > #preset-list {
        font-size: ${sizeData[2]};
        margin-bottom: 3px;
        border-radius: 10px 10px 0 0;
      }
    }
  `;

  const onclickRollDices = useCallback(() => {
    dispatch(RollDice({
      value: dicePreset.current.value,
    }));
  }, []);

  const onclickRollRest = useCallback(() => {
    dispatch(ResetForm());

    const presetList = document.getElementById('preset-list') as HTMLSelectElement;
    const rollType = document.getElementById('roll-type') as HTMLSelectElement;

    presetList.value = 'none';
    rollType.value = 'normal';
  }, []);

  return (
    <>
      <div css={TopDicePresetStyle}>
        <select id='preset-list' ref={dicePreset} defaultValue='none'>
          <option value='none' disabled>주사위 프리셋</option>
          {dicesData.map((suffix: string) => (
            <option key={suffix} value={suffix}>{suffix}</option>
          ))}
        </select>
        <Roll onclickRollDices={onclickRollDices} onclickRollRest={onclickRollRest} />
      </div>
    </>
  );
};
