import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface Props {
  onclickRollDices: () => void;
  onclickRollRest: () => void;
}

const Roll = ({ onclickRollDices, onclickRollRest, }: Props) => {
  const style = css({
    display: 'flex',
    flexDirection: 'row',

    '& > #roll-type': {
      textAlignLast: 'center',
    },

    '& > #roll-type, & > #roll-dice, & > #roll-reset': {
      outline: 'none',
      padding: '5px 10px',
      backgroundColor: '#333333',
      color: '#ffffff',
      border: 'none',
      cursor: 'pointer',
    },

    '& > #roll-dice, & > #roll-reset': {
      '&:hover': {
        backgroundColor: '#ff4242',
        color: '#ffffff',
      },
    },
  }, {
    '@media all and (min-width: 1024px)': {
      '& > #roll-type, & > #roll-dice, & > #roll-reset': {
        fontSize: `${sizeData[4]}`,
      },
      '& > #roll-type, & > #roll-dice': {
        marginRight: '3px',
      },
      '& > #roll-reset': {
        borderRadius: '0 10px 10px 0',
      },
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      '& > #roll-type, & > #roll-dice, & > #roll-reset': {
        fontSize: `${sizeData[3]}`,
      },
      '& > #roll-type, & > #roll-dice': {
        marginRight: '3px',
      },
      '& > #roll-reset': {
        borderRadius: '0 10px 10px 0',
      },
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      '& > #roll-type, & > #roll-dice, & > #roll-reset': {
        flex: '1',
        fontSize: `${sizeData[3]}`,
      },
      '& > #roll-type, & > #roll-dice': {
        marginRight: '3px',
      },
      '& > #roll-type': {
        borderRadius: '0 0 0 10px',
      },
      '& > #roll-reset': {
        borderRadius: '0 0 10px 0',
      },
    },
    '@media all and (max-width: 479px)': {
      '& > #roll-type, & > #roll-dice, & > #roll-reset': {
        flex: '1',
        fontSize: `${sizeData[2]}`,
      },
      '& > #roll-type, & > #roll-dice': {
        marginRight: '3px',
      },
      '& > #roll-type': {
        borderRadius: '0 0 0 10px',
      },
      '& > #roll-reset': {
        borderRadius: '0 0 10px 0',
      },
    },
  });

  return (
    <>
      <div css={style}>
        <select name='roll-type' id='roll-type' defaultValue='normal'>
          <option value='normal'>랜덤</option>
          <option value='maximum'>최대값</option>
          <option value='minimum'>최소값</option>
        </select>
        <button type='button' id='roll-dice' onClick={onclickRollDices}>굴리기</button>
        <button type='button' id='roll-reset' onClick={onclickRollRest}>초기화</button>
      </div>
    </>
  );
};

export default Roll;
