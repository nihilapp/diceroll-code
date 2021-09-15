import React from 'react';
import { css } from '@emotion/react';
import fontSize from '@/data/fontSize';
import { IHaveChildren } from '@/types';

const Heading2 = ({ children, }: IHaveChildren) => {
  const style = css`
    border-left: 20px solid #ff4242;
    border-radius: 0 10px 10px 0;
    color: #ffffff;
    background-color: #333333;
    padding: 10px 20px;
    margin-bottom: 40px;
    transition: all 0.3s;
    font-weight: 900;

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${fontSize[3]};
    }

    @media (min-width: 601px) and (max-width: 900px) {
      font-size: ${fontSize[4]};
    }

    @media (min-width: 901px) {
      font-size: ${fontSize[5]};
    }
  `;

  return (
    <>
      <h2 css={style}>{children}</h2>
    </>
  );
};

export default Heading2;
