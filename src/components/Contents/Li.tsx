import React from 'react';
import { css } from '@emotion/react';
import { IHaveChildren } from '@/types';
import { sizeData } from '@/data';

export const Li = ({ children, }: IHaveChildren) => {
  const LiStyle = css`
    font-weight: 500;
    letter-spacing: -1px;
    color: #333333;
    margin: 10px 0;
    line-height: 1.8;
    text-align: justify;
    padding: 10px;
    border-radius: 10px;
    background-color: #dddddd90;
    border: 1px solid #88888850;

    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    &:before {
      content: '\\f0a9';
      font-family: 'Font Awesome 5 Free', sans-serif;
      font-weight: 900;
      margin-right: 5px;
    }

    @media all and (min-width: 1024px) {
      font-size: ${sizeData[3]};
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: ${sizeData[3]};
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: ${sizeData[2]};
    }

    @media all and (max-width: 479px) {
      font-size: ${sizeData[2]};
    }
  `;

  return (
    <>
      <li css={LiStyle}>{children}</li>
    </>
  );
};
