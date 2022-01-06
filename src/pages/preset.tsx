import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { TopDicePreset } from '@/components';
import { DiceResult } from '@/components/Contents';

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
