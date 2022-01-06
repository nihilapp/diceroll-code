import React from 'react';
import { FaGithub, FaRegCopyright } from 'react-icons/fa';
import { siteData } from '@/data';
import { NavBlock } from '@/components/Layout/NavBlock';
import { HeaderBlockStyle } from './style';

export const HeaderBlock = () => {
  const nowYear = new Date().getFullYear();
  const year = nowYear > 2021 ? `2021-${nowYear}` : `2021`;

  return (
    <>
      <header css={HeaderBlockStyle}>
        <h1>
          <img src={`${siteData.siteUrl}/images/nihil-logo.svg`} alt='니힐 로고' />
          <span>{siteData.siteTitle}</span>
        </h1>
        <p>
          <span className='app-version'>{siteData.siteVersion}</span>
          <a href='https://github.com/nihilapp/diceroll-code' target='_blank' rel='noopener noreferrer' className='app-github'><FaGithub />깃허브</a>
        </p>
        <p><FaRegCopyright />{year}. NIHILncunia.</p>

        <NavBlock />
      </header>
    </>
  );
};
