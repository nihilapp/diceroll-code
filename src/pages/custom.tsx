import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { TopDiceInput } from '@/components';
import { DiceResult } from '@/components/Contents';

const CustomPage = () => {
  const meta = useSiteMeta({
    title: '커스텀 주사위',
    url: '/custom',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <TopDiceInput />
        <DiceResult />
      </AppLayout>
    </>
  );
};

export default CustomPage;
