import React from 'react';
import { FaDiceD20, FaHome } from 'react-icons/fa';
import { IPathData } from '@/types';

export const pathData: IPathData[] = [
  {
    label: '홈',
    href: '/',
    icon: <FaHome />,
  },
  {
    label: '주사위 프리셋',
    href: '/preset',
    icon: <FaDiceD20 />,
  },
  {
    label: '커스텀 주사위',
    href: '/custom',
    icon: <FaDiceD20 />,
  },
];
