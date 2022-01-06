import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { sizeData } from '@/data';
import { Heading2 } from '@/components/Contents';

const NotPonud404 = () => {
  const NotPonud404Style = css`
    & > p {
      font-weight: 500;
      color: #333333;
      letter-spacing: -1px;

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
    }
  `;

  const meta = useSiteMeta({
    title: '404',
    url: '/404',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div css={NotPonud404Style}>
          <Heading2>404 에러</Heading2>
          <p>페이지를 찾을 수 없습니다.</p>
        </div>
      </AppLayout>
    </>
  );
};

export default NotPonud404;
