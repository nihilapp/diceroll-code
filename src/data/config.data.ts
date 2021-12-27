import { IConfig } from '@/types';

export const siteData: IConfig = {
  siteTitle: 'DiceRoll',
  siteDescription: '주사위가 필요할 때에 누구나 간편하게 주사위를 굴릴 수 있게끔 해주는 웹 프로그램.',
  siteKeywords: '주사위, Roll, Dice, 주사위 굴리기, 다이스',
  siteType: 'website',
  siteUrl: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/dice'
    : 'https://nihilapp.github.io/dice',
  siteImage: '/images/site-image.png',
  siteVersion: 'v3.9.0',
};
