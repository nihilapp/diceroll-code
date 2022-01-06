import React from 'react';
import { css } from '@emotion/react';
import { IHaveChildren } from '@/types';

export const Ul = ({ children, }: IHaveChildren) => {
  const UlStyle = css`
    margin: 40px 0;

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
  `;

  return (
    <>
      <ul css={UlStyle}>{children}</ul>
    </>
  );
};
