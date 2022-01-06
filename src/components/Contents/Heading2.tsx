import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';
import { IHaveChildren } from '@/types';

export const Heading2 = ({ children, }: IHaveChildren) => {
  const Heading2Style = css`
    border-left: 20px solid #ff4242;
    border-radius: 0 10px 10px 0;
    color: #ffffff;
    background-color: #333333;
    padding: 10px 20px;
    margin-bottom: 40px;
    font-weight: 900;
    letter-spacing: -1px;

    @media all and (min-width: 1024px) {
      font-size: ${sizeData[5]};
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: ${sizeData[4]};
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: ${sizeData[4]};
    }

    @media all and (max-width: 479px) {
      font-size: ${sizeData[3]};
    }
  `;

  return (
    <>
      <h2 css={Heading2Style}>{children}</h2>
    </>
  );
};
