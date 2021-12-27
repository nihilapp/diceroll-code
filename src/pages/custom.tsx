import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import TopDiceInput from '@/components/TopDiceInput';
import DiceResult from '@/components/Contents/DiceResult';
import { useSiteMeta } from '@/hooks';

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
