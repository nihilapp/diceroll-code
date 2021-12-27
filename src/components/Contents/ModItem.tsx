import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface Props {
  modType: ('penaltyMod' | 'bonusMod');
  value: (number | string);
}

const ModItem = ({ modType, value, }: Props) => {
  const mod = {
    penaltyMod: '#a80000',
    bonusMod: '#147500',
  };

  const style = css({
    backgroundColor: mod[modType],
    marginRight: '5px',
    lineHeight: '1',
    marginTop: '2px',
    marginBottom: '2px',
    display: 'inline-block',
    color: '#ffffff',
    borderRadius: '5px',
    padding: '5px 10px',
    letterSpacing: '-1px',

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
      <span css={style} className='mod-item'>{value}</span>
    </>
  );
};

export default ModItem;
