import React, { useState, useCallback, useContext, useRef } from 'react';
import { css } from '@emotion/react';
import { DiceContext } from '@/store/DiceContext';
import Roll from '@/components/Contents/Roll';
import { RESET_FORM, ROLL_DICE } from '@/reducers/DiceReduser';
import fontSize from '@/data/fontSize';

const TopDiceInput = () => {
  const [ values, setValues, ] = useState('');
  const { dispatch, } = useContext(DiceContext);
  const inputRef = useRef(null);
  
  const style = css`
    padding: 10px;
    background-color: #666666;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: all 0.3s;
    
    & > #roll-input {
      outline: none;
      transition: all 0.3s;
      width: 100%;
      background-color: #333333;
      color: #ffffff;
      padding: 5px 10px;
      box-sizing: border-box;
      border: none;
      text-align: center;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > #roll-input {
        font-size: ${fontSize[2]};
        margin-bottom: 3px;
        border-radius: 10px 10px 0 0;
      }
    }

    @media (min-width: 601px) and (max-width: 900px) {
      display: flex;
      flex-direction: row;

      & > #roll-input {
        flex: 3 1 0;
        font-size: ${fontSize[3]};
        margin-right: 3px;
        border-radius: 10px 0 0 10px;
      }
    }

    @media (min-width: 901px) {
      display: flex;
      flex-direction: row;

      & > #roll-input {
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
      value: inputRef.current.value,
    });
    inputRef.current.focus();
  }, []);
  
  const onclickRollRest = useCallback(() => {
    dispatch({
      type: RESET_FORM,
    });
    document.getElementById('roll-type').value = 'normal';
    inputRef.current.focus();
    setValues('');
  }, []);
  
  const onChangeInputDice = useCallback((e) => {
    setValues(e.target.value);
  }, []);
  
  const onInputDice = useCallback((e) => {
    e.target.value = e.target.value.replace(/[^ㅇd0-9-+* ]/gi, '');
  }, []);
  
  const onKeyUpRollDices = useCallback((e) => {
    if (e.keyCode === 13) {
      dispatch({
        type: ROLL_DICE,
        value: inputRef.current.value,
      });
    }
  }, []);
  
  return (
    <>
      <div css={style}>
        <input
          id={'roll-input'}
          type='text'
          placeholder={'주사위식을 입력하세요.'}
          value={values} ref={inputRef}
          onChange={onChangeInputDice}
          onInput={onInputDice}
          onKeyUp={onKeyUpRollDices}
          autoComplete={'off'}
          required
        />
        <Roll onclickRollDices={onclickRollDices} onclickRollRest={onclickRollRest} />
      </div>
    </>
  );
};

export default TopDiceInput;