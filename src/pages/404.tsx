import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';

const NotPonud404 = () => {
  const style = css`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > p {
      text-align: center;
      color: #333333;

      & > span {
        &:nth-of-type(1) {
          font-weight: 900;
          font-size: 32pt;
          color: #ff4242;
        }

        &:nth-of-type(2) {
          font-weight: 500;
          font-size: 20pt;
        }
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
        <div css={style}>
          <p>
            <span>에러 404</span><br />
            <span>페이지를 찾을 수 없습니다.</span>
          </p>
        </div>
      </AppLayout>
    </>
  );
};

export default NotPonud404;
