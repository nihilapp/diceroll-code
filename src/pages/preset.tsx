import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import TopDicePreset from '@/components/TopDicePreset';
import DiceResult from '@/components/Contents/DiceResult';

const preset = () => (
  <>
    <AppLayout>
      <TopDicePreset />
      <DiceResult />
    </AppLayout>
  </>
);

export default preset;
