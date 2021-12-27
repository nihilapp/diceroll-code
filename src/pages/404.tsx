import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import Heading2 from '@/components/Contents/Heading2';
import { sizeData } from '@/data';

const NotPonud404 = () => {
  const style = css({
    '& > p': {
      fontWeight: '500',
      color: '#333333',
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
    },
  });

  const meta = useSiteMeta({
    title: '404',
    url: '/404',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div css={style}>
          <Heading2>404 에러</Heading2>
          <p>페이지를 찾을 수 없습니다.</p>
        </div>
      </AppLayout>
    </>
  );
};

export default NotPonud404;
