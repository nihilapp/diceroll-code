import React, { useCallback, useContext, useRef } from 'react';
import { css } from '@emotion/react';
import { DiceContext } from '@/store/DiceContext';
import { ROLL_DICE, RESET_FORM } from '@/reducers/DiceReduser';
import Roll from '@/components/Contents/Roll';
import fontSize from '@/data/fontSize';

const TopDicePreset = () => {
  const { suffixs, dispatch, } = useContext(DiceContext);
  const dicePreset = useRef(null);
  
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
    dispatch({
      type: ROLL_DICE,
      value: dicePreset.current.value,
    });
  }, []);
  
  const onclickRollRest = useCallback(() => {
    dispatch({
      type: RESET_FORM,
    });
    document.getElementById('preset-list').value = 'none';
    document.getElementById('roll-type').value = 'normal';
  }, []);
  
  return (
    <>
      <div css={style}>
        <select id={'preset-list'} ref={dicePreset} defaultValue={'none'}>
          <option value='none' disabled>주사위 프리셋</option>
          {suffixs.map(suffix => (
            <option key={suffix} value={suffix}>{suffix}</option>
          ))}
        </select>
        <Roll onclickRollDices={onclickRollDices} onclickRollRest={onclickRollRest} submit={'false'} />
      </div>
    </>
  );
};

export default TopDicePreset;