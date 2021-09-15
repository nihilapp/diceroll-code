import React, { useCallback, useRef } from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import Roll from '@/components/Contents/Roll';
import fontSize from '@/data/fontSize';
import dicePresets from '@/data/dicePresets';
import { RollDice, ResetForm } from '@/reducers/DiceReducer';
import { AppDispatch } from '@/types';

const TopDicePreset = () => {
  const dicePreset = useRef(null);

  const dispatch = useDispatch<AppDispatch>();

  const style = css`
    padding: 10px;
    background-color: #666666;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: all 0.3s;

    & > #preset-list {
      text-align-last: center;
      outline: none;
      transition: all 0.3s;
      width: 100%;
      background-color: #333333;
      color: #ffffff;
      padding: 5px 10px;
      box-sizing: border-box;
      border: none;
      cursor: pointer;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > #preset-list {
        font-size: ${fontSize[2]};
        margin-bottom: 3px;
        border-radius: 10px 10px 0 0;
      }
    }

    @media (min-width: 601px) and (max-width: 900px) {
      display: flex;
      flex-direction: row;

      & > #preset-list {
        flex: 3 1 0;
        font-size: ${fontSize[3]};
        margin-right: 3px;
        border-radius: 10px 0 0 10px;
      }
    }

    @media (min-width: 901px) {
      display: flex;
      flex-direction: row;

      & > #preset-list {
        flex: 3 1 0;
        font-size: ${fontSize[4]};
        margin-right: 3px;
        border-radius: 10px 0 0 10px;
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
      <div css={style}>
        <select id='preset-list' ref={dicePreset} defaultValue='none'>
          <option value='none' disabled>주사위 프리셋</option>
          {dicePresets.map((suffix) => (
            <option key={suffix} value={suffix}>{suffix}</option>
          ))}
        </select>
        <Roll onclickRollDices={onclickRollDices} onclickRollRest={onclickRollRest} />
      </div>
    </>
  );
};

export default TopDicePreset;
