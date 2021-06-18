import React from 'react';
import Head from 'next/head';
import siteData from '@/data/site.config';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps, }) => {
  const router = useRouter();
  
  const pageName = {
    '/': '홈',
    '/preset': '주사위 프리셋',
    '/custom': '커스텀 주사위',
  };
  
  return (
    <>
      <Head>
        <meta charSet='UTF-8'/>
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'} />
  
        <meta property='og:site_name' content={`DiceRoll`} />
        <meta property='og:title' content={`${pageName[router.pathname]} - DiceRoll`} />
        <meta property='og:type' content='website' />
        <meta property='og:description' content='주사위가 필요할 때에 누구나 간편하게 주사위를 굴릴 수 있게끔 해주는 웹 프로그램.' />
        <meta property='og:image' content='https://thediceroll.github.io/assets/images/Dice.png' />
        <meta property='og:url' content={`https://thediceroll.github.io${router.pathname}`} />
        <meta property='og:locale' content='ko_KR' />
  
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='DiceRoll' />
        <meta name='twitter:creator' content='@NIHILncunia' />
        <meta name='twitter:title' content={`${pageName[router.pathname]} - DiceRoll`} />
        <meta name='twitter:description' content='주사위가 필요할 때에 누구나 간편하게 주사위를 굴릴 수 있게끔 해주는 웹 프로그램.' />
        <meta name='twitter:image' content='https://thediceroll.github.io/assets/images/Dice.png' />
  
        <meta name='description' content='주사위가 필요할 때에 누구나 간편하게 주사위를 굴릴 수 있게끔 해주는 웹 프로그램.' />
        <meta name='keywords' content='주사위, Roll, Dice, 주사위 굴리기, 다이스' />
        <meta name='author' content='NIHILncunia'/>
        <meta name='generator' content='VS Code' />
  
        <link
          rel='stylesheet'
          href={'https://use.fontawesome.com/releases/v5.15.1/css/all.css'}
          integrity='sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp'
          crossOrigin='anonymous'
        />
  
        <meta name='robots' content='All' />
        <meta name='robots' content='index, follow' />
        <meta name='NaverBot' content='All'/>
        <meta name='NaverBot' content='index, follow'/>
        <meta name='Yeti' content='All'/>
        <meta name='Yeti' content='index, follow'/>
  
        <meta name='google-site-verification' content='iIK1QMzAYU9YHlIbkvglYdu5GF4WsxIBaV_geNrPVMI' />
  
        <link rel='shortcut icon' href={'/assets/icons/icon.ico'} type='image/x-icon'/>
        <title>{pageName[router.pathname]} - DiceRoll</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;