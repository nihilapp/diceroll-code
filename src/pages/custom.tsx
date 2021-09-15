import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import TopDiceInput from '@/components/TopDiceInput';
import DiceResult from '@/components/Contents/DiceResult';

const custom = () => (
  <>
    <AppLayout>
      <TopDiceInput />
      <DiceResult />
    </AppLayout>
  </>
);

export default custom;
