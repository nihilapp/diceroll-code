import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppDispatch, RootState } from '@/types';
import { ResetForm } from '@/reducers/DiceReducer';
import { DiceResultStyle } from './style';

export const DiceResult = () => {
  const state = useSelector((state: RootState) => state.dice);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    dispatch(ResetForm());
  }, [ router.asPath, ]);

  return (
    <>
      <div id='dice-result' css={DiceResultStyle}>
        {state.slice().reverse().map((resultList) => (
          <div key={uuid()} className='result-item'>
            <div className='item-body'>
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
