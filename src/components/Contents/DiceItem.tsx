import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface Props {
  roll: number;
  color: string;
}

const DiceItem = ({ roll, color, }: Props) => {
  const colorType = {
    critical: '#1e8609',
    fumble: '#a80000',
    normal: '#333333',
  };

  const style = css({
    marginRight: '5px',
    backgroundColor: colorType[color],
    color: '#ffffff',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2px',
    marginBottom: '2px',
    padding: '5px 10px',
    lineHeight: '1',
    borderRadius: '5px',

    '@media all and (min-width: 1024px)': {
      fontSize: `${sizeData[3]}`,
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      fontSize: `${sizeData[3]}`,
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      fontSize: `${sizeData[2]}`,
    },
    '@media all and (max-width: 479px)': {
      fontSize: `${sizeData[2]}`,
    },
  });

  return (
    <>
      <span css={style} className='dice-item'>{roll}</span>
    </>
  );
};

export default DiceItem;
