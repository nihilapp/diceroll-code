import React, {
  useState, useCallback, useRef
} from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import Roll from '@/components/Contents/Roll';
import { sizeData } from '@/data';
import { RollDice, ResetForm } from '@/reducers/DiceReducer';
import { AppDispatch } from '@/types';

const TopDiceInput = () => {
  const [ values, setValues, ] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const inputRef = useRef(null);

  const style = css({
    padding: '10px',
    backgroundColor: '#666666',
    borderRadius: '10px',
    marginBottom: '20px',

    '& > #roll-input': {
      outline: 'none',
      width: '100%',
      backgroundColor: '#333333',
      color: '#ffffff',
      padding: '5px 10px',
      boxSizing: 'border-box',
      border: 'none',
      textAlign: 'center',
    },
  }, {
    '@media all and (min-width: 1024px)': {
      display: 'flex',
      flexDirection: 'row',

      '& > #roll-input': {
        flex: '3 1 0',
        fontSize: `${sizeData[4]}`,
        marginRight: '3px',
        borderRadius: '10px 0 0 10px',
      },
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      display: 'flex',
      flexDirection: 'row',

      '& > #roll-input': {
        flex: '3 1 0',
        fontSize: `${sizeData[3]}`,
        marginRight: '3px',
        borderRadius: '10px 0 0 10px',
      },
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      '& > #roll-input': {
        flex: '3 1 0',
        fontSize: `${sizeData[3]}`,
        marginBottom: '3px',
        borderRadius: '10px 10px 0 0',
      },
    },
    '@media all and (max-width: 479px)': {
      '& > #roll-input': {
        fontSize: `${sizeData[2]}`,
        marginBottom: '3px',
        borderRadius: '10px 10px 0 0',
      },
    },
  });

  const onclickRollDices = useCallback(() => {
    dispatch(RollDice({
      value: inputRef.current.value,
    }));
    inputRef.current.focus();
  }, []);

  const onclickRollRest = useCallback(() => {
    dispatch(ResetForm());
    const rollType = document.getElementById('roll-type') as HTMLSelectElement;
    rollType.value = 'normal';

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
      dispatch(RollDice({
        value: inputRef.current.value,
      }));
    }
  }, []);

  return (
    <>
      <div css={style}>
        <input
          id='roll-input'
          type='text'
          placeholder='주사위식을 입력하세요.'
          value={values}
          ref={inputRef}
          onChange={onChangeInputDice}
          onInput={onInputDice}
          onKeyUp={onKeyUpRollDices}
          autoComplete='off'
          required
        />
        <Roll onclickRollDices={onclickRollDices} onclickRollRest={onclickRollRest} />
      </div>
    </>
  );
};

export default TopDiceInput;
