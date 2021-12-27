import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';
import { IHaveChildren } from '@/types';

const Heading2 = ({ children, }: IHaveChildren) => {
  const style = css({
    borderLeft: '20px solid #ff4242',
    borderRadius: '0 10px 10px 0',
    color: '#ffffff',
    backgroundColor: '#333333',
    padding: '10px 20px',
    marginBottom: '40px',
    fontWeight: '900',
    letterSpacing: '-1px',

    '@media all and (min-width: 1024px)': {
      fontSize: `${sizeData[5]}`,
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      fontSize: `${sizeData[4]}`,
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      fontSize: `${sizeData[4]}`,
    },
    '@media all and (max-width: 479px)': {
      fontSize: `${sizeData[3]}`,
    },
  });

  return (
    <>
      <h2 css={style}>{children}</h2>
    </>
  );
};

export default Heading2;
