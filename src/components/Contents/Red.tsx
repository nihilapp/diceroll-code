import React from 'react';
import { css } from '@emotion/react';
import { IHaveChildren } from '@/types';

export const Red = ({ children, }: IHaveChildren) => {
  const RedStyle = css`
    background-color: #ff4242aa;
    color: #ffffff;
    border-radius: 5px;
    padding: 0 5px;
    font-weight: 900;
    border: 2px solid #ff4242dd;
  `;

  return (
    <>
      <span css={RedStyle}>{children}</span>
    </>
  );
};
