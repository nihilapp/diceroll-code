import React from 'react';
import { css, Global } from '@emotion/react';
import { ISiteMetaProps } from '@/types';
import { SiteMeta } from '@/components';
import { HeaderBlock, MainBlock } from '@/components/Layout';

const AppLayout = ({ children, meta, }: ISiteMetaProps) => {
  const fontImport = css`
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
  `;

  const globalStyle = css(fontImport, {
    '*': {
      padding: '0',
      margin: '0',
      fontFamily: `'Noto Sans KR', sans-serif`,
    },

    body: {
      padding: '20px',
      boxSizing: 'border-box',
    },

    a: {
      textDecoration: 'none',
    },

    ul: {
      listStyle: 'none',
    },

    strong: {
      fontWeight: '900',
    },
  }, {
    '@media all and (min-width: 1024px)': {
      body: {
        width: '1000px',
        margin: '0 auto',
      },
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      body: {
        maxWidth: '1000px',
        margin: '0 auto',
      },
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      body: {
        width: '100%',
      },
    },
    '@media all and (max-width: 479px)': {
      body: {
        width: '100%',
      },
    },
  });

  return (
    <>
      <Global styles={globalStyle} />
      <SiteMeta meta={meta} />
      <HeaderBlock />

      <MainBlock>
        {children}
      </MainBlock>
    </>
  );
};

export default AppLayout;
