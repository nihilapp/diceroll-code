import React, { useCallback, useRef } from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import Roll from '@/components/Contents/Roll';
import { sizeData, dicesData } from '@/data';

import { RollDice, ResetForm } from '@/reducers/DiceReducer';
import { AppDispatch } from '@/types';

const TopDicePreset = () => {
  const dicePreset = useRef(null);

  const dispatch = useDispatch<AppDispatch>();

  const style = css({
    padding: '10px',
    backgroundColor: '#666666',
    borderRadius: '10px',
    marginBottom: '20px',

    '& > #preset-list': {
      textAlignLast: 'center',
      outline: 'none',
      width: '100%',
      backgroundColor: '#333333',
      color: '#ffffff',
      padding: '5px 10px',
      boxSizing: 'border-box',
      border: 'none',
      cursor: 'pointer',
    },
  }, {
    '@media all and (min-width: 1024px)': {
      display: 'flex',
      flexDirection: 'row',

      '& > #preset-list': {
        flex: '3 1 0',
        fontSize: `${sizeData[4]}`,
        marginRight: '3px',
        borderRadius: '10px 0 0 10px',
      },
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      display: 'flex',
      flexDirection: 'row',

      '& > #preset-list': {
        flex: '3 1 0',
        fontSize: `${sizeData[3]}`,
        marginRight: '3px',
        borderRadius: '10px 0 0 10px',
      },
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      '& > #preset-list': {
        flex: '3 1 0',
        fontSize: `${sizeData[3]}`,
        marginBottom: '3px',
        borderRadius: '10px 10px 0 0',
      },
    },
    '@media all and (max-width: 479px)': {
      '& > #preset-list': {
        flex: '3 1 0',
        fontSize: `${sizeData[2]}`,
        marginBottom: '3px',
        borderRadius: '10px 10px 0 0',
      },
    },
  });

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
          {dicesData.map((suffix: string) => (
            <option key={suffix} value={suffix}>{suffix}</option>
          ))}
        </select>
        <Roll onclickRollDices={onclickRollDices} onclickRollRest={onclickRollRest} />
      </div>
    </>
  );
};

export default TopDicePreset;
