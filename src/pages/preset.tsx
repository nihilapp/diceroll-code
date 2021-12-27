import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import TopDicePreset from '@/components/TopDicePreset';
import DiceResult from '@/components/Contents/DiceResult';
import { useSiteMeta } from '@/hooks';

const PresetPage = () => {
  const meta = useSiteMeta({
    title: '주사위 프리셋',
    url: '/preset',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <TopDicePreset />
        <DiceResult />
      </AppLayout>
    </>
  );
};

export default PresetPage;
