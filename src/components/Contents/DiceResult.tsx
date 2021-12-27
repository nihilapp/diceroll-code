import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { sizeData } from '@/data';
import { AppDispatch, RootState } from '@/types';
import { ResetForm } from '@/reducers/DiceReducer';

const DiceResult = () => {
  const state = useSelector((state: RootState) => state.dice);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    dispatch(ResetForm());
  }, [ router.asPath, ]);

  const style = css({
    '& > .result-item': {
      display: 'flex',
      flexDirection: 'row',
      margin: '30px 0',

      '&:before': {
        content: '"\\f061"',
        backgroundColor: '#999999',
        borderRadius: '40px',
        marginRight: '20px',
        fontWeight: '900',
        fontFamily: `'Font Awesome 5 Free', sans-serif`,
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        color: '#ffffff',
      },

      '&:nth-of-type(1)': {
        marginTop: '20px',

        '&:before': {
          backgroundColor: '#333333',
        },
      },

      '&:nth-last-of-type(1)': {
        marginBottom: '0',
      },

      '& > .item-body': {
        padding: '10px 0',
        flex: '1',

        '& > .message-box': {
          fontWeight: '900',
          color: '#333333',
          backgroundColor: '#eeeeee',
          padding: '10px',
          border: '2px solid #33333330',
          borderRadius: '10px',

          '& span': {
            '&.red': {
              backgroundColor: '#ce1c1c',
              color: '#ffffff',
              padding: '0 10px',
              borderRadius: '5px',
              marginRight: '10px',
              fontSize: '90%',
            },
            '&.blue': {
              backgroundColor: '#5d88f930',
              color: '#5d88f9',
              borderRadius: '5px',
              fontSize: '90%',
              padding: '0 10px',
              margin: '0 2px',
              boxSizing: 'border-box',
              border: '1px solid #5d88f990',
            },
          },
        },
      },

      '@media all and (min-width: 1024px)': {
        '& .message-box': {
          fontSize: `${sizeData[6]}`,
        },
        '&:before': {
          fontSize: `${sizeData[7]}`,
        },
      },
      '@media all and (min-width: 768px) and (max-width: 1023px)': {
        '& .message-box': {
          fontSize: `${sizeData[6]}`,
        },
        '&:before': {
          fontSize: `${sizeData[7]}`,
        },
      },
      '@media all and (min-width: 480px) and (max-width: 767px)': {
        '& .message-box': {
          fontSize: `${sizeData[5]}`,
        },
        '&:before': {
          fontSize: `${sizeData[7]}`,
        },
      },
      '@media all and (max-width: 479px)': {
        '& .message-box': {
          fontSize: `${sizeData[5]}`,
        },
        '&:before': {
          fontSize: `${sizeData[7]}`,
        },
      },
    },
  });

  return (
    <>
      <div id='dice-result' css={style}>
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

export default DiceResult;
